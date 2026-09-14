import { SubHeading, PagePara, GreenPill } from "../resuableChunks/Typography";
import AnnaUniv from '../assets/anna-univ.png'
import { Star, MapPin } from 'lucide-react';

export default function TrendingColleges() {
    return (
        <div className="trending-colleges ">
            <div className=" mb-4 ">
                <SubHeading className="mb-2" >Trending Colleges</SubHeading>
                <PagePara>Based on 2025 Choice
                    Preference</PagePara>
            </div>
            <ul className="mb-6 " >
                <li className="flex items-center bg-white border border-ash-border p-4 rounded-xl gap-4 " >
                    <img className="w-16 rounded-lg " src={AnnaUniv} />
                    <div className="block">
                        <h5 className="text-[14px] leading-5 text-light-black font-plus mb-1  " >College of Engineering, Guindy (CEG)</h5>
                        <div className="flex gap-3 ">
                            <span className="text-[14px] leading-5 text-blackish-ash font-inter font-medium flex items-center gap-1 " ><Star size={10} />199.5+</span>
                            <span className="text-[14px] leading-5 text-blackish-ash font-inter font-medium flex items-center gap-1 " ><MapPin size={10} />Chennai</span>
                        </div>
                    </div>
                    <GreenPill>#1</GreenPill>
                </li>
            </ul>
            <button className="text-[12px] leading-4 text-navy-dark font-inter font-semibold underline block mx-auto " >EXPLORE ALL RANKINGS</button>
        </div>
    );
}