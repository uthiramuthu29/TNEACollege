export default function Schedule() {
  return (
    <div className="schedule">
      <div className="flex justify-between mb-4 ">
        <h3 className="text-[20px] leading-7 font-semibold font-plus text-[navy-dark]" >Counselling Schedule</h3>
        <button className="text-[12px] leading-4 font-semibold font-inter text-[#0A6C44]">VIEW TIMELINE</button>
      </div>
      <div className="active-upcoming  ">
        <div className="flex bg-[#F1F4F6] px-4 py-5.5   ">
            <p className="text-[10px] bg-[navy-dark] leading-5 font-bold font-inter text-white px-3.5 py-1 rounded-lg ">JUL <br /><span className="text-[18px] leading-5.5 ">15</span></p>
            <div className="phase-details">
                <p>CURRENT PHASE</p>
                <p>Rank List Publication</p>
            </div>
            <p>Active</p>
        </div>
        <ul>
          <li>
            <p>Upcoming: Jul 22 - Jul 26</p>
            <p>Round 1 Choice Filling</p>
          </li>
          <li>
            <p>Upcoming: Jul 22 - Jul 26</p>
            <p>Round 1 Choice Filling</p>
          </li>
        </ul>
      </div>
    </div>
  );
}