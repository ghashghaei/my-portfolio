"use client";

import { useState } from "react";
import CoreBadge from "../ui/CoreBadge/CoreBadge";
import CoreButton from "../ui/CoreButton/CoreButton";

export default function BadgeDemo() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [variant, setVariant] = useState<"primary" | "secondary" | "outline">(
    "primary",
  );

  return (
    <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
      <h3>Badge</h3>

      <div className="flex gap-2 flex-wrap">
        <CoreButton onClick={() => setSize("sm")}>SM</CoreButton>
        <CoreButton onClick={() => setSize("md")}>MD</CoreButton>
        <CoreButton onClick={() => setSize("lg")}>LG</CoreButton>
      </div>

      <div className="flex gap-2 flex-wrap">
        <CoreButton onClick={() => setVariant("primary")}>Primary</CoreButton>
        <CoreButton onClick={() => setVariant("secondary")}>
          Secondary
        </CoreButton>
        <CoreButton onClick={() => setVariant("outline")}>Outline</CoreButton>
      </div>
      <div className="mt-4 inline-block">
        <CoreBadge size={size} variant={variant} label="React" />
      </div>
    </div>
  );
}
