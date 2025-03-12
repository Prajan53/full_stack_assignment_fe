// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import JobType from "@/components/JobType";
// import Location from "@/components/Location";
// import SalarySlider from "@/components/SalarySlider";
// import { Topbar } from "@/components/Topbar";
// import { Input } from "@mantine/core";
// import { IconSearch } from "@tabler/icons-react";
// import JobList from "@/components/JobCard";

// export default function Home() {
//   const [jobs, setJobs] = useState([]); // All jobs
//   const [filteredJobs, setFilteredJobs] = useState([]); // Filtered jobs
//   const [searchQuery, setSearchQuery] = useState(""); // Search input
//   const [selectedLocation, setSelectedLocation] = useState(""); // Location filter
//   const [selectedJobType, setSelectedJobType] = useState(""); // Job type filter
//   const [salaryRange, setSalaryRange] = useState([0, 100000]); // Salary range filter

//   // Fetch all jobs once
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/admin/jobs");
//         console.log("Fetched Data:", response.data); // Debugging
//         if (response.data && response.data.jobs) {
//           setJobs(response.data.jobs);
//           setFilteredJobs(response.data.jobs); // Initially set all jobs
//         }
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   // Apply filters whenever state changes
//   // useEffect(() => {
//   //   let filtered = [...jobs];

//   //   // Search filter
//   //   if (searchQuery) {
//   //     filtered = filtered.filter((job) =>
//   //       job.title.toLowerCase().includes(searchQuery.toLowerCase())
//   //     );
//   //   }

//   //   // Location filter
//   //   if (selectedLocation) {
//   //     filtered = filtered.filter(
//   //       (job) => job.location.toLowerCase() === selectedLocation.toLowerCase()
//   //     );
//   //   }

//   //   // Job type filter
//   //   if (selectedJobType) {
//   //     filtered = filtered.filter(
//   //       (job) => job.jobType.toLowerCase() === selectedJobType.toLowerCase()
//   //     );
//   //   }

//   //   // Salary filter (ensure salary is a number)
//   //   filtered = filtered.filter((job) => {
//   //     const jobSalary = Number(job.salaryRange); // Convert to number
//   //     return jobSalary >= salaryRange[0] && jobSalary <= salaryRange[1];
//   //   });

//   //   setFilteredJobs(filtered);
//   // }, [searchQuery, selectedLocation, selectedJobType, salaryRange, jobs]);

//   return (
//     <div>
//       <Topbar />
//       <div className="flex justify-around items-center gap-4">
//         {/* Search Input */}
//         <Input
//           className="border flex items-center flex-grow max-w-[400px]"
//           placeholder="Search By Job Title, Role"
//           leftSection={<IconSearch className="text-gray-600" />}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />

//         {/* Location Selector */}
//         <div className="relative w-[200px]">
//           <Location setSelectedLocation={setSelectedLocation} />
//         </div>

//         {/* Job Type Selector */}
//         <div className="relative w-[200px]">
//           <JobType setSelectedJobType={setSelectedJobType} />
//         </div>

//         {/* Salary Range Slider */}
//         <div className="relative min-w-[300px] items-center">
//           <SalarySlider setSalaryRange={setSalaryRange} />
//         </div>
//       </div>

//       {/* Pass only filtered jobs */}
//       {console.log(filteredJobs)}
//       <JobList jobs={filteredJobs} />
//     </div>
//   );
// }

// "use client"
// import { useEffect, useState } from "react";
// import axios from "axios";
// import JobType from "@/components/JobType";
// import Location from "@/components/Location";
// import SalarySlider from "@/components/SalarySlider";
// import { Topbar } from "@/components/Topbar";
// import { Input } from "@mantine/core";
// import { IconSearch } from "@tabler/icons-react";
// import JobList from "@/components/JobCard";

// export default function Home() {
//   const [jobs, setJobs] = useState([]); // All jobs
//   const [filteredJobs, setFilteredJobs] = useState([]); // Filtered jobs
//   const [searchQuery, setSearchQuery] = useState(""); // Search input
//   const [selectedLocation, setSelectedLocation] = useState(""); // Location filter
//   const [selectedJobType, setSelectedJobType] = useState(""); // Job type filter
//   const [salaryRange, setSalaryRange] = useState([0, 100000]); // Salary range filter

//   // Fetch all jobs once
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/admin/jobs");
//         if (response.data && response.data.jobs) {
//           setJobs(response.data.jobs);
//           setFilteredJobs(response.data.jobs);
//         }
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };
//     fetchJobs();
//   }, []);

//   // Filter jobs whenever filters change
//   useEffect(() => {
//     let updatedJobs = jobs;

