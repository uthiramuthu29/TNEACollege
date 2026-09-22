import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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

export function CustomDropdown({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full ">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`text-[14px] text-[#6B7280] w-full flex justify-between items-center px-3.5 py-2 border-ash-border transition-transform duration-500 ${open ? "border-b-0 border rounded-b-none " : "border"} rounded-lg cursor-pointer  `}
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-250 ${open ? "rotate-180" : ""} `}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid border border-t-0 rounded-t-none border-ash-border p-2 rounded-lg">
              {options.map((option) => {
                const isObject = typeof option === "object";

                const optionLabel = isObject ? option.label : option;
                const optionValue = isObject ? option.value : option;

                return (
                  <button
                    key={optionValue}
                    className="text-[14px] text-[#6B7280] text-left hover:bg-navy-dark hover:text-white px-1.5 py-1 rounded-sm cursor-pointer "
                    onClick={() => {
                      onChange(optionValue);
                      setOpen(false);
                    }}
                  >
                    {optionLabel}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
