

"use client";
import { RangeSlider } from "@mantine/core";
import { useJobStore } from "@/store/useJobStore";

// Function to format salary values
const formatSalary = (value: number) => {
  return value >= 100000 ? `₹${value / 100000}L` : `₹${value / 1000}k`;
};

export default function SalarySlider() {
  const { salaryRange, setSalaryRange } = useJobStore();

  return (
    <div className="w-full">
      {/* Salary Label & Range */}
      <div className="flex justify-between text-sm font-semibold font-sans text-[#222222] mb-2">
        <span>Salary Per Month</span>
        <span>{formatSalary(salaryRange[0])} - {formatSalary(salaryRange[1])}</span>
      </div>

      {/* Range Slider */}
      <RangeSlider
        min={0} 
        max={200000}
        step={5000}
        value={salaryRange}
        onChange={setSalaryRange}
        color="black"
        size={2}
        thumbSize={14}
        styles={{
          track: { backgroundColor: "black", height: "2px" },
          bar: { backgroundColor: "black" },
          thumb: { borderColor: "black", backgroundColor: "white", borderWidth: "5px" },
        }}
        className="w-full"
      />
    </div>
  );
}


