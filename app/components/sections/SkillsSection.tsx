import CoreBadge from "../ui/CoreBadge/CoreBadge";

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
          <CoreBadge key={skill} label={skill} variant="primary" size="md" />
        ))}
      </div>
    </div>
  );
}
