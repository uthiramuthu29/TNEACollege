import { useQuery } from "@tanstack/react-query";
import CollegeCard from "./CollegeCard";
import { fetchColleges } from "../api";
import { getCollegeRankings } from "../utils";
import { Loader2 } from "lucide-react";

export default function CollegeList({ collegeSearchQuery, tneaCutoffQuery }) {
  const {
    data: colleges = [],
    isLoading,
  } = useQuery({
    queryKey: ["colleges", collegeSearchQuery],
    queryFn: () => fetchColleges(collegeSearchQuery),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  const {
    data: admissions = [],
  } = useQuery({
    queryKey: ["admissions", tneaCutoffQuery],
    queryFn: () => fetchColleges(tneaCutoffQuery),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  const rankedColleges = getCollegeRankings(colleges);

  const isCurrentlyLoading = isLoading;

  return (
    <>
      <div className="college-list mt-6 flex flex-col gap-6 ">
        {isCurrentlyLoading ? (
          <p className="text-center px-8 py-15  text-[#74777F] text-[14px]">
            <Loader2
              size={22}
              className="animate-spin text-navy-dark mx-auto mb-2 "
            />
            Loading colleges...
          </p>
        ) : rankedColleges.length === 0 ? (
          <p className="text-center text-[#74777F] text-[14px]">
            No colleges found
          </p>
        ) : (
          rankedColleges.map((college) => (
            <CollegeCard key={college.code} college={college} />
          )).slice(0, 3)
        )}
      </div>
    </>
  );
}
