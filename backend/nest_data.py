import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(MONGO_URI)
db = client["TNEACollegeDB"]

def migrate_to_nested():
    print("Starting data nesting migration...")
    
    # Define aggregation pipeline
    pipeline = [
        {
            "$group": {
                "_id": {
                    "college_code": "$college_code",
                    "year": "$year"
                },
                "college_name": {"$first": "$college_name"},
                "district": {"$first": "$district"},
                "college_type": {"$first": "$college_type"},
                "branches": {"$push": "$$ROOT"}
            }
        },
        {
            "$project": {
                "_id": 0,
                "college_code": "$_id.college_code",
                "year": "$_id.year",
                "college_name": 1,
                "district": 1,
                "college_type": 1,
                "branches": {
                    "$map": {
                        "input": "$branches",
                        "as": "b",
                        "in": {
                            "$arrayToObject": {
                                "$filter": {
                                    "input": {"$objectToArray": "$$b"},
                                    "as": "item",
                                    "cond": {
                                        "$not": {
                                            "$in": [
                                                "$$item.k",
                                                ["_id", "college_code", "college_name", "district", "college_type", "year"]
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "$out": "CollegeNestedData"
        }
    ]
    
    try:
        # Run aggregation on the raw collection
        db["CollegeRawData"].aggregate(pipeline)
        
        # Verify the target collection counts
        nested_count = db["CollegeNestedData"].count_documents({})
        raw_count = db["CollegeRawData"].count_documents({})
        
        print("Migration complete!")
        print(f"Total documents in CollegeRawData: {raw_count}")
        print(f"Total nested documents created in CollegeNestedData: {nested_count}")
        
    except Exception as e:
        print(f"Migration failed: {e}")

if __name__ == "__main__":
    migrate_to_nested()
