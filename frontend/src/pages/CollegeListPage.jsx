import { useState } from "react";
import Search from "../components/Search";
import CollegeList from "../components/CollegeList";

export default function CollegeListPage(){

    const [collegeSearch, setCollegeSearch] = useState("")

    return (
        <main className="px-4">
            <Search collegeSearch={collegeSearch} setCollegeSearch={setCollegeSearch} />
            <CollegeList collegeSearch={collegeSearch} />
        </main>
    );
}