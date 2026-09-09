import { useState } from "react";
import CollegeSearch from "../components/CollegeSearch";
import CollegeList from "../components/CollegeList";

export default function CollegeListPage(){

    const [collegeSearch, setCollegeSearch] = useState("")

    return (
        <main className="px-4 py-6">
            <CollegeSearch collegeSearch={collegeSearch} setCollegeSearch={setCollegeSearch} />
            <CollegeList collegeSearch={collegeSearch} />
        </main>
    );
}