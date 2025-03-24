

"use client";
import { Combobox, useCombobox, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
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
          <div
            className="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md font-sans font-medium text-[#686868] text-base"
            onClick={() => combobox.openDropdown()}
          >
            <div className="flex items-center gap-4">
              <Image src="LocationMain.svg"/>
              <span className="text-[#555555]">{selectedLocation || "Preferred Location"}</span>
            </div>
            <IconChevronDown className="text-gray-500" size={18} />
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


