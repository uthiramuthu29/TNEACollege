import { Calculator, House } from "lucide-react";

export default function Navbar() {

    const navLinks = [
        {id: 1, name: "Home", icon: <House/>},
        {id: 1, name: "Colleges", icon: <House/>},
        {id: 1, name: "Home", icon: <House/>},
        {id: 1, name: "Home", icon: <House/>},
    ]
  return (
    <div className="">
      <ul className="flex ">
        <li className="text-[12px] text-[#43474E] font-inter font-semibold leading-4 ">
          <House size={18} className="mx-auto" />
          Home
        </li>
      </ul>
    </div>
  );
}
