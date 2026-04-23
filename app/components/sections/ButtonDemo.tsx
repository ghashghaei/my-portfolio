"use client";

import { useState } from "react";
import CoreButton from "../ui/CoreButton/CoreButton";

export default function ButtonDemo() {
  const [variant, setVariant] = useState<
    "primary" | "secondary" | "outline" | "ghost"
  >("primary");

  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const [iconPosition, setIconPosition] = useState<"left" | "right">("left");

  return (
    <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
      <h3>Button</h3>

      <div className="flex gap-2 flex-wrap">
        <CoreButton onClick={() => setVariant("primary")}>Primary</CoreButton>
        <CoreButton onClick={() => setVariant("secondary")}>
          Secondary
        </CoreButton>
        <CoreButton onClick={() => setVariant("outline")}>Outline</CoreButton>
        <CoreButton onClick={() => setVariant("ghost")}>Ghost</CoreButton>
      </div>

      <div className="flex gap-2 flex-wrap">
        <CoreButton onClick={() => setSize("sm")}>SM</CoreButton>
        <CoreButton onClick={() => setSize("md")}>MD</CoreButton>
        <CoreButton onClick={() => setSize("lg")}>LG</CoreButton>
      </div>

      <div className="flex gap-2 flex-wrap">
        <CoreButton onClick={() => setIconPosition("left")}>Left</CoreButton>
        <CoreButton onClick={() => setIconPosition("right")}>Right</CoreButton>
      </div>
      <div className="mt-4 inline-block">
        <CoreButton variant={variant} size={size}>
          <span className="flex items-center gap-2">
            {iconPosition === "left" && "*"}
            Click Me
            {iconPosition === "right" && "*"}
          </span>
        </CoreButton>
      </div>
    </div>
  );
}
