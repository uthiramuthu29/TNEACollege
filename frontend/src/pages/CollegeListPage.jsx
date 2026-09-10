import { useState } from "react";
import CollegeSearch from "../components/CollegeSearch";
import CollegeList from "../components/CollegeList";

export default function CollegeListPage(){

    const [collegeSearch, setCollegeSearch] = useState("")

    return (
        <div>
            <CollegeSearch collegeSearch={collegeSearch} setCollegeSearch={setCollegeSearch} />
            <CollegeList collegeSearch={collegeSearch} />
        </div>
    );
}