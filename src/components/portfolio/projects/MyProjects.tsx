import SectionTitle from "../utils/SectionTitle";
import Projects from "./Projects";

export default function MyProjects() {
  return (
    <section
      id="projects"
      className="min-h-screen mt-10 bg-gradient-to-t from-gray-950 to-transparent pb-8"
    >
      <div className="py-8 md:py-10 px-4 min-[1200px]:px-14 max-w-7xl mx-auto">
        <SectionTitle title="My Portfolio" />
        <div className="relative mt-10">
          <Projects />
        </div>
      </div>
    </section>
  );
}
