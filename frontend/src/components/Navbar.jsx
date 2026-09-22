import { navLinks } from "../utils";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full bg-[#F7FAFC] ">
      <ul className="flex p-4 border-t border-t-ash-border ">
        {navLinks.map((navLink) => {
          const Icon = navLink.icon;
          return (
            <NavLink
              to={navLink.link}
              key={navLink.id}
              className={({ isActive }) =>
                `${isActive ? "text-[#86A0CD] bg-navy-dark rounded-4xl " : "text-blackish-ash bg-transparent "} text-[12px] font-inter font-semibold leading-4 px-5 py-1`
              }
            >
              <Icon size={18} className="mx-auto" />
              {navLink.name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
