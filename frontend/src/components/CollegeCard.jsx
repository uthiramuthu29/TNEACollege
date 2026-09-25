import { useState } from "react";
import CollegeCardImg from "../assets/Background.png";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BranchTable } from "../resuableChunks/Tables";

export default function CollegeCard({ college }) {
  const [viewBranches, setViewBranches] = useState(false);

  return (
    <motion.div
      initial={{ width: 0, opacity: 0, x: -50}}
      whileInView={{ width: "auto", opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="college-card bg-white border border-ash-border rounded-2xl p-6 mb-6 "
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
        <div className="my-2">
          <p className="text-[10px] font-inter leading-4 text-blackish-ash " >College Rank <sup>(*Based on highest cutoff)</sup></p>
          <p className="text-[20px] font-inter font-bold leading-7 text-dark-green ">#{college.rank}</p>
        </div>
        <div className="flex justify-end ">
        
          <button
            onClick={() => setViewBranches((prev) => !prev)}
            className="flex gap-2.5 text-[12px] font-inter font-semibold leading-4 text-white bg-navy-dark rounded-xl px-6 py-2.5 "
          >
            View Available Branches
            <motion.div
              animate={{ rotate: viewBranches ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {viewBranches && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg "
          >
            <div className="overflow-x-auto">
              <BranchTable college={college} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
