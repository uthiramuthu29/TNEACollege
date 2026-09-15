import { Plus } from "lucide-react";

export default function HowFormula(){
    return(
        <div className="bg-[#E5E9EB] border border-ash-border rounded-xl p-6 ">
            <h4 className="text-[20px] leading-7 text-navy-dark font-semibold font-plus mb-4  ">How it's Calculated</h4>
            <div className="flex gap-4 items-center bg-[rgba(255,255,255,0.5)] border border-[rgba(196,198,207,0.3)] rounded-lg p-4 ">
                <div className="bg-navy-dark text-[16px] leading-6 text-white font-bold font-inter px-4 py-3 rounded-full   ">
                    M
                </div>
                <div className="block">
                    <p className="text-[12px] leading-4 text-blackish-ash font-semibold font-inter  " >Mathematics</p>
                    <h5 className="text-[16px] leading-6 text-light-black font-inter  ">Full Weightage (100)</h5>
                </div>
            </div>
            <div className="plus ">
                <Plus size={16} color="#A1AEBA" className="mx-auto my-4 " />
            </div>
            <div className="flex gap-4 items-center bg-[rgba(255,255,255,0.5)] border border-[rgba(196,198,207,0.3)] rounded-lg p-4 ">
                <div className="bg-dark-green text-[16px] leading-6 text-white font-bold font-inter px-2.5 py-3 rounded-full   ">
                    P/2
                </div>
                <div className="block">
                    <p className="text-[12px] leading-4 text-blackish-ash font-semibold font-inter  " >Physics</p>
                    <h5 className="text-[16px] leading-6 text-light-black font-inter  ">Half Weightage (50)</h5>
                </div>
            </div>
            <div className="plus ">
                <Plus size={16} color="#A1AEBA" className="mx-auto my-4 " />
            </div>
            <div className="flex gap-4 items-center bg-[rgba(255,255,255,0.5)] border border-[rgba(196,198,207,0.3)] rounded-lg p-4 ">
                <div className="bg-[#FFB68F] text-[16px] leading-6 text-[#3B1500] font-bold font-inter px-2.5 py-3 rounded-full   ">
                    C/2
                </div>
                <div className="block">
                    <p className="text-[12px] leading-4 text-blackish-ash font-semibold font-inter  " >Chemistry</p>
                    <h5 className="text-[16px] leading-6 text-light-black font-inter  ">Half Weightage (50)</h5>
                </div>
            </div>
            <div className="mt-8 border-t border-t-ash-border pt-6 ">
                <p className="text-[12px] leading-4 text-blackish-ash font-inter font-semibold mb-2 text-center  ">FINAL FORMULA</p>
                <div className="w-fit mx-auto border border-ash-border rounded-lg px-4 py-2 bg-white ">
                    <p className="text-[16px] leading-6 text-navy-dark font-plus  " >M + (P ÷ 2) + (C ÷ 2) = 200</p>
                </div>
            </div>
        </div>
    )
}