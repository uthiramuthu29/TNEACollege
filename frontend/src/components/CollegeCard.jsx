import { useState } from "react";
import CollegeCardImg from "../assets/Background.png";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CollegeCard({ college }) {
  const [viewCutoff, setViewCutoff] = useState(false);

  const formatCutoff = (value) => {
    if (value === null || value === undefined || value === "") return "-";

    // Truncate to 1 decimal place without rounding up
    const truncated = Math.floor(value * 10) / 10;

    // Returning it as a number automatically drops trailing .0
    return truncated;
  };

  return (
    <div className="college-card bg-white border border-[#C4C6CF] rounded-2xl p-6 ">
      <img className="mb-6" src={CollegeCardImg} />
      <div className="content">
        <span className="text-[10px] font-inter leading-3.75 text-[#005231] bg-[#9FF5C1] rounded-sm px-1 py-1 ">
          {college.code}
        </span>
        <h2 className="text-[20px] font-plus-jakarta leading-7 text-[#002045] font-semibold mt-2.5 ">
          {college.name}
        </h2>
        <h3 className="text-[16px] font-plus-jakarta leading-6 text-[#43474E]">
          {college.district}
        </h3>
        <div className="flex justify-end">
          <button
            onClick={() => setViewCutoff((prev) => !prev)}
            className="flex text-[12px] font-inter font-semibold leading-4 text-white bg-[#002045] rounded-xl px-6 py-2.5 "
          >
            View Cutoff <ChevronDown size={16} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {viewCutoff && (
          <motion.div initial={{ height: 0, opacity: 0 } animate={{ height:"auto" }} className="overflow-auto rounded-lg ">
            <table className="cutoff-table w-full mt-2.5 bg-gray-100 rounded-lg ">
              <thead>
                <tr>
                  <th>Dept</th>
                  <th>OC</th>
                  <th>BC</th>
                  <th>BCM</th>
                  <th>MBC</th>
                  <th>SC</th>
                  <th>ST</th>
                </tr>
              </thead>
              <tbody>
                {college.branches &&
                  college.branches.map((branch, index) => (
                    <tr key={branch.branch_code || index}>
                      <td>{branch.branch_code}</td>
                      <td>{formatCutoff(branch.oc_cutoff)}</td>
                      <td>{formatCutoff(branch.bc_cutoff)}</td>
                      <td>{formatCutoff(branch.bcm_cutoff)}</td>
                      <td>{formatCutoff(branch.mbc_cutoff)}</td>
                      <td>{formatCutoff(branch.sc_cutoff)}</td>
                      <td>{formatCutoff(branch.st_cutoff)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
