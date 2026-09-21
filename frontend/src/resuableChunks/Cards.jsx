import { GreenPill } from "../resuableChunks/Typography";
import AnnaUniv from '../assets/anna-univ.png'
import { Star, MapPin } from 'lucide-react';
import { getHighestCutoff } from "../utils";

export function TopCollegesCard({ college, rank }) {

  const higherCutoff = getHighestCutoff(college);
  
  return(
    <li className="flex items-center bg-white border border-ash-border p-4 rounded-xl gap-4 mb-3 ">
      <img className="w-16 rounded-lg " src={AnnaUniv} />
      <div className="block">
        <h5 className="text-[14px] leading-5 text-light-black font-plus mb-1  ">
          {college.name}
        </h5>
        <div className="flex gap-3 ">
          <span className="text-[14px] leading-5 text-blackish-ash font-inter font-medium flex items-center gap-1 ">
            <Star size={10} />
            {higherCutoff}
          </span>
          <span className="text-[14px] leading-5 text-blackish-ash font-inter font-medium flex items-center gap-1 ">
            <MapPin size={10} />
            {college.district}
          </span>
        </div>
      </div>
      <GreenPill>#{rank}</GreenPill>
    </li>
  );
}

export function AnalyticsCard({
  children,
  className = "",
  title,
  desc,
  icon: Icon,
}) {
  return (
    <div className="bg-white border border-[rgba(226,232,240,0.6)] rounded-xl p-6 mb-6 ">
      <h3
        className={`text-[20px] leading-7 font-plus font-semibold text-navy-dark ${className} `}
      >
        {title} {Icon && <Icon size={22} />}
      </h3>
      <p className="text-[16px] font-inter leading-6 text-blackish-ash ">
        {desc}
      </p>
      {children}
    </div>
  );
}
