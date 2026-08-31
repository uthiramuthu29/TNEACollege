import os
from typing import Optional, List
from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = FastAPI(
    title="TNEA Admissions Data API",
    description="A FastAPI backend hosting TNEA admission seats, cutoffs, and ranks from MongoDB.",
    version="1.0.0"
)

# Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MongoDB
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(MONGO_URI)
db = client["TNEACollegeDB"]
collection = db["CollegeNestedData"]

@app.get("/")
def read_root():
    return {
        "status": "online",
        "database": "TNEACollegeDB",
        "collection": "CollegeNestedData",
        "total_documents": collection.count_documents({})
    }

@app.get("/years")
def get_years():
    """Get all unique years present in the dataset."""
    try:
        years = sorted(collection.distinct("year"))
        return {"years": years}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/districts")
def get_districts():
    """Get all unique districts."""
    try:
        districts = sorted([d for d in collection.distinct("district") if d])
        return {"districts": districts}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/college-types")
def get_college_types():
    """Get all unique college types (e.g., Government, Aided, Self-Financing)."""
    try:
        types = sorted([t for t in collection.distinct("college_type") if t])
        return {"types": types}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/branches")
def get_branches():
    """Get a list of all unique engineering branches."""
    try:
        pipeline = [
            {"$unwind": "$branches"},
            {"$group": {
                "_id": "$branches.branch_code",
                "name": {"$first": "$branches.branch_name"}
            }},
            {"$project": {
                "code": "$_id",
                "name": 1,
                "_id": 0
            }},
            {"$sort": {"code": 1}}
        ]
        branches = list(collection.aggregate(pipeline))
        return {"branches": branches}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/colleges")
def get_colleges(
    district: Optional[str] = Query(None, description="Filter by district"),
    college_type: Optional[str] = Query(None, description="Filter by college type"),
    search: Optional[str] = Query(None, description="Search by college name or code")
):
    """Get all unique colleges with optional search filters. Returns branches from the latest available year."""
    try:
        match_stage = {}
        if district:
            match_stage["district"] = district.strip().upper()
        if college_type:
            match_stage["college_type"] = college_type.strip().upper()
        if search:
            if search.strip().isdigit():
                match_stage["college_code"] = int(search)
            else:
                match_stage["college_name"] = {"$regex": search.strip(), "$options": "i"}

        pipeline = []
        if match_stage:
            pipeline.append({"$match": match_stage})

        pipeline.extend([
            {"$sort": {"year": -1}},
            {"$group": {
                "_id": "$college_code",
                "name": {"$first": "$college_name"},
                "district": {"$first": "$district"},
                "type": {"$first": "$college_type"},
                "year": {"$first": "$year"},
                "branches": {"$first": "$branches"}
            }},
            {"$project": {
                "code": "$_id",
                "name": 1,
                "district": 1,
                "type": 1,
                "year": 1,
                "branches": 1,
                "_id": 0
            }},
            {"$sort": {"name": 1}}
        ])
        
        colleges = list(collection.aggregate(pipeline))
        return {"colleges": colleges}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/admissions")
