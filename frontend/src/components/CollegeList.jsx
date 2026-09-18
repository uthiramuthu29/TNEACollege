import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import CollegeCard from "./CollegeCard";
import { fetchColleges } from "../api";

export default function CollegeList({ collegeSearch }) {
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(collegeSearch.trim());
    }, 1000);

    return () => clearTimeout(timer);
  }, [collegeSearch]);

  const {
    data: colleges = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["colleges", debouncedSearch],
    queryFn: () => fetchColleges(debouncedSearch),
  });

  const isCurrentlyLoading = isLoading || isFetching;

  return (
    <>
      <div className="college-list mt-6 flex flex-col gap-6 ">
        {isCurrentlyLoading ? (
          <p className="text-center text-[#74777F] text-[14px]">
            Loading colleges...
          </p>
        ) : colleges.length === 0 ? (
          <p className="text-center text-[#74777F] text-[14px]">
            No colleges found
          </p>
        ) : (
          colleges.map((college) => (
            <CollegeCard key={college.code} college={college} />
          ))
        )}
      </div>
    </>
  );
}
