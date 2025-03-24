

"use client";
import { Combobox, useCombobox, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useJobStore } from "@/store/useJobStore";

const jobTypes = ["Full_time", "Part_time", "Contract", "Internship"];

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


