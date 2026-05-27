"use client";

import ShowcaseGroup from "./ShowcaseGroup";

import BadgeDemo from "./BadgeDemo";
import ButtonDemo from "./ButtonDemo";
import AccordionDemo from "./AccordionDemo";
import TooltipDemo from "./TooltipDemo";
import DropdownDemo from "./DropdownDemo";

import { getLocale } from "../../lib/getLocale";

type Props = {
  locale: string;
};

export default function ShowcaseSection({ locale }: Props) {
  const lang = getLocale(locale);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-12">
      {/* Basic */}
      <ShowcaseGroup title={lang.showcase.groups.basic}>
        <BadgeDemo />
        <ButtonDemo />
      </ShowcaseGroup>

      {/* Interactive */}
      <ShowcaseGroup title={lang.showcase.groups.interactive}>
        <AccordionDemo />
        <DropdownDemo />
      </ShowcaseGroup>

      {/* Feedback */}
      <ShowcaseGroup title={lang.showcase.groups.feedback}>
        <TooltipDemo />
      </ShowcaseGroup>
    </div>
  );
}
