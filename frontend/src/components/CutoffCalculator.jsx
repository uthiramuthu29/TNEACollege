import { Search } from "lucide-react";

export default function CutoffCalculator() {
    return (
        <div className="bg-white border border-ash-border rounded-xl p-6 mb-8 " >
            <div className="mb-6 ">
                <div className="flex mb-2.5 justify-between ">
                    <h4 className="text-[12px] leading-4 font-inter font-semibold text-blackish-ash uppercase " >Mathematics</h4>
                    <p className="text-[14px] leading-5 font-inter font-medium text-navy-dark" >Max: 100</p>
                </div>
                <div className="relative">
                    <input className="bg-[#F7FAFC] w-full font-plus text-[20px] font-semibold text-blackish-ash border-2 border-ash-border rounded-lg px-4.5 py-4  " type="number" placeholder="0" />
                    <span className="text-[16px] leading-6 font-inter text-blackish-ash absolute top-1/3 right-4.5 " >/100</span>
                </div>
            </div>
            <div className="mb-6 ">
                <div className="flex mb-2.5 justify-between ">
                    <h4 className="text-[12px] leading-4 font-inter font-semibold text-blackish-ash uppercase " >Physics</h4>
                    <p className="text-[14px] leading-5 font-inter font-medium text-navy-dark" >Max: 100</p>
                </div>
                <div className="relative">
                    <input className="bg-[#F7FAFC] w-full font-plus text-[20px] font-semibold text-blackish-ash border-2 border-ash-border rounded-lg px-4.5 py-4  " type="number" placeholder="0" />
                    <span className="text-[16px] leading-6 font-inter text-blackish-ash absolute top-1/3 right-4.5 " >/100</span>
                </div>
            </div>
            <div className="mb-6 ">
                <div className="flex mb-2.5 justify-between ">
                    <h4 className="text-[12px] leading-4 font-inter font-semibold text-blackish-ash " >Chemistry</h4>
                    <p className="text-[14px] leading-5 font-inter font-medium text-navy-dark" >Max: 100</p>
                </div>
                <div className="relative">
                    <input className="bg-[#F7FAFC] w-full font-plus text-[20px] font-semibold text-blackish-ash border-2 border-ash-border rounded-lg px-4.5 py-4  " type="number" placeholder="0" />
                    <span className="text-[16px] leading-6 font-inter text-blackish-ash absolute top-1/3 right-4.5 " >/100</span>
                </div>
            </div>

            <div className="score bg-navy-dark rounded-xl p-8 ">
                <p className="text-[12px] leading-4 font-semibold font-inter text-[#86A0CD] mb-2.5 text-center  " >YOUR TNEA CUTOFF SCORE</p>
                <h2 className="text-[60px] leading-14.75 font-normal font-plus text-white mb-4 flex justify-center items-center  ">0.00<span className="text-[16px] leading-6 text-[#86A0CD] ml-2 " >/ 200</span></h2>
                <p className="text-[14px] leading-5 font-normal font-inter text-[#86A0CD] mb-6 text-center  ">Based on standard TNEA weightage
                    formula.</p>
                <button className="flex items-center gap-4  text-[16px] leading-7 font-bold font-inter text-center text-navy-dark bg-white px-7.5 py-4 rounded-lg  " >
                    <Search size={22} />
                    Find Best Matching
                    Colleges
                </button>
            </div>
        </div>
    );
}