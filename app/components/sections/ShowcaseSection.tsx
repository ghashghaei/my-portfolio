"use client";

import ShowcaseGroup from "./ShowcaseGroup";

import BadgeDemo from "./BadgeDemo";
import ButtonDemo from "./ButtonDemo";
import AccordionDemo from "./AccordionDemo";
import TooltipDemo from "./TooltipDemo";
import DropdownDemo from "./DropdownDemo";

export default function ShowcaseSection() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-12">
      <h2 className="text-3xl text-center text-cyan-400">
        Components Showcase
      </h2>

      {/* Basic */}
      <ShowcaseGroup title="Basic">
        <BadgeDemo />
        <ButtonDemo />
      </ShowcaseGroup>

      {/* Interactive */}
      <ShowcaseGroup title="Interactive">
        <AccordionDemo />
        <DropdownDemo />
      </ShowcaseGroup>

      {/* Feedback */}
      <ShowcaseGroup title="Feedback">
        <TooltipDemo />
      </ShowcaseGroup>
    </div>
  );
}
