import { SubHeading, PagePara } from "../resuableChunks/Typography";
import { TopCollegesCard } from "../resuableChunks/Cards";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchColleges } from "../api";
import { getHighestCutoff } from "../utils";

export default function TopColleges() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["colleges", ""],
    queryFn: () => fetchColleges(""),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    select: (data) =>
      [...data]
        .sort((a, b) => getHighestCutoff(b) - getHighestCutoff(a))
        .slice(0, 10),
  });
  const isCurrentlyLoading = isLoading;

  const displayedColleges = isExpanded ? colleges : colleges.slice(0, 3);

  return (
    <div className="top-colleges ">
      <div className=" mb-4 ">
        <SubHeading className="mb-2">Top Colleges</SubHeading>
        <PagePara>Based on 2025 Choice Preference</PagePara>
      </div>
      <ul className="mb-6 ">
        {isCurrentlyLoading ? (
          <p className="text-center text-[#74777F] text-[14px]">
            Loading colleges...
          </p>
        ) : (
          displayedColleges.map((college, index) => (
            <TopCollegesCard
              key={college.code}
              college={college}
              rank={index + 1}
            />
          ))
        )}
      </ul>
      {colleges.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[12px] leading-4 text-navy-dark font-inter font-semibold underline block mx-auto "
        >
          {isExpanded ? "SHOW LESS" : "EXPLORE MORE RANKINGS"}
        </button>
      )}
    </div>
  );
}
