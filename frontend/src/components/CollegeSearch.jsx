import { Search, SlidersHorizontal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchBranches, fetchDistricts } from "../api";
import { communityList } from "../utils";
import { CustomDropdown } from "../resuableChunks/FormFields";
import { AnimatePresence, motion } from "motion/react";

export default function CollegeSearch({
  collegeSearchInput,
  setCollegeSearchInput,
  setCollegeSearchQuery,
}) {
  const [openFilters, setOpenFilters] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const { data: districts = [] } = useQuery({
    queryKey: ["districts"],
    queryFn: () => fetchDistricts(),
  });

  const { data: branches = [] } = useQuery({
    queryKey: ["branches"],
    queryFn: () => fetchBranches(),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="search-container relative ">
        <Search className="absolute text-[#74777F] top-1/3 left-3 " size={18} />
        <input
          type="text"
          placeholder="Search college name or code.."
          className="text-[14px] text-[#6B7280] bg-white border border-ash-border rounded-xl pl-10 pr-3 py-3 w-full"
          onChange={(e) => setCollegeSearchInput(e.target.value)}
          value={collegeSearchInput}
        />
      </div>

      <AnimatePresence initial={false}>
        {openFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="advanced-filters grid gap-2 p-4 border border-ash-border bg-white rounded-2xl ">
              <CustomDropdown
                value={selectedDistrict}
                onChange={setSelectedDistrict}
                options={districts}
                placeholder="Select a district"
              />
              <CustomDropdown
                value={selectedBranch}
                onChange={setSelectedBranch}
                options={branches.map((branch) => ({
                  label: branch.name,
                  value: branch.code,
                }))}
                placeholder="Select a branch"
              />
              <CustomDropdown
                value={selectedCommunity}
                onChange={setSelectedCommunity}
                options={communityList}
                placeholder="Select a category"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpenFilters((prev) => !prev)}
        className="text-[#86A0CD] flex justify-center items-center gap-3 text-[12px] leading-4 bg-[#1A365D] w-full py-3 font-inter font-semibold rounded-xl "
      >
        <SlidersHorizontal size={18} />
        {openFilters ? "Close Filters" : "Advanced Filters"}
      </button>
      <button
        onClick={() => setCollegeSearchQuery({
          search: collegeSearchInput.trim(),
          district: selectedDistrict,
          branch: selectedBranch,
          community: selectedCommunity
        })}
        className="text-[navy-dark] text-[12px] leading-4 bg-white w-full py-3 font-inter font-semibold rounded-xl border border-mist-300 "
      >
        Search
      </button>
    </div>
  );
}
