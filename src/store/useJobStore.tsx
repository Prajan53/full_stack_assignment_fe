import { create } from "zustand";

interface JobStoreState {
    //@ts-ignore
  jobs: any[];
  //@ts-ignore
  filteredJobs: any[];

  searchQuery: string;
  selectedLocation: string;
  //@ts-ignore
  selectedJobType: string;
  //@ts-ignore
  salaryRange: [number, number];

  setJobs: (jobs: any[]) => void;
  setFilteredJobs: (filteredJobs: any[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedJobType: (jobType: string) => void;
  setSalaryRange: (range: [number, number]) => void;
}

export const useJobStore = create<JobStoreState>((set) => ({
  jobs: [],
  filteredJobs: [],
  searchQuery: "",
  selectedLocation: "",
  selectedJobType: "",
  salaryRange: [0, 10000000000],

  setJobs: (jobs) => set({ jobs, filteredJobs: jobs }),
  setFilteredJobs: (filteredJobs) => set({ filteredJobs }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  setSelectedJobType: (jobType) => set({ selectedJobType: jobType }),
  setSalaryRange: (range) => set({ salaryRange: range }),
}));
