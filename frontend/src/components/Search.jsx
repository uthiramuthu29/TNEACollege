export default function Search( {collegeSearch, setCollegeSearch} ) {
    
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search college name or code.."
        className="text-[14px] text-[#6B7280] bg-white border border-[#C4C6CF] rounded-xl p-3 w-full"
        onChange={(e)=>setCollegeSearch(e.target.value)}
        value={collegeSearch}
      />
      <button className="text-[#86A0CD] text-[12px] leading-4 bg-[#1A365D] w-full py-3 font-inter font-semibold rounded-xl ">
        Advanced Filters
      </button>
      {/* <button className="text-[#002045] text-[12px] leading-4 bg-white w-full py-3 font-inter font-semibold rounded-xl border border-mist-300 ">
        Search
      </button> */}
    </div>
  );
}
