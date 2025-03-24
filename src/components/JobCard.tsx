

"use client";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { useJobStore } from "@/store/useJobStore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);


export default function JobList() {
  const { filteredJobs } = useJobStore();

  const formatSalary = (salaryRange: any) => {
    if (!salaryRange) return "";
  
    // Remove currency symbols and split by " - "
    const values = salaryRange.replace(/[^\d\s-]/g, "").split(" - ").map(Number);
    
    if (values.length < 2 || isNaN(values[1])) return salaryRange; // Return original if format is unexpected
  
    // Convert second value to LPA
    const secondValueLPA = (values[1] / 100000).toFixed(1) + " LPA";
    
    return secondValueLPA;
  };
  

  // useEffect(() => {
  //   console.log("Available Jobs:", jobs);
  //   console.log("Filtered Jobs:", filteredJobs);
  // }, [jobs, filteredJobs]);

  // Company logo mapping
  const companyLogos: any = {
    Tesla: "Tesla.png",
    Swiggy: "swiggy.png",
    Amazon: "amazon.png",
  };

  if (!filteredJobs || filteredJobs.length === 0) {
    return (
      <Text mt="10" className="text-gray-500">
        No jobs found matching the selected filters.
      </Text>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px] p-[16px] md:px-[64px] md:py-[16px]">
      {filteredJobs.map((job) => (
        <Card key={job.id} shadow="md" padding="lg" radius="md" className="relative w-full min-w-[20vw] min-h-[20vw-44px] text-[#555555]">
          {/* Time Badge */}
          <Badge color="#B0D9FF" variant="filled" radius="sm" className="absolute top-3 right-3 font-sans text-sm font-semibold text-black" style={{ color: "black", fontWeight: "500", textTransform: "none" }}>
            {/* {dayjs(job.createdAt).fromNow().replace(/\b\w/, (c) => c.toUpperCase())} */}
            {dayjs(job.createdAt).fromNow()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")}
          </Badge>

          {/* Company Logo Placeholder */}
          <Group mt="sm">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-gray-100 ">
              <Image 
                src={companyLogos[job.companyName] || "swiggy.png"} 
                width={30} 
                height={30} 
                alt={`${job.companyName} Logo`} 
              />
            </div>
          </Group>

          {/* Job Title */}
          <Text fw={700} className="font-sans" size="lg" mt="sm">
            {job.title}
          </Text>

          {/* Job Details */}
          {/* <Group mt="xs">
            <IconBriefcase size={16} />
            <Text size="sm">{job.jobType.replace("_", " ").toUpperCase()}</Text>
            <IconMapPin size={16} /> <Text size="sm">{job.location}</Text>
            <IconCoins size={16} /> <Text size="sm">{job.salaryRange}</Text>
          </Group> */}

          <Group mt="xs" gap="sm"> 
            <Flex align="center" gap="3px" className="items-center">
              <Image src="ExpIcon.svg" />
              <Text size="sm" color="#555555" className="font-medium font-sans text-base">{job.jobType.replace("_", " ").toUpperCase()}</Text>
            </Flex>
            <Flex align="center" gap="3px" className="items-center">
              <Image src="Location.svg" />
              <Text size="sm" color="#555555" className="font-medium font-sans text-base">{job.location}</Text>
            </Flex>
            <Flex align="center" gap="3px" className="items-center">
            <Image src="Salary.svg"/>
              <Text size="sm" color="#555555" className="font-medium font-sans text-base">
                {formatSalary(job.salaryRange)}
              </Text>
            </Flex>
          </Group>

          {/* Job Description */}
          {/* <Text size="sm" color="dimmed" mt="md" lineClamp={2}>
            {job.jobDescription}
          </Text> */}
        <ul className="list-disc pl-5 font-sans font-medium text-xs text-[#555555] mt-2">
          {job.jobDescription.split("\n").map((point: string, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

          {/* Apply Button */}
          <Button fullWidth mt="md" radius="md" className="font-sans font-semibold text-base" style={{ backgroundColor: "#00AAFF", boxShadow: "0px 0px 14px 0px #5D5D5D26" }}>
            Apply Now
          </Button>
        </Card>
      ))}
    </div>
  );
}





