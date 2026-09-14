import { GreenPill, SubHeading } from "../resuableChunks/Typography";

export default function Schedule() {
  return (
    <div className="schedule mb-8 ">
      <div className="flex justify-between mb-4 ">
        <SubHeading>Counselling Schedule</SubHeading>
        <button className="text-[12px] leading-4 font-semibold font-inter text-[#0A6C44]">VIEW TIMELINE</button>
      </div>
      <div className="active-upcoming border border-ash-border rounded-xl  ">
        <div className="flex items-center gap-4 bg-[#F1F4F6] rounded-t-xl border-b border-b-ash-border px-4 py-5.5   ">
          <p className="text-[10px] bg-navy-dark leading-5 font-bold font-inter text-white px-3.5 py-1 rounded-lg ">JUL <br /><span className="text-[18px] leading-5.5 ">15</span></p>
          <div className="phase-details">
            <p className="text-[12px] leading-4 font-inter font-semibold text-navy-dark " >CURRENT PHASE</p>
            <p className="text-[14px] leading-5 font-plus text-light-black" >Rank List Publication</p>
          </div>
          <GreenPill>Active</GreenPill>
        </div>
        <ul className="p-4 bg-[#EBEEF0] rounded-b-xl  " >
          <li className="flex items-center gap-4 mb-4   " >
            <span className="w-2 h-2 rounded-full bg-[#74777F] " ></span>
            <div className="flex-1">
              <p className="text-[12px] leading-4 font-inter text-blackish-ash" >Upcoming: Jul 22 - Jul 26</p>
              <p className="text-[14px] leading-5 font-plus font-medium text-light-black pb-2 border-b border-b-ash-border ">Round 1 Choice Filling</p>
            </div>

          </li>
          <li className="flex items-center gap-4  " >
            <span className="w-2 h-2 rounded-full bg-[#74777F] " ></span>
            <div className="flex-1">
              <p className="text-[12px] leading-4 font-inter text-blackish-ash" >Upcoming: Jul 28</p>
              <p className="text-[14px] leading-5 font-plus font-medium text-light-black mb-2 ">Round 1 Choice Filling</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  );
}