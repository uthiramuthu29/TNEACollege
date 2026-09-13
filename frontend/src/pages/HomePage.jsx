import { Calculator, Search } from "lucide-react";
import { Link } from "react-router";
import Schedule from '../components/Schedule'
import { PageHeading, PagePara } from "../resuableChunks/Typography";
import TrendingColleges from "../components/TrendingColleges";

function HomeNavCard({ title, desc, color, bgColor, icon: Icon }) {
  return (
    <Link
      style={{ backgroundColor: bgColor }}
      className=" rounded-xl block w-full p-6 "
    >
      <Icon color={color} className="mb-2" />
      <h3
        style={{ color: color }}
        className="text-[20px] leading-7 font-semibold font-plus mb-1.5"
      >
        {title}
      </h3>
      <p style={{ color: color }} className="text-[12px] leading-4 ">
        {desc}
      </p>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="">
      <div className="welcome mb-8 ">
        <PageHeading>Welcome, Student</PageHeading>
        <PagePara>Your trusted companion for TNEA 2024. Navigate the counselling process
          with expert data and precision.</PagePara>
      </div>
      <div className="flex gap-4 mb-8">
        <HomeNavCard
          title="Cutoff Calculator"
          desc="Estimate your chances based on PCM marks"
          color="#ffffff"
          bgColor="#1A365D"
          icon={Calculator}
        />
        <HomeNavCard
          title="College Search"
          desc="Browse 450+ TNEA colleges"
          color="#167249"
          bgColor="#9FF5C1"
          icon={Search}
        />
      </div>
      <Schedule />
      <TrendingColleges />
    </div>
  );
}