//     // Filter by search query (title or role)
//     if (searchQuery.trim() !== "") {
//       updatedJobs = updatedJobs.filter((job) =>
//         job.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter by location
//     if (selectedLocation) {
//       updatedJobs = updatedJobs.filter((job) => job.location === selectedLocation);
//     }

//     // Filter by job type
//     if (selectedJobType) {
//       updatedJobs = updatedJobs.filter((job) => job.jobType === selectedJobType);
//     }

//     // Filter by salary range
//     updatedJobs = updatedJobs.filter(
//       (job) =>
//         job.salary >= salaryRange[0] && job.salary <= salaryRange[1]
//     );

//     setFilteredJobs(updatedJobs);
//   }, [searchQuery, selectedLocation, selectedJobType, salaryRange]);

//   return (
//     <div>
//       <Topbar />
//       <div className="flex justify-around items-center gap-4">
//         {/* Search Input */}
//         <Input
//           className="border flex items-center flex-grow max-w-[400px]"
//           placeholder="Search By Job Title, Role"
//           leftSection={<IconSearch className="text-gray-600" />}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />

//         {/* Location Selector */}
//         <div className="relative w-[200px]">
//           <Location setSelectedLocation={setSelectedLocation} />
//         </div>

//         {/* Job Type Selector */}
//         <div className="relative w-[200px]">
//           <JobType setSelectedJobType={setSelectedJobType} />
//         </div>

//         {/* Salary Range Slider */}
//         <div className="relative min-w-[300px] items-center">
//           <SalarySlider setSalaryRange={setSalaryRange} />
//         </div>
//       </div>

//       {/* Render only filtered jobs */}
//       <JobList jobs={filteredJobs} />
//     </div>
//   );
// }

"use client";
import { useEffect, useCallback } from "react";
import axios from "axios";
import JobType from "@/components/JobType";
import Location from "@/components/Location";
import SalarySlider from "@/components/SalarySlider";
import { Topbar } from "@/components/Topbar";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import JobList from "@/components/JobCard";
import { useJobStore } from "@/store/useJobStore";

export default function Home() {
  const {
    jobs,
    filteredJobs,
    searchQuery,
    selectedLocation,
    selectedJobType,
    salaryRange,
    setJobs,
    setFilteredJobs,
    setSearchQuery,
  } = useJobStore();

  // ✅ Memoized setter functions to avoid unnecessary re-renders
  //@ts-ignore
  const updateJobs = useCallback((newJobs) => {
    setJobs(newJobs);
    setFilteredJobs(newJobs); // Initialize filtered jobs
  }, [setJobs, setFilteredJobs]);

  // ✅ Fetch jobs only once on mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/jobs");
        if (response.data && response.data.jobs) {
          updateJobs(response.data.jobs);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [updateJobs]);

  // ✅ Filter jobs whenever state changes
  useEffect(() => {
    let updatedJobs = [...jobs];

    // 🔍 Search Filter
    if (searchQuery.trim()) {
      updatedJobs = updatedJobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 📍 Location Filter
    if (selectedLocation) {
      updatedJobs = updatedJobs.filter((job) => job.location === selectedLocation);
    }

    // 🏢 Job Type Filter
    if (selectedJobType) {
      updatedJobs = updatedJobs.filter((job) => job.jobType === selectedJobType);
    }

    // 💰 Salary Filter (Ensuring proper parsing)
    updatedJobs = updatedJobs.filter((job) => {
      const salaryNumbers = job.salaryRange.match(/\d+/g); // Extract numbers
      if (!salaryNumbers) return false; // Skip invalid salary formats

      const minSalary = parseInt(salaryNumbers[0], 10); // Convert min salary
      const maxSalary = parseInt(salaryNumbers[salaryNumbers.length - 1], 10); // Convert max salary

      return minSalary >= salaryRange[0] && maxSalary <= salaryRange[1];
    });

    setFilteredJobs(updatedJobs);
  }, [searchQuery, selectedLocation, selectedJobType, salaryRange, jobs]);

  return (
    <div>
      <Topbar />
      <div className="flex flex-wrap justify-around items-center gap-4 my-4 ">
        {/* 🔍 Search Input */}
        <Input
          className="flex items-center flex-grow max-w-[400px]"
          placeholder="Search By Job Title, Role"
          leftSection={<IconSearch className="text-gray-600" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* 📍 Location Selector */}
        <div className="relative w-[200px]">
          <Location />
        </div>

        {/* 🏢 Job Type Selector */}
        <div className="relative w-[200px]">
          <JobType />
        </div>

        {/* 💰 Salary Range Slider */}
        <div className="relative min-w-[300px]">
          <SalarySlider />
        </div>
      </div>

      {/* 🎯 Render Filtered Jobs */}
      <JobList 
      //@ts-expect-error
      jobs={filteredJobs} />
    </div>
  );
}




