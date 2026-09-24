import { Search } from "lucide-react";
import { useState } from "react";
import { CustomDropdown, CutoffInput } from "../resuableChunks/FormFields";
import { communityList } from "../utils";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import { setCutoffQuery } from "../redux/slices/cutoffSlice";

export default function CutoffCalculator() {
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const [maths, setMaths] = useState("");
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");

  const mScore = parseFloat(maths) || 0;
  const pScore = parseFloat(physics) || 0;
  const cScore = parseFloat(chemistry) || 0;

  const tneaCutoffScore = (mScore + pScore / 2 + cScore / 2).toFixed(2);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-ash-border rounded-xl p-6 mb-8 ">
      <CutoffInput
        subject="Mathematics"
        value={maths}
        onMarksChange={setMaths}
      />
      <CutoffInput
        subject="Physics"
        value={physics}
        onMarksChange={setPhysics}
      />
      <CutoffInput
        subject="Chemistry"
        value={chemistry}
        onMarksChange={setChemistry}
      />
      <div className="mb-6">
        <CustomDropdown
          value={selectedCommunity}
          onChange={setSelectedCommunity}
          options={communityList}
          placeholder="Select a community"
          className=" "
        />
      </div>

      <div className="score bg-navy-dark rounded-xl p-8 ">
        <p className="text-[12px] leading-4 font-semibold font-inter text-[#86A0CD] mb-2.5 text-center  ">
          YOUR TNEA CUTOFF SCORE
        </p>
        <h2 className="text-[60px] leading-14.75 font-normal font-plus text-white mb-4 flex justify-center items-center  ">
          {tneaCutoffScore}
          <span className="text-[16px] leading-6 text-[#86A0CD] ml-2 ">
            / 200
          </span>
        </h2>
        <p className="text-[14px] leading-5 font-normal font-inter text-[#86A0CD] mb-6 text-center  ">
          Based on standard TNEA weightage formula.
        </p>
        <button
          onClick={() => {
            dispatch(
              setCutoffQuery({
                cutoff: tneaCutoffScore,
                community: selectedCommunity,
              }),
            );
            navigate("/colleges")
          }}
          className="flex items-center gap-4  text-[16px] leading-7 font-bold font-inter text-center text-navy-dark bg-white px-7.5 py-4 rounded-lg  "
        >
          <Search size={22} />
          Find Best Matching Colleges
        </button>
      </div>
    </div>
  );
}
