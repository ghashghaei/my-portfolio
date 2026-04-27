"use client";

import CoreTooltip from "../ui/CoreTooltip/CoreTooltip";
import CoreButton from "../ui/CoreButton/CoreButton";

export default function TooltipDemo() {
  return (
    <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
      <h4>Tooltip</h4>

      <CoreTooltip text="This is a tooltip">
        <CoreButton>Hover me</CoreButton>
      </CoreTooltip>
    </div>
  );
}
