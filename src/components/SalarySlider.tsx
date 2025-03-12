// "use client";
// import { useState } from "react";
// import { RangeSlider } from "@mantine/core";

// export default function SalarySlider() {
//   const [value, setValue] = useState<[number, number]>([50, 80]); // Default range in ₹1000s

//   return (
//     <div className="w-full">
//       {/* Salary Title and Display */}
//       <div className="flex justify-between text-sm font-medium mb-2">
//         <span>Salary Per Month</span>
//         <span>₹{value[0]}k - ₹{value[1]}k</span>
//       </div>

//       {/* Salary Slider */}
//       <RangeSlider
//         min={0}  // Minimum salary
//         max={200} // Maximum salary in ₹1000s (₹200k)
//         step={5} // Increment step in ₹1000s
//         value={value}
//         onChange={setValue}
//         thumbSize={14}
//         mt="sm"
//         className="w-full"
//       />

//       {/* Min-Max Labels */}
//       <div className="flex justify-between text-xs text-gray-500 mt-1">
//         <span>₹0</span>
//         <span>₹200k</span>
//       </div>
//     </div>
//   );
// }

"use client";
import { RangeSlider } from "@mantine/core";
import { useJobStore } from "@/store/useJobStore";

export default function SalarySlider() {
  const { salaryRange, setSalaryRange } = useJobStore();

  return (
    <div className="w-full">
      <p className="text-sm font-medium text-gray-700 mb-2">Selected Range: ₹{salaryRange[0]} - ₹{salaryRange[1]}</p>
      <RangeSlider
        min={0} // Min salary ₹0
        max={200000} // Max salary ₹2,00,000
        step={5000} // Step of ₹5000
        value={salaryRange}
        onChange={setSalaryRange}
        marks={[
          { value: 0, label: "₹0" },
          { value: 50000, label: "₹50k" },
          { value: 100000, label: "₹1L" },
          { value: 150000, label: "₹1.5L" },
          { value: 200000, label: "₹2L" },
        ]}
        className="w-full"
        thumbSize={16}
      />
      {/* <p className="text-sm text-gray-600 text-center mt-2">
        Selected Range: ₹{salaryRange[0]} - ₹{salaryRange[1]}
      </p> */}
    </div>
  );
}

