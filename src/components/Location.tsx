// // "use client";
// // import { useState } from "react";
// // import { Combobox, TextInput, useCombobox } from "@mantine/core";
// // import { IconChevronDown, IconMapPin } from "@tabler/icons-react";

// // const groceries = ["🍎 Apples", "🍌 Bananas", "🥦 Broccoli", "🥕 Carrots", "🍫 Chocolate"];

// // export default function Location() {
// //   const combobox = useCombobox();
// //   const [value, setValue] = useState("");

// //   const shouldFilterOptions = !groceries.some((item) => item === value);
// //   const filteredOptions = shouldFilterOptions
// //     ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
// //     : groceries;

// //   const options = filteredOptions.map((item) => (
// //     <Combobox.Option value={item} key={item}>
// //       {item}
// //     </Combobox.Option>
// //   ));

// //   return (
// //     <div className="relative w-full">
// //       <Combobox
// //         onOptionSubmit={(optionValue) => {
// //           setValue(optionValue);
// //           combobox.closeDropdown();
// //         }}
// //         store={combobox}
// //         withinPortal
// //       >
// //         <Combobox.Target>
// //           <div className="relative">
// //             <TextInput
// //               placeholder="Preferred Location"
// //               value={value}
// //               size="md"
// //               className="text-center"
// //               withAsterisk={false}
// //               styles={{
// //                 input: {
// //                   textAlign: "center", // ✅ Center text
// //                   paddingLeft: "2rem", // ✅ Space for left icon
// //                   paddingRight: "2.4rem", // 🔥 Increased right padding (fixes overlap)
// //                 },
// //               }}
// //               onChange={(event) => {
// //                 setValue(event.currentTarget.value);
// //                 combobox.openDropdown();
// //                 combobox.updateSelectedOptionIndex();
// //               }}
// //               onClick={() => combobox.openDropdown()}
// //               onFocus={() => combobox.openDropdown()}
// //               onBlur={() => combobox.closeDropdown()}
// //             />
// //             {/* Left Icon */}
// //             <IconMapPin
// //               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
// //               size={18}
// //             />
// //             {/* Right Icon */}
// //             <IconChevronDown
// //               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
// //               size={18}
// //               onClick={() => combobox.openDropdown()}
// //             />
// //           </div>
// //         </Combobox.Target>

// //         <Combobox.Dropdown className="absolute w-full">
// //           <Combobox.Options>
// //             {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
// //           </Combobox.Options>
// //         </Combobox.Dropdown>
// //       </Combobox>
// //     </div>
// //   );
// // }

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Combobox, TextInput, useCombobox } from "@mantine/core";
// import { IconChevronDown, IconMapPin } from "@tabler/icons-react";
// import JobList from "./JobCard";

// const locations = ["Chennai", "Bangalore", "Hyderabad", "Delhi", "Mumbai"];

// export default function Location({ }) {
//   const combobox = useCombobox();
//   const [value, setValue] = useState(""); // Selected location
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);

//   // Fetch all jobs initially
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/admin/jobs")
//       .then((response) => {
//         setJobs(response.data.jobs);
//       })
//       .catch((error) => console.error("Error fetching jobs:", error));
//   }, []);

//   // Filter jobs when location changes
//   useEffect(() => {
//     if (value) {
//       const filtered = jobs.filter((job) =>
//         job.location.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredJobs(filtered);
//     } else {
//       setFilteredJobs(jobs); // Show all jobs if no location selected
//     }
//   }, [value, jobs]);

//   return (
//     <div className="relative w-full">
//       {/* Location Dropdown */}
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
//               placeholder="Preferred Location"
//               value={value}
//               size="md"
//               onChange={(event) => {
//                 setValue(event.currentTarget.value);
//                 combobox.openDropdown();
//               }}
//               onClick={() => combobox.openDropdown()}
//               onFocus={() => combobox.openDropdown()}
//               onBlur={() => combobox.closeDropdown()}
//             />
//             <IconMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
//             <IconChevronDown
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
//               size={18}
//               onClick={() => combobox.openDropdown()}
//             />
//           </div>
//         </Combobox.Target>

//         <Combobox.Dropdown className="absolute w-full">
//           <Combobox.Options>
//             {locations.length === 0 ? (
//               <Combobox.Empty>Nothing found</Combobox.Empty>
//             ) : (
//               locations.map((loc) => (
//                 <Combobox.Option value={loc} key={loc}>
//                   {loc}
//                 </Combobox.Option>
//               ))
//             )}
//           </Combobox.Options>
//         </Combobox.Dropdown>
//       </Combobox>

//       {/* Render Filtered Job Cards */}
//       {/* <div className="mt-6">
//         <h2 className="text-lg font-semibold">
//           Jobs in {value || "All Locations"}
//         </h2>
//         <JobList jobs={filteredJobs} />
//       </div> */}
//     </div>
//   );
// }

"use client";
import { Combobox, TextInput, useCombobox } from "@mantine/core";
import { IconChevronDown, IconMapPin } from "@tabler/icons-react";
import { useJobStore } from "@/store/useJobStore";

const locations = ["Chennai", "Bangalore", "Hyderabad", "Delhi", "Mumbai"];

export default function Location() {
  const combobox = useCombobox();
  const { selectedLocation, setSelectedLocation } = useJobStore();

  return (
    <div className="relative w-full">
      <Combobox
        onOptionSubmit={(optionValue) => {
          setSelectedLocation(optionValue);
          combobox.closeDropdown();
        }}
        store={combobox}
        withinPortal
      >
        <Combobox.Target>
          <div className="relative">
            <TextInput
              placeholder="Preferred Location"
              value={selectedLocation}
              size="md"
              styles={{
                  input: {
                  textAlign: "center", // ✅ Center text
                  paddingLeft: "2rem", // ✅ Space for left icon
                  paddingRight: "2.4rem", // 🔥 Increased right padding (fixes overlap)
                },
              }}
              onChange={(event) => setSelectedLocation(event.currentTarget.value)}
              onClick={() => combobox.openDropdown()}
              onFocus={() => combobox.openDropdown()}
              onBlur={() => combobox.closeDropdown()}
            />
            <IconMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18}/>
            <IconChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              size={18}
              onClick={() => combobox.openDropdown()}
            />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown className="absolute w-full">
          <Combobox.Options>
            {locations.map((loc) => (
              <Combobox.Option value={loc} key={loc}>
                {loc}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

