// "use client";
// import { Box, Group, Modal, Drawer, Burger } from "@mantine/core";
// import JobForm from "./JobForm";
// import { useState } from "react";

// export function Topbar() {
//   const [jobModalOpened, setJobModalOpened] = useState(false);
//   const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

//   return (
//     <div className="flex items-center rounded-4xl drop-shadow-2xl shadow-md justify-between border-gray-100 border mt-5 px-4 w-fit max-w-6xl mx-auto">
//       <Box p={10} className="w-full">
//         <header className="h-16 flex items-center justify-between">
//           {/* Logo */}
//           <img src="logo.svg" className="pr-5" width={44} height={44.68} />

//           {/* Desktop Navigation */}
//           <Group className="hidden md:flex gap-6 text-sm">
//             {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((item) => (
//               <a href="#" key={item} className="text-[#303030] font-medium px-4 py-2 rounded-md">
//                 {item}
//               </a>
//             ))}
//             <button
//               onClick={() => setJobModalOpened(true)}
//               className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white py-2 px-6 rounded-3xl"
//             >
//               Create Jobs
//             </button>
//           </Group>

//           {/* Mobile Menu Toggle */}
//           <Burger opened={mobileMenuOpened} onClick={() => setMobileMenuOpened(!mobileMenuOpened)} className="md:hidden" />
//         </header>
//       </Box>

//       {/* Mobile Drawer Menu */}
//       <Drawer
//         opened={mobileMenuOpened}
//         onClose={() => setMobileMenuOpened(false)}
//         title="Menu"
//         padding="md"
//         size="75%"
//       >
//         <div className="flex flex-col gap-5">
//           {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((item) => (
//             <a href="#" key={item} className="text-[#303030] font-medium text-lg">
//               {item}
//             </a>
//           ))}
//           <button
//             onClick={() => {
//               setJobModalOpened(true);
//               setMobileMenuOpened(false);
//             }}
//             className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white py-2 px-6 rounded-3xl"
//           >
//             Create Jobs
//           </button>
//         </div>
//       </Drawer>

//       {/* JobForm Modal */}
//       <Modal opened={jobModalOpened} onClose={() => setJobModalOpened(false)} title="Publish a Job" size="lg">
//         <JobForm />
//       </Modal>
//     </div>
//   );
// }

"use client";
import { Box, Group, Modal, Drawer, Burger } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import JobForm from "./JobForm";

export function Topbar() {
  const [jobModalOpened, setJobModalOpened] = useState(false);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Mantine's md breakpoint

  return (
    <div className="flex items-center rounded-full drop-shadow-2xl shadow-md justify-between border-gray-100 border mt-5 px-4 w-fit max-w-6xl md:mx-auto">
      <Box p={10} className="w-full">
        <header className={`h-16 flex items-center ${isMobile ? "justify-evenly" : "justify-between"}`}>
          {/* Logo */}
          <img src="logo.svg" className="pr-5" width={44} height={44.68} alt="Logo" />

          {/* Desktop Navigation (Hidden on Mobile) */}
          {!isMobile && (
            <Group className="gap-6 text-base font-sans font-semibold">
              {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((item) => (
                <a href="#" key={item} className="text-[#303030] font-medium px-4 py-2 rounded-md">
                  {item}
                </a>
              ))}
              <button
                onClick={() => setJobModalOpened(true)}
                className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white py-2 px-6 rounded-3xl"
              >
                Create Jobs
              </button>
            </Group>
          )}

          {/* Mobile Menu Toggle */}
          <Burger
            opened={mobileMenuOpened}
            onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
            className="justify-end ml-auto w-full md:hidden"
            aria-label="Toggle navigation menu"
          />
        </header>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer opened={mobileMenuOpened} onClose={() => setMobileMenuOpened(false)} title="Menu" padding="md" size="75%">
        <div className="flex flex-col gap-5">
          {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((item) => (
            <a href="#" key={item} className="text-[#303030] font-medium text-lg">
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setJobModalOpened(true);
              setMobileMenuOpened(false);
            }}
            className="bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white py-2 px-6 rounded-3xl"
          >
            Create Jobs
          </button>
        </div>
      </Drawer>

      {/* JobForm Modal */}
      <Modal opened={jobModalOpened} onClose={() => setJobModalOpened(false)} title="Publish a Job" size="lg">
        <JobForm />
      </Modal>
    </div>
  );
}

