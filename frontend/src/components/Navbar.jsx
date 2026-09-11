import { Calculator, House, Search, ChartColumnBig } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  const navLinks = [
    { id: 1, name: "Home", icon: <House size={18} className="mx-auto" />, link: '/' },
    { id: 2, name: "Colleges", icon: <Search size={18} className="mx-auto" />, link: '/colleges' },
    { id: 3, name: "Calculator", icon: <Calculator size={18} className="mx-auto" />, link: '/cutoff-calc' },
    { id: 4, name: "Analytics", icon: <ChartColumnBig size={18} className="mx-auto" />, link: '/analytics' },
  ];
  return (
    <div className="fixed bottom-0 w-full">
      <ul className="flex p-4 border-t border-t-[#C4C6CF] ">
        {navLinks.map((navLink) => (
          <NavLink to={navLink.link} key={navLink.id} className="text-[12px] text-[#43474E] font-inter font-semibold leading-4 px-5 py-1 ">
            {navLink.icon}
            {navLink.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
