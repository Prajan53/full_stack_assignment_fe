// "use client";
// import { useState } from "react";
// import { Combobox, TextInput, useCombobox } from "@mantine/core";
// import { IconChevronDown, IconMapPin, IconUserCode } from "@tabler/icons-react";

// const groceries = ["🍎 Apples", "🍌 Bananas", "🥦 Broccoli", "🥕 Carrots", "🍫 Chocolate"];

// export default function JobType() {
//   const combobox = useCombobox();
//   const [value, setValue] = useState("");

//   const shouldFilterOptions = !groceries.some((item) => item === value);
//   const filteredOptions = shouldFilterOptions
//     ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
//     : groceries;

//   const options = filteredOptions.map((item) => (
//     <Combobox.Option value={item} key={item}>
//       {item}
//     </Combobox.Option>
//   ));

//   return (
//     <div className="relative w-full">
//       <Combobox
//         onOptionSubmit={(optionValue) => {
//           setValue(optionValue);
//           combobox.closeDropdown();
//         }}
//         store={combobox}
//         withinPortal
//       >
//         <Combobox.Target>
//           <div className="relative">
//             <TextInput
//               placeholder="Job Type"
//               value={value}
//               size="md"
//               className="text-center"
//               withAsterisk={false}
//               styles={{
//                 input: {
//                   textAlign: "center", // ✅ Center text
//                   paddingLeft: "2rem", // ✅ Space for left icon
//                   paddingRight: "2.4rem", // 🔥 Increased right padding (fixes overlap)
//                 },
//               }}
//               onChange={(event) => {
//                 setValue(event.currentTarget.value);
//                 combobox.openDropdown();
//                 combobox.updateSelectedOptionIndex();
//               }}
//               onClick={() => combobox.openDropdown()}
//               onFocus={() => combobox.openDropdown()}
//               onBlur={() => combobox.closeDropdown()}
//             />
//             {/* Left Icon */}
//             <IconUserCode
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//               size={18}
//             />
//             {/* Right Icon */}
//             <IconChevronDown
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
//               size={18}
//               onClick={() => combobox.openDropdown()}
//             />
//           </div>
//         </Combobox.Target>

//         <Combobox.Dropdown className="absolute w-full">
//           <Combobox.Options>
//             {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
//           </Combobox.Options>
//         </Combobox.Dropdown>
//       </Combobox>
//     </div>
//   );
// }

// "use client";
// import { Select } from "@mantine/core";
// import { useJobStore } from "@/store/useJobStore";

// const jobTypes = ["Full_time", "Part_time", "Contract", "Internship"];

// export default function JobType() {
//   const { selectedJobType, setSelectedJobType } = useJobStore();

//   return (
//     // <div className="relative">
//     // {/* Left Icon */}
//     // <IconUserCode
//     //   className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//     //   size={18}
//     // />
//     <Select
//       placeholder="Select Job Type"
//       data={jobTypes}
//       value={selectedJobType}
//       onChange={(value) => setSelectedJobType(value || "")}
//     />
//     /* <IconChevronDown
//         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
//         size={18}
//         onClick={(e) => e.stopPropagation()} // Prevents unexpected dropdown toggling
//       /> */
//     // </div>
//   );
// }

"use client";
import { Combobox, useCombobox, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useJobStore } from "@/store/useJobStore";

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

export default function JobType() {
  const combobox = useCombobox();
  const { selectedJobType, setSelectedJobType } = useJobStore();

  return (
    <div className="relative w-full">
      <Combobox
        onOptionSubmit={(optionValue) => {
          setSelectedJobType(optionValue);
          combobox.closeDropdown();
        }}
        store={combobox}
        withinPortal
      >
        <Combobox.Target>
          <div
            className="flex items-center justify-between cursor-pointer px-3 py-2 font-sans font-medium text-[#686868] text-base"
            onClick={() => combobox.openDropdown()}
          >
            <div className="flex items-center gap-2 text-base">
              <Image src="JobType.svg"/>
              <span>{selectedJobType || "Job type"}</span>
            </div>
            <IconChevronDown className="" size={18} />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown className="absolute w-full">
          <Combobox.Options>
            {jobTypes.map((type) => (
              <Combobox.Option value={type} key={type}>
                {type}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}


