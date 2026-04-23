"use client";

import BadgeDemo from "./BadgeDemo";
import ButtonDemo from "./ButtonDemo";
import AccordionDemo from "./AccordionDemo";

export default function ShowcaseSection() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10">
      <h2 className="text-3xl text-center text-cyan-400">
        Components Playground
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <BadgeDemo />
        <ButtonDemo />
        <AccordionDemo />
      </div>
    </div>
  );
}
