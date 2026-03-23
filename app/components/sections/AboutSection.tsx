import { getLocale } from "../../lib/getLocale";
import Image from "next/image";

type Props = {
  locale: string;
};

export default function AboutSection({ locale }: Props) {
  const lang = getLocale(locale);

  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-40 h-40 relative">
        <Image
          src="/profile.jpg"
          alt="profile"
          fill
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
          <button className="bg-cyan-500 px-5 py-2 rounded-md hover:bg-cyan-400 transition">
            {lang.about.contact}
          </button>
        </div>
      </div>
    </div>
  );
}
