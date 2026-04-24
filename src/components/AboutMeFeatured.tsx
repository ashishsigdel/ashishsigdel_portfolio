import SkillsTree from "./SkillsTree";

export default function AboutMeFeatured() {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-orange-600">Me</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">Know me better!</p>
        </div>
        <SkillsTree />
      </div>
    </section>
  );
}
