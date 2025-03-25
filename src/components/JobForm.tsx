

"use client";
import { useState } from "react";
import {
  Modal,
  Button,
  TextInput,
  Select,
  Textarea,
  Group,
  NumberInput,
} from "@mantine/core";
import { useForm } from "react-hook-form";
// import { IconCurrencyRupee } from "@tabler/icons-react";
import DatePicker from "react-date-picker";
import axios from "axios";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { mutate } from "swr";
import { useRouter } from "next/navigation";
import { useJobStore } from "@/store/useJobStore";

interface Job {
  id: string;
  title: string;
  companyName: string;
  location: string;
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
  salaryRange: { min: number; max: number };
  jobDescription: string;
  requirements: string;
  responsibilities: string;
  applicationDeadline: string;
  createdAt: string;
  updatedAt: string;
  adminId: string;
}

export default function JobForm() {
  const [opened, setOpened] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setJobs, setFilteredJobs, jobs } = useJobStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  // Debugging: Log the form errors to check structure
  console.log("Form Errors:", errors);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);

    const jobData = {
      title: data.jobTitle,
      companyName: data.company,
      location: data.location || "Not specified",
      jobType: data.jobType?.toUpperCase() || "FULL-TIME",
      salaryRange: `₹${data.salaryMin || 0} - ₹${data.salaryMax || 0}`,
      applicationDeadline: selectedDate?.toISOString(),
      jobDescription: data.description,
      requirements: data.requirements,
      responsibilities: data.responsibilities,
    };

    try {
      console.log(jobData);
      const response = await axios.post(
        "https://admin-inf-be-assignment.vercel.app/jobs",
        jobData,
        {
          headers: {
            "Content-Type": "application/json"
          },// Required if using cookies/session-based auth
        }
      );

      console.log("Job Created:", response.data);
      setOpened(false);
      reset();
      const getResponse = await axios.get<{ jobs: Job[]}>("https://admin-inf-be-assignment.vercel.app/jobs");

      setJobs(getResponse.data.jobs);
      setFilteredJobs(getResponse.data.jobs);
    }catch (err: any) {
      setError(err.response?.data?.message || "Failed to create job");
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpened(true)} className="bg-blue-500">
        Create Job
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        title={<p className="text-xl font-semibold text-center">Create Job Opening</p>}
        size="lg"
        styles={{ body: { maxHeight: "70vh", overflowY: "auto" } }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-2">
          {/* Job Title & Company Name */}
          <Group grow>
            <TextInput
              label="Job Title"
              placeholder="Full Stack Developer"
              {...register("jobTitle", { required: "Job Title is required" })}
              error={errors.jobTitle?.message as string || undefined}
            />
            <TextInput
              label="Company Name"
              placeholder="Amazon, Microsoft, Swiggy"
              {...register("company", { required: "Company Name is required" })}
              error={errors.company?.message as string || undefined}
            />
          </Group>

          {/* Location & Job Type */}
          <Group grow>
            <Select
              label="Location"
              placeholder="Choose Preferred Location"
              data={["Remote", "Bangalore", "Chennai", "Delhi"]}
              {...register("location", { required: "Location is required" })}
              error={errors.location?.message as string || undefined}
              onChange={(value) => setValue("location", value, { shouldValidate: true })}
            />
            <Select
              label="Job Type"
              placeholder="Full-time"
              data={["FULL_TIME","PART_TIME","CONTRACT","INTERNSHIP"]}
              {...register("jobType", { required: "Job Type is required" })}
              error={errors.jobType?.message as string || undefined}
              onChange={(value) => setValue("jobType", value, { shouldValidate: true })}
            />
          </Group>

          {/* Salary Range & Application Deadline */}
          <Group grow>
            <NumberInput
              label="Min Salary"
              placeholder="₹0"
              // icon={<IconCurrencyRupee size={16} />}
              className="w-full"
              onChange={(value) => setValue("salaryMin", value || 0, { shouldValidate: true })}
              error={errors.salaryMin?.message as string || undefined }
            />
            <NumberInput
              label="Max Salary"
              placeholder="₹12,00,000"
              // icon={<IconCurrencyRupee size={16} />}
              className="w-full"
              onChange={(value) => setValue("salaryMax", value || 0, { shouldValidate: true })}
              error={errors.salaryMax?.message as string || undefined }
            />

            {/* Application Deadline Date Picker */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <div className="h-[50px] flex items-center">
                {/* <DatePicker
                  onChange={(date) => {
                    // @ts-expect-error
                    setSelectedDate(date);
                    // @ts-expect-error
                    setValue("applicationDeadline", date?.toISOString(), { shouldValidate: true });
                  }}
                  value={selectedDate}
                  format="y-MM-dd"
                  showLeadingZeros
                  // @ts-expect-error
                  calendarType="gregory"
                  maxDetail="month"
                  minDetail="decade"
                  clearIcon={null}
                  className="w-full border rounded-md p-2"
                /> */}
                <DatePicker
                    onChange={(date: Date | null | [Date | null, Date | null]) => {
                      if (!date) {
                        setSelectedDate(null);
                        setValue("applicationDeadline", "", { shouldValidate: true });
                        return;
                      }

                      if (Array.isArray(date)) {
                        setSelectedDate(date[0]); // Use the first date if range selection is enabled
                        setValue("applicationDeadline", date[0] ? date[0].toISOString() : "", { shouldValidate: true });
                      } else {
                        setSelectedDate(date);
                        setValue("applicationDeadline", date.toISOString(), { shouldValidate: true });
                      }
                    }}
                    value={selectedDate}
                    format="y-MM-dd"
                    showLeadingZeros
                    // calendarType="gregory"
                    maxDetail="month"
                    // minDetail="decade"
                    clearIcon={null}
                    className="w-full border rounded-md p-2"
                  />;
              </div>
            </div>
          </Group>

          {/* Job Description */}
          <Textarea
            label="Job Description"
            placeholder="Please share a description to let the candidate know more about the job role"
            {...register("description", { required: "Job description is required" })}
            error={errors.description?.message as string || undefined }
          />

          {/* Requirements */}
          <Textarea
            label="Requirements"
            placeholder="List the job requirements here"
            {...register("requirements", { required: "Requirements are required" })}
            error={errors.requirements?.message as string || undefined }
          />

          {/* Responsibilities */}
          <Textarea
            label="Responsibilities"
            placeholder="List the job responsibilities here"
            {...register("responsibilities", { required: "Responsibilities are required" })}
            error={errors.responsibilities?.message as string || undefined }
          />

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Actions */}
          <Group mt="md">
            <Button variant="outline" size="md" className="border border-gray-400">
              Save Draft ⌄
            </Button>
            <Button type="submit" className="bg-blue-500 text-white" size="md" disabled={loading}>
              {loading ? "Publishing..." : "Publish »"}
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}



