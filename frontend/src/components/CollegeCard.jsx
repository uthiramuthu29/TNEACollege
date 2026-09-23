import { useState } from "react";
import CollegeCardImg from "../assets/Background.png";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CollegeCard({ college }) {
  const [viewCutoff, setViewCutoff] = useState(false);

  const formatCutoff = (value) => {
    if (value === null || value === undefined || value === "") return "-";

    const truncated = Math.floor(value * 10) / 10;

    return truncated;
  };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0, x: -50}}
      whileInView={{ width: "auto", opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="college-card bg-white border border-ash-border rounded-2xl p-6 "
    >
      <img className="mb-6" src={CollegeCardImg} />
      <div className="content">
        <span className="text-[10px] font-inter leading-3.75 text-[#005231] bg-light-green rounded-sm px-1 py-1 ">
          {college.code}
        </span>
        <h2 className="text-[20px] font-plus leading-7 text-[navy-dark] font-semibold mt-2.5 mb-2.5 wrap-break-word ">
          {college.name}
        </h2>
        <h3 className="text-[14px] flex items-center gap-1 font-arta leading-6 text-blackish-ash">
          <MapPin size={14} />
          {college.district}
        </h3>
        <div className="flex justify-end">
          <button
            onClick={() => setViewCutoff((prev) => !prev)}
            className="flex gap-2.5 text-[12px] font-inter font-semibold leading-4 text-white bg-navy-dark rounded-xl px-6 py-2.5 "
          >
            View Cutoffs
            <motion.div
              animate={{ rotate: viewCutoff ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {viewCutoff && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg "
          >
            <div className="overflow-x-auto">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
