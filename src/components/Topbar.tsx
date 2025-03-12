"use client"
import { Box, Group, Modal, px } from "@mantine/core";
import JobForm from "./JobForm";
import { useState } from "react";

export function Topbar() {
  const [jobModalOpened, setJobModalOpened] = useState(false);

  return (
    <div className="flex items-center rounded-4xl drop-shadow-2xl shadow-md justify-center border-gray-100 border mt-5 px-4 w-fit mx-44">
      <Box p={10}>
        <header className="h-12 border-gray-300 dark:border-gray-700 flex items-center justify-between">
          <img src='logo.svg' className="pr-5" width={44} height={44.68}/>

          <Group className="hidden sm:flex gap-4 text-sm">
            <a href="#" className="text-[#303030] font-medium px-4 py-2 rounded-md">Home</a>
            <a href="#" className="text-[#303030] font-medium px-4 py-2 rounded-md">Find Jobs</a>
            <a href="#" className="text-[#303030] font-medium px-4 py-2 rounded-md">Find Talents</a>
            <a href="#" className="text-[#303030] font-medium px-4 py-2 rounded-md">About us</a>
            <a href="#" className="text-[#303030] font-medium px-4 py-2 rounded-md">Testimonials</a>

            {/* Create Jobs Button */}
            <button 
              onClick={() => setJobModalOpened(true)} 
              className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white py-[8px] px-[24px] rounded-3xl"
            >
              Create Jobs
            </button>
          </Group>
        </header>
      </Box>

      {/* JobForm Modal */}
      <Modal
        opened={jobModalOpened}
        onClose={() => setJobModalOpened(false)}
        title="Publish a Job"
        size="lg"
      >
        <JobForm />
      </Modal>
    </div>
  );
}
