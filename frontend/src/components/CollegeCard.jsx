import CollegeCardImg from "../assets/Background.png";
import { ChevronDown } from "lucide-react"

export default function CollegeCard({ college }) {
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
          <button className="flex text-[12px] font-inter font-semibold leading-4 text-white bg-[#002045] rounded-xl px-6 py-2.5 ">
            View Cutoff <ChevronDown size={16} />
          </button>
        </div>
      </div>
      <table>
        <thead>
            <tr>
                <th>Department</th>
                <th>Cutoff</th>
            </tr>
        </thead>
        <tbody>
          {college.branches && college.branches.map((branch, index) => (
            <tr key={branch.branch_code || index}>
                <td>{branch.branch_name}</td>
                <td>{branch.oc_cutoff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
