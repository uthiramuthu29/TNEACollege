import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CollegeCard from "./CollegeCard";
import { fetchAdmissions, fetchColleges } from "../api";
import { getCollegeRankings } from "../utils";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function CollegeList({ collegeSearchQuery }) {
  const tneaCutoffQuery = useSelector((state) => state.cutoff);

  const { search = "", district = "", branch = "" } = collegeSearchQuery || {};

  const [visibleCount, setVisibleCount] = useState(5);

  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["colleges", collegeSearchQuery],
    queryFn: () => fetchColleges({}),
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

  const rankedColleges = getCollegeRankings(colleges);

  const filteredColleges = rankedColleges.filter((college) => {
    const normalizedSearch = search.trim().toLowerCase();

    const normalizedDistrict = district.trim().toLowerCase();

    const normalizedBranch = branch.trim().toLowerCase();

    const matchesSearch =
      !normalizedSearch ||
      college.name?.toLowerCase().includes(normalizedSearch) ||
      String(college.code).includes(normalizedSearch);

    const matchesDistrict =
      !normalizedDistrict ||
      college.district?.toLowerCase() === normalizedDistrict.toLowerCase();

    const matchesBranch =
      !normalizedBranch ||
      college.branches?.some(
        (branch) =>
          branch.branch_code?.toLowerCase() === normalizedBranch?.toLowerCase(),
      );

    return matchesSearch && matchesDistrict && matchesBranch;
  });

  const isCutoffMode = Boolean(
    tneaCutoffQuery.cutoff && tneaCutoffQuery.community,
  );

  const displayedColleges = isCutoffMode ? admissions : filteredColleges;

  const isCurrentlyLoading = isCutoffMode ? admissionsLoading : isLoading;

  const visibleColleges = displayedColleges.slice(0, visibleCount);

  const hasMore = visibleCount < displayedColleges.length;

  return (
    <>
      <div className="college-list mt-6 flex flex-col ">
        <p className="bg-light-green text-[14px] text-dark-green font-inter p-2 rounded-2xl mb-4 " >
          Showing {displayedColleges.length} out of {colleges.length}
        </p>
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
          visibleColleges.map((college) => (
            <CollegeCard key={college.code} college={college} />
          ))
        )}

        {hasMore && (
          <button
            className="text-[12px] font-semibold font-inter leading-4 px-8 py-3 border border-navy-dark text-navy-dark rounded-4xl "
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </>
  );
}
