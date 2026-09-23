import { Calculator, House, Search, ChartColumnBig } from "lucide-react";
import { useState, useEffect } from "react";

export const getHighestCutoff = (college) => {
  if (!college.branches || college.branches.length === 0) return 0;

  const cutoffs = college.branches.map((branch) => branch.oc_cutoff || 0);
  return Math.max(...cutoffs);
};

export const getCollegeRankings = (colleges) => {
  const cutoffValues = colleges.map((college) =>
    getHighestCutoff(college)
  );

  return colleges.map((college) => {
    const cutoff = getHighestCutoff(college);

    const rank =
      cutoffValues.filter((value) => value > cutoff).length + 1;

    return {
      ...college,
      rank,
    };
  });
};

export const communityList = ["oc", "bc", "bcm", "mbc", "sc", "sca", "st"];

export const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: House,
    link: "/",
  },
  {
    id: 2,
    name: "Colleges",
    icon: Search,
    link: "/colleges",
  },
  {
    id: 3,
    name: "Calculator",
    icon: Calculator,
    link: "/cutoff-calc",
  },
  {
    id: 4,
    name: "Analytics",
    icon: ChartColumnBig,
    link: "/analytics",
  },
];

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}

export const formatCutoff = (value) => {
  if (value === null || value === undefined || value === "") return "-";

  const truncated = Math.floor(value * 10) / 10;

  return truncated;
};

export const getTotalInitialSeats = (branch) => {

  return communityList.reduce((total, community)=>
    total + (branch[`${community}_initial`] || 0),
    0
  );
};