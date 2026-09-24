import { useState } from "react";
import CollegeSearch from "../components/CollegeSearch";
import CollegeList from "../components/CollegeList";

export default function CollegeListPage() {
  const [collegeSearchInput, setCollegeSearchInput] = useState("");
  const [collegeSearchQuery, setCollegeSearchQuery] = useState({
    search: "",
    district: "",
    branch: "",
    community: ""
  });

  return (
    <div>
      <CollegeSearch
        collegeSearchInput={collegeSearchInput}
        setCollegeSearchInput={setCollegeSearchInput}
        collegeSearchQuery={collegeSearchQuery}
        setCollegeSearchQuery={setCollegeSearchQuery}
      />
      <CollegeList collegeSearchQuery={collegeSearchQuery} />
    </div>
  );
}
