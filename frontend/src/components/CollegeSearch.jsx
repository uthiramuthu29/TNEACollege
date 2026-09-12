import { Search, SlidersHorizontal } from "lucide-react";

export default function CollegeSearch({ collegeSearch, setCollegeSearch }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="search-container relative ">
        <Search className="absolute text-[#74777F] top-1/3 left-3 " size={18} />
        <input
          type="text"
          placeholder="Search college name or code.."
          className="text-[14px] text-[#6B7280] bg-white border border-[#C4C6CF] rounded-xl pl-10 pr-3 py-3 w-full"
          onChange={(e) => setCollegeSearch(e.target.value)}
          value={collegeSearch}
        />
      </div>

      <button className="text-[#86A0CD] flex justify-center items-center gap-3 text-[12px] leading-4 bg-[#1A365D] w-full py-3 font-inter font-semibold rounded-xl ">
      <SlidersHorizontal size={18} />Advanced Filters
      </button>
      {/* <button className="text-[navy-dark] text-[12px] leading-4 bg-white w-full py-3 font-inter font-semibold rounded-xl border border-mist-300 ">
        Search
      </button> */}
    </div>
  );
}
