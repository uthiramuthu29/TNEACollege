import { SubHeading, PagePara } from "../resuableChunks/Typography";
import { TrendingCollegesCard } from "../resuableChunks/Cards";

export default function TrendingColleges() {
    return (
        <div className="trending-colleges ">
            <div className=" mb-4 ">
                <SubHeading className="mb-2" >Trending Colleges</SubHeading>
                <PagePara>Based on 2025 Choice
                    Preference</PagePara>
            </div>
            <ul className="mb-6 " >
                <TrendingCollegesCard title="College of Engineering, Guindy (CEG)" rating="199.5+" location="Chennai" />
            </ul>
            <button className="text-[12px] leading-4 text-navy-dark font-inter font-semibold underline block mx-auto " >EXPLORE ALL RANKINGS</button>
        </div>
    );
}