def get_admissions(
    year: Optional[int] = Query(None, description="Filter by year"),
    college_code: Optional[int] = Query(None, description="Filter by college code"),
    branch_code: Optional[str] = Query(None, description="Filter by branch code"),
    district: Optional[str] = Query(None, description="Filter by district"),
    college_type: Optional[str] = Query(None, description="Filter by college type"),
    search: Optional[str] = Query(None, description="General regex search on college name or branch name"),
    cutoff_community: Optional[str] = Query(None, description="Community (oc, bc, mbc, etc.) to filter cutoff on"),
    min_cutoff: Optional[float] = Query(None, description="Minimum cutoff mark"),
    max_cutoff: Optional[float] = Query(None, description="Maximum cutoff mark"),
    limit: int = Query(50, ge=1, le=500, description="Max documents to return"),
    skip: int = Query(0, ge=0, description="Documents to skip for pagination")
):
    """Retrieve combined admissions data (seats, cutoffs, ranks) based on query parameters by flattening nested data."""
    try:
        # Initial match stage for top-level keys
        match_stage = {}
        if year:
            match_stage["year"] = year
        if college_code:
            match_stage["college_code"] = college_code
        if district:
            match_stage["district"] = district.strip().upper()
        if college_type:
            match_stage["college_type"] = college_type.strip().upper()

        pipeline = []
        if match_stage:
            pipeline.append({"$match": match_stage})

        # Unwind branches to flatten
        pipeline.append({"$unwind": "$branches"})

        # Post-unwind match stage for course-level keys and generic search
        post_match = {}
        if branch_code:
            post_match["branches.branch_code"] = branch_code.strip().upper()
        
        if search:
            post_match["$or"] = [
                {"college_name": {"$regex": search.strip(), "$options": "i"}},
                {"branches.branch_name": {"$regex": search.strip(), "$options": "i"}}
            ]

        if cutoff_community:
            comm = cutoff_community.strip().lower()
            cutoff_field = f"branches.{comm}_cutoff"
            cutoff_query = {}
            if min_cutoff is not None:
                cutoff_query["$gte"] = min_cutoff
            if max_cutoff is not None:
                cutoff_query["$lte"] = max_cutoff
            if cutoff_query:
                post_match[cutoff_field] = cutoff_query

        if post_match:
            pipeline.append({"$match": post_match})

        # Project and flatten fields to match original schema
        pipeline.append({
            "$project": {
                "year": 1,
                "college_code": 1,
                "college_name": 1,
                "district": 1,
                "college_type": 1,
                "branch_code": "$branches.branch_code",
                "branch_name": "$branches.branch_name",
                "oc_initial": "$branches.oc_initial",
                "oc_filled": "$branches.oc_filled",
                "oc_cutoff": "$branches.oc_cutoff",
                "oc_rank": "$branches.oc_rank",
                "bc_initial": "$branches.bc_initial",
                "bc_filled": "$branches.bc_filled",
                "bc_cutoff": "$branches.bc_cutoff",
                "bc_rank": "$branches.bc_rank",
                "bcm_initial": "$branches.bcm_initial",
                "bcm_filled": "$branches.bcm_filled",
                "bcm_cutoff": "$branches.bcm_cutoff",
                "bcm_rank": "$branches.bcm_rank",
                "mbc_initial": "$branches.mbc_initial",
                "mbc_filled": "$branches.mbc_filled",
                "mbc_cutoff": "$branches.mbc_cutoff",
                "mbc_rank": "$branches.mbc_rank",
                "sc_initial": "$branches.sc_initial",
                "sc_filled": "$branches.sc_filled",
                "sc_cutoff": "$branches.sc_cutoff",
                "sc_rank": "$branches.sc_rank",
                "sca_initial": "$branches.sca_initial",
                "sca_filled": "$branches.sca_filled",
                "sca_cutoff": "$branches.sca_cutoff",
                "sca_rank": "$branches.sca_rank",
                "st_initial": "$branches.st_initial",
                "st_filled": "$branches.st_filled",
                "st_cutoff": "$branches.st_cutoff",
                "st_rank": "$branches.st_rank",
                "_id": 0
            }
        })

        # Apply skip and limit pagination
        pipeline.append({"$skip": skip})
        pipeline.append({"$limit": limit})

        results = list(collection.aggregate(pipeline))

        return {
            "count": len(results),
            "results": results
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/college/{code}")
def get_college_details(code: int, year: Optional[int] = Query(None)):
    """Get complete details and course offerings for a specific college code."""
    try:
        # Check if college exists
        college_doc = collection.find_one({"college_code": code})
        if not college_doc:
            raise HTTPException(status_code=404, detail=f"College with code {code} not found")
            
        # Fetch matching nested documents (sorted by year descending)
        query = {"college_code": code}
        if year:
            query["year"] = year
            
        docs = list(collection.find(query).sort("year", -1))
        
        # Flatten offerings to preserve the expected API response schema
        offerings = []
        for doc in docs:
            doc_year = doc["year"]
            sorted_branches = sorted(doc.get("branches", []), key=lambda x: x.get("branch_name", ""))
            for b in sorted_branches:
                offering = {
                    "year": doc_year,
                    "college_code": code,
                    "college_name": doc["college_name"],
                    "district": doc["district"],
                    "college_type": doc["college_type"],
                    **b
                }
                offerings.append(offering)
        
        return {
            "college": {
                "code": college_doc["college_code"],
                "name": college_doc["college_name"],
                "district": college_doc["district"],
                "type": college_doc["college_type"]
            },
            "courses_count": len(offerings),
            "offerings": offerings
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
