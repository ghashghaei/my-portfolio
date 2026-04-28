type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ShowcaseGroup({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl text-cyan-400 border-b border-slate-700 pb-2">
        {title}
      </h3>

      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}
