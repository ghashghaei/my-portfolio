import { sections } from "./config/section";

export default function HomePage() {
  return (
    <div>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen flex items-center"
        >
          <h2 className="text-4xl">{section.title}</h2>
        </section>
      ))}
    </div>
  );
}
