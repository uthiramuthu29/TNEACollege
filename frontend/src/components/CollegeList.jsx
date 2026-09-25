import { useQuery } from "@tanstack/react-query";
import CollegeCard from "./CollegeCard";
import { fetchAdmissions, fetchColleges } from "../api";
import { getCollegeRankings } from "../utils";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function CollegeList({ collegeSearchQuery }) {
  const tneaCutoffQuery = useSelector((state) => state.cutoff);

  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["colleges", collegeSearchQuery],
    queryFn: () => fetchColleges(collegeSearchQuery),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  const { data: admissions = [], isLoading: admissionsLoading } = useQuery({
    queryKey: ["admissions", tneaCutoffQuery],
    queryFn: () => fetchAdmissions(tneaCutoffQuery),
    enabled: Boolean(tneaCutoffQuery.cutoff && tneaCutoffQuery.community),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  console.log("TNEA Query:", tneaCutoffQuery);
  console.log("Admissions:", admissions);

  const isCutoffMode = Boolean(
    tneaCutoffQuery.cutoff && tneaCutoffQuery.community,
  );

  const rankedColleges = getCollegeRankings(colleges);
  const displayedColleges = isCutoffMode ? admissions : rankedColleges;

  const isCurrentlyLoading = isCutoffMode ? admissionsLoading : isLoading;

  return (
    <>
      <div className="college-list mt-6 flex flex-col ">
        <p>{displayedColleges.length} out of {colleges.length}</p>
        {isCurrentlyLoading ? (
          <p className="text-center px-8 py-15  text-[#74777F] text-[14px]">
            <Loader2
              size={22}
              className="animate-spin text-navy-dark mx-auto mb-2 "
            />
            Loading colleges...
          </p>
        ) : displayedColleges.length === 0 ? (
          <p className="text-center text-[#74777F] text-[14px]">
            No colleges found
          </p>
        ) : (
          displayedColleges.map((college) => (
            <CollegeCard key={college.code} college={college} />
          ))
        )}
      </div>
    </>
  );
}
