import { Calculator, House, Search, ChartColumnBig } from "lucide-react";
import { useState, useEffect } from "react";

export const getHighestCutoff = (college) => {
  if (!college.branches || college.branches.length === 0) return 0;

  const cutoffs = college.branches.map((branch) => branch.oc_cutoff || 0);
  return Math.max(...cutoffs);
};

export const communityList = ["OC", "BC", "BCM", "MBC", "SC", "SCA", "ST"];

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
