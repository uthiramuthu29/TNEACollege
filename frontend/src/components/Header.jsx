import { GraduationCap, CircleUserRound } from "lucide-react";
import {  Link } from "react-router";

export default function Header() {
  return (
    <header className="p-4 border-b border-b-[#C4C6CF]">
      <div className="flex justify-between items-center ">
        <Link to='/' className="logo flex items-center gap-2 text-[navy-dark] ">
          <GraduationCap size={22} />
          <h1 className="font-plus text-[20px] leading-7 font-bold  " >TNEA Guide</h1>
        </Link>
        <Link className="profile">
          <CircleUserRound color="#43474E" size={22} />
        </Link>
      </div>
    </header>
  );
}
