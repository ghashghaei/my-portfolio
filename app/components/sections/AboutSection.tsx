import { getLocale } from "../../lib/getLocale";
import Image from "next/image";
import CoreButton from "../ui/CoreButton/CoreButton";
import CoreTooltip from "../ui/CoreTooltip/CoreTooltip";
import { contactItems } from "../../config/contact";

type Props = {
  locale: string;
};

export default function AboutSection({ locale }: Props) {
  const lang = getLocale(locale);
  const contactContent = (
    <div className="flex flex-col gap-2 text-sm">
      {contactItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          className="hover:text-cyan-400"
        >
          {item.label}: {item.value}
        </a>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-40 h-40 relative">
        <Image
          src="/profile.jpg"
          alt="profile"
          fill
          sizes="(max-width: 768px) 160px, 160px"
          className="rounded-full object-cover border-4 border-cyan-400"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl font-bold text-cyan-400">{lang.about.name}</h1>

        <h2 className="text-xl mt-2 text-gray-300">{lang.about.role}</h2>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {lang.about.description}
        </p>

        <div className="mt-6">
          <CoreTooltip text={contactContent}>
            <CoreButton variant="primary" size="md">
              {lang.about.contact}
            </CoreButton>
          </CoreTooltip>
        </div>
      </div>
    </div>
  );
}
