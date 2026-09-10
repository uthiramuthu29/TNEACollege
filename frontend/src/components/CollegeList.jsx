import { useState, useEffect } from "react";
import CollegeCard from "./CollegeCard";

export default function CollegeList({ collegeSearch }) {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!collegeSearch.trim()) {
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`http://127.0.0.1:8000/colleges?search=${collegeSearch}`)
        .then((res) => res.json())
        .then((data) => {
          setColleges(data.colleges);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [collegeSearch]);

  const displayedColleges = collegeSearch.trim() ? colleges : [];

  return (
    <>
      <div className="college-list mt-6 flex flex-col gap-6 ">
        {!collegeSearch.trim() ? (
          <p className="text-center text-[#74777F] text-[14px] ">
            Search a college
          </p>
        ) : loading ? (
          <p className="text-center text-[#74777F] text-[14px]">
            Loading colleges...
          </p>
        ) : displayedColleges.length === 0 ? (
          <p className="text-center text-[#74777F] text-[14px]">
            No colleges found
          </p>
        ) : (
          displayedColleges.map((college) => (
            <CollegeCard key={college.code} college={college} />
          ))
        )}
      </div>
    </>
  );
}
