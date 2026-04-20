"use client";

import { useState } from "react";
import CoreBadge from "../ui/CoreBadge/CoreBadge";
import CoreButton from "../ui/CoreButton/CoreButton";

export default function ShowcaseSection() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [variant, setVariant] = useState<"primary" | "secondary" | "outline">(
    "primary",
  );

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      <h2 className="text-3xl text-center text-cyan-400">
        Components Playground
      </h2>

      {/* Badge Demo */}
      <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
        <h3 className="text-xl">Badge</h3>

        {/* Size Controls */}
        <div className="flex gap-2 flex-wrap">
          <CoreButton onClick={() => setSize("sm")}>SM</CoreButton>
          <CoreButton onClick={() => setSize("md")}>MD</CoreButton>
          <CoreButton onClick={() => setSize("lg")}>LG</CoreButton>
        </div>

        {/* Variant Controls */}
        <div className="flex gap-2 flex-wrap">
          <CoreButton onClick={() => setVariant("primary")}>Primary</CoreButton>
          <CoreButton onClick={() => setVariant("secondary")}>
            Secondary
          </CoreButton>
          <CoreButton onClick={() => setVariant("outline")}>Outline</CoreButton>
        </div>

        {/* Result */}
        <div className="mt-4">
          <CoreBadge size={size} variant={variant} label="React" />
        </div>
      </div>
    </div>
  );
}
