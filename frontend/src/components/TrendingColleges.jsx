import { SubHeading, PagePara } from "../resuableChunks/Typography";
import { TrendingCollegesCard } from "../resuableChunks/Cards";
import { useQuery } from "@tanstack/react-query";
import { fetchColleges } from "../api";
import { getHighestCutoff } from "../utils";


export default function TrendingColleges() {
  const {
    data: colleges = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["colleges", ""],
    queryFn: () => fetchColleges(""),
    select: (data) =>
      [...data].sort((a, b) => getHighestCutoff(b) - getHighestCutoff(a)).slice(0,10),
  });
  const isCurrentlyLoading = isLoading || isFetching;

  return (
    <div className="trending-colleges ">
      <div className=" mb-4 ">
        <SubHeading className="mb-2">Trending Colleges</SubHeading>
        <PagePara>Based on 2025 Choice Preference</PagePara>
      </div>
      <ul className="mb-6 ">
        {isCurrentlyLoading ? (
          <p className="text-center text-[#74777F] text-[14px]">
            Loading colleges...
          </p>
        ) : (
          colleges.map((college, index) => (
            <TrendingCollegesCard key={college.code} college={college} rank={index + 1} />
          ))
        )}
      </ul>
      <button className="text-[12px] leading-4 text-navy-dark font-inter font-semibold underline block mx-auto ">
        EXPLORE ALL RANKINGS
      </button>
    </div>
  );
}
