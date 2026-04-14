import CoreBadge from "../ui/CoreBadge/CoreBadge";
import CoreTooltip from "../ui/CoreTooltip/CoreTooltip";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "JavaScript",
  "HTML",
  "CSS",
];

export default function SkillsSection() {
  return (
    <div className="mt-6 flex flex-col items-center w-full">
      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {skills.map((skill) => (
          <CoreTooltip key={skill} text={skill} position="bottom">
            <CoreBadge label={skill} variant="primary" size="md" />
          </CoreTooltip>
        ))}
      </div>
    </div>
  );
}
