"use client";

import CoreDropdown from "../ui/CoreSelect/CoreSelect";

export default function DropdownDemo() {
  return (
    <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
      <h4>Dropdown</h4>

      <CoreDropdown
        label="Select option"
        items={[
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
        ]}
      />
    </div>
  );
}
