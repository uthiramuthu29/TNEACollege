import { Search, SlidersHorizontal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchBranches, fetchDistricts, fetchYears } from "../api";
import { communityList } from "../utils";
import { CustomDropdown } from "../resuableChunks/FormFields";

export default function CollegeSearch({ collegeSearch, setCollegeSearch }) {
  const [selectedYear, setSelectedYear] = useState(2025);
  // const [selectedDistrict, setSelectedDistrict] = useState("");
  // const [selectedBranch, setSelectedBranch] = useState("");
  // const [selectedCommunity, setSelectedCommunity] = useState("");

  const { data: years = [] } = useQuery({
    queryKey: ["years"],
    queryFn: () => fetchYears(),
  });

  // const { data: districts = [] } = useQuery({
  //   queryKey: ["districts"],
  //   queryFn: () => fetchDistricts(),
  // });

  // const { data: branches = [] } = useQuery({
  //   queryKey: ["branches"],
  //   queryFn: () => fetchBranches(),
  // });

  return (
    <div className="flex flex-col gap-4">
      <div className="search-container relative ">
        <Search className="absolute text-[#74777F] top-1/3 left-3 " size={18} />
        <input
          type="text"
          placeholder="Search college name or code.."
          className="text-[14px] text-[#6B7280] bg-white border border-ash-border rounded-xl pl-10 pr-3 py-3 w-full"
          onChange={(e) => setCollegeSearch(e.target.value)}
          value={collegeSearch}
        />
      </div>

      <div className="advanced-filters grid gap-2 p-4 border border-ash-border bg-white rounded-2xl ">
        <select
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="text-[14px] text-[#6B7280]"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <CustomDropdown />
        {/* <select
          className="text-[14px] text-[#6B7280]"
          name="districts"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option>Select a district</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
        <select
          className="text-[14px] text-[#6B7280]"
          name="branch"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option>Select a branch</option>
          {branches.map((branch)=>(
            <option key={branch.code} value={branch.code} >{branch.name}</option>
          ))}
        </select>
        <select
          className="text-[14px] text-[#6B7280]"
          name="community"
          value={selectedCommunity}
          onChange={(e) => setSelectedCommunity(e.target.value)}
        >
          <option>Select a category</option>
          {communityList.map((community) => (
            <option key={community} value={community}>
              {community}
            </option>
          ))}
        </select> */}
      </div>

      <button className="text-[#86A0CD] flex justify-center items-center gap-3 text-[12px] leading-4 bg-[#1A365D] w-full py-3 font-inter font-semibold rounded-xl ">
        <SlidersHorizontal size={18} />
        Advanced Filters
      </button>
      {/* <button className="text-[navy-dark] text-[12px] leading-4 bg-white w-full py-3 font-inter font-semibold rounded-xl border border-mist-300 ">
        Search
      </button> */}
    </div>
  );
}
