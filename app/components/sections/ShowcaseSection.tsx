"use client";

import { useState } from "react";
import CoreBadge from "../ui/CoreBadge/CoreBadge";
import CoreButton from "../ui/CoreButton/CoreButton";

export default function ShowcaseSection() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [variant, setVariant] = useState<"primary" | "secondary" | "outline">(
    "primary",
  );
  const [btnVariant, setBtnVariant] = useState<
    "primary" | "secondary" | "outline" | "ghost"
  >("primary");

  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");

  const [iconPosition, setIconPosition] = useState<"left" | "right">("left");

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      <h2 className="text-3xl text-center text-cyan-400">
        Components Playground
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <CoreButton onClick={() => setVariant("primary")}>
              Primary
            </CoreButton>
            <CoreButton onClick={() => setVariant("secondary")}>
              Secondary
            </CoreButton>
            <CoreButton onClick={() => setVariant("outline")}>
              Outline
            </CoreButton>
          </div>

          {/* Result */}
          <div className="mt-4">
            <CoreBadge size={size} variant={variant} label="React" />
          </div>
        </div>
        {/* Button Demo */}
        <div className="border p-6 rounded-lg border-slate-700 flex flex-col gap-4">
          <h3 className="text-xl">Button</h3>

          {/* Variant */}
          <div className="flex gap-2 flex-wrap">
            <CoreButton onClick={() => setBtnVariant("primary")}>
              Primary
            </CoreButton>
            <CoreButton onClick={() => setBtnVariant("secondary")}>
              Secondary
            </CoreButton>
            <CoreButton onClick={() => setBtnVariant("outline")}>
              Outline
            </CoreButton>
            <CoreButton onClick={() => setBtnVariant("ghost")}>
              Ghost
            </CoreButton>
          </div>

          {/* Size */}
          <div className="flex gap-2 flex-wrap">
            <CoreButton onClick={() => setBtnSize("sm")}>SM</CoreButton>
            <CoreButton onClick={() => setBtnSize("md")}>MD</CoreButton>
            <CoreButton onClick={() => setBtnSize("lg")}>LG</CoreButton>
          </div>

          {/* Icon Position */}
          <div className="flex gap-2 flex-wrap">
            <CoreButton onClick={() => setIconPosition("left")}>
              Icon Left
            </CoreButton>
            <CoreButton onClick={() => setIconPosition("right")}>
              Icon Right
            </CoreButton>
          </div>

          {/* Result */}
          <div className="mt-4">
            <CoreButton variant={btnVariant} size={btnSize}>
              <span className="flex items-center gap-2">
                {iconPosition === "left" && <span>*</span>}
                Click Me
                {iconPosition === "right" && <span>*</span>}
              </span>
            </CoreButton>
          </div>
        </div>
      </div>
    </div>
  );
}
