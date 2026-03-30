"use client";

import { getLocale } from "../../lib/getLocale";
import CoreAccordion from "../ui/CoreAccordion/CoreAccordion";

type Props = {
  locale: string;
};

export default function ExperienceSection({ locale }: Props) {
  const lang = getLocale(locale);

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
      {lang.experience.map((exp) => (
        <CoreAccordion key={exp.id} title={`${exp.company} — ${exp.role}`}>
          <div className="mt-3 text-sm text-gray-400 space-y-2">
            <p className="text-gray-300">{exp.date}</p>
            <p>{exp.description}</p>

            <ul className="list-disc pl-5 space-y-1">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </CoreAccordion>
      ))}
    </div>
  );
}
