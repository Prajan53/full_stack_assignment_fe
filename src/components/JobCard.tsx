// "use client";
// import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
// import { IconBriefcase, IconMapPin, IconCoins } from "@tabler/icons-react";

// export default function JobCard() {
//   return (
//     <Card shadow="md" padding="lg" radius="md" withBorder className="w-full max-w-xs relative">
//       {/* Time Badge */}
//       <Badge color="blue" variant="light" radius="md" className="absolute top-3 right-3">
//         24h Ago
//       </Badge>

//       {/* Company Logo */}
//       <Group position="center" mt="sm">
//         <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-gray-100">
//           <Image src="amazon.png" width={30} height={30} alt="Amazon Logo" />
//         </div>
//       </Group>

//       {/* Job Title */}
//       <Text fw={600} size="lg" align="center" mt="sm">
//         Full Stack Developer
//       </Text>

//       {/* Job Details */}
//       <Group position="center" spacing="xs" mt="xs">
//         <IconBriefcase size={16} /> <Text size="sm">1-3 yr Exp</Text>
//         <IconMapPin size={16} /> <Text size="sm">Onsite</Text>
//         <IconCoins size={16} /> <Text size="sm">12LPA</Text>
//       </Group>

//       {/* Job Description */}
//       <Text size="sm" color="dimmed" mt="md">
//         • A user-friendly interface lets you browse stunning photos and videos
//       </Text>
//       <Text size="sm" color="dimmed">
//         • Filter destinations based on interests and travel style
//       </Text>

//       {/* Apply Button */}
//       <Button fullWidth mt="md" radius="md" color="blue">
//         Apply Now
//       </Button>
//     </Card>
//   );
// }

// "use client"
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Image, Text, Badge, Button, Group, Loader } from "@mantine/core";
// import { IconBriefcase, IconMapPin, IconCoins } from "@tabler/icons-react";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime"; // ✅ Import plugin

// dayjs.extend(relativeTime); // ✅ Extend dayjs with relativeTime

// interface Job {
//   id: string;
//   title: string;
//   companyName: string;
//   location: string;
//   jobType: string;
//   salaryRange: string;
//   jobDescription: string;
//   createdAt: string;
// }

// export default function JobList() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/admin/jobs")
//       .then((response) => {
//         setJobs(response.data.jobs);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load jobs.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <Loader size="lg" className="flex justify-center mt-10" />;
//   if (error) return <Text color="red" className="text-center mt-10">{error}</Text>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
//       {jobs.map((job) => (
//         <Card key={job.id} shadow="md" padding="lg" radius="md" withBorder className="relative w-full max-w-xs">
//           {/* Time Badge */}
//           <Badge color="blue" variant="light" radius="md" className="absolute top-3 right-3">
//             {dayjs(job.createdAt).fromNow()} {/* ✅ Now it works! */}
//           </Badge>

//           {/* Company Logo Placeholder */}
//           <Group position="center" mt="sm">
//             <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-gray-100">
//               <Image src="amazon.png" width={30} height={30} alt={`${job.companyName} Logo`} />
//             </div>
//           </Group>

//           {/* Job Title */}
//           <Text fw={600} size="lg" align="center" mt="sm">
//             {job.title}
//           </Text>

//           {/* Job Details */}
//           <Group position="center" spacing="xs" mt="xs">
//             <IconBriefcase size={16} /> <Text size="sm">{job.jobType.replace("_", " ")}</Text>
//             <IconMapPin size={16} /> <Text size="sm">{job.location}</Text>
//             <IconCoins size={16} /> <Text size="sm">{job.salaryRange}</Text>
//           </Group>

//           {/* Job Description */}
//           <Text size="sm" color="dimmed" mt="md" lineClamp={2}>
//             {job.jobDescription}
//           </Text>

//           {/* Apply Button */}
//           <Button fullWidth mt="md" radius="md" color="blue">
//             Apply Now
//           </Button>
//         </Card>
//       ))}
//     </div>
//   );
// }

