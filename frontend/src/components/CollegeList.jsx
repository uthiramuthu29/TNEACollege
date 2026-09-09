import { useState, useEffect } from "react";
import CollegeCard from "./CollegeCard";

export default function CollegeList({ collegeSearch }) {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {

    
    const timer = setTimeout(() => {
        fetch(`http://127.0.0.1:8000/colleges?search=${collegeSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.colleges);
      })
      .catch((error) => {
        console.error(error);
      });
      console.log("fetched")
    }, 1000);

    return ()=> clearTimeout(timer);
    
  }, [collegeSearch]);

  const displayedColleges = collegeSearch.trim() ? colleges : []

  return (
    <>
      <div className="college-list mt-6 flex flex-col gap-6 ">
        { collegeSearch.trim() ?
            displayedColleges.map((college)=>(
                <CollegeCard key={college.code} college={college} />
            )) : ( <p className="text-center text-[#74777F] text-[14px] ">Search a college</p> )
        }
      </div>
    </>
  );
}
