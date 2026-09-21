import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function CutoffInput({ subject, value, onMarksChange }) {
  function handleInputChange(e) {
    const val = e.target.value;
    if (Number(val) > 100) return;
    onMarksChange(val);
  }

  return (
    <div className="mb-6 ">
      <div className="flex mb-2.5 justify-between ">
        <h4 className="text-[12px] leading-4 font-inter font-semibold text-blackish-ash uppercase ">
          {subject}
        </h4>
        <p className="text-[14px] leading-5 font-inter font-medium text-navy-dark">
          Max: 100
        </p>
      </div>
      <div className="relative">
        <input
          className="bg-[#F7FAFC] w-full font-plus text-[20px] font-semibold text-blackish-ash border-2 border-ash-border rounded-lg px-4.5 py-4  "
          type="number"
          placeholder="0"
          onChange={handleInputChange}
          value={value}
        />
        <span className="text-[16px] leading-6 font-inter text-blackish-ash absolute top-1/3 right-4.5 ">
          /100
        </span>
      </div>
    </div>
  );
}

export function CustomDropdown({
  value,
  onChange,
  options,
  placeholder = "Select a year",
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="text-[14px] text-[#6B7280] w-full flex justify-between items-center  "
      >
        <span>{value || placeholder}</span>
        <ChevronDown size={16} />
      </button>
      <div>
        <div>
          <button className="text-[14px] text-[#6B7280]  ">dev</button>
        </div>
      </div>
    </div>
  );
}