// "use client";
// import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
// import { IconBriefcase, IconMapPin, IconCoins } from "@tabler/icons-react";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// dayjs.extend(relativeTime);

// interface Job {
//   id: string;
//   title: string;
//   companyName: string;
//   location: string;
//   jobType: string;
//   salaryRange: string;
//   jobDescription: string;
//   createdAt: string;
// }

// export default function JobList({ jobs }: { jobs: Job[] }) {

//   console.log("Received Jobs:", jobs);
//   if (!jobs || jobs.length === 0) {
//     return <Text align="center" mt="10">No jobs found for the selected location.</Text>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
//       {jobs.map((job) => (
//         <Card key={job.id} shadow="md" padding="lg" radius="md" withBorder className="relative w-full max-w-xs">
//           {/* Time Badge */}
//           <Badge color="blue" variant="light" radius="md" className="absolute top-3 right-3">
//             {dayjs(job.createdAt).fromNow()}
//           </Badge>

//           {/* Company Logo Placeholder */}
//           <Group position="center" mt="sm">
//             <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-gray-100">
//               <Image src="amazon.png" width={30} height={30} alt={`${job.companyName} Logo`} />
//             </div>
//           </Group>

//           {/* Job Title */}
//           <Text fw={600} size="lg" align="center" mt="sm">
//             {job.title}
//           </Text>

//           {/* Job Details */}
//           <Group position="center" spacing="xs" mt="xs">
//             <IconBriefcase size={16} /> <Text size="sm">{job.jobType.replace("_", " ")}</Text>
//             <IconMapPin size={16} /> <Text size="sm">{job.location}</Text>
//             <IconCoins size={16} /> <Text size="sm">{job.salaryRange}</Text>
//           </Group>

//           {/* Job Description */}
//           <Text size="sm" color="dimmed" mt="md" lineClamp={2}>
//             {job.jobDescription}
//           </Text>

//           {/* Apply Button */}
//           <Button fullWidth mt="md" radius="md" color="blue">
//             Apply Now
//           </Button>
//         </Card>
//       ))}
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IconBriefcase, IconMapPin, IconCoins } from "@tabler/icons-react";
import { useJobStore } from "@/store/useJobStore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);



export default function JobList() {
  const { filteredJobs, jobs } = useJobStore();

  useEffect(() => {
    console.log("Available Jobs:", jobs);
    console.log("Filtered Jobs:", filteredJobs);
  }, [jobs, filteredJobs]);

  if (!filteredJobs || filteredJobs.length === 0) {
    return (
      <Text mt="10" className="text-gray-500">
        No jobs found matching the selected filters.
      </Text>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-5">
      {filteredJobs.map((job) => (
        <Card key={job.id} shadow="md" padding="lg" radius="md" withBorder className="relative w-full max-w-xs">
          {/* Time Badge */}
          <Badge color="blue" variant="light" radius="md" className="absolute top-3 right-3">
            {dayjs(job.createdAt).fromNow()}
          </Badge>

          {/* Company Logo Placeholder */}
          <Group mt="sm">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-gray-100">
              
              <Image src="Tesla.png" width={30} height={30} alt={`${job.companyName} Logo`} />
            </div>
          </Group>

          {/* Job Title */}
          <Text fw={600} size="lg" mt="sm">
            {job.title}
          </Text>

          {/* Job Details */}
          <Group mt="xs">
            <IconBriefcase size={16} />{""}
            <Text size="sm">{job.jobType.replace("_", " ").toUpperCase()}</Text>
            <IconMapPin size={16} /> <Text size="sm">{job.location}</Text>
            <IconCoins size={16} /> <Text size="sm">{job.salaryRange}</Text>
          </Group>

          {/* Job Description */}
          <Text size="sm" color="dimmed" mt="md" lineClamp={2}>
            {job.jobDescription}
          </Text>

          {/* Apply Button */}
          <Button fullWidth mt="md" radius="md" color="blue">
            Apply Now
          </Button>
        </Card>
      ))}
    </div>
  );
}




