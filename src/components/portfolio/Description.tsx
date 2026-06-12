import MarkupRenderer from "@ashish-ui/markup-renderer";
import type { Project } from "@/lib/portfolio";

export default function Description({ project }: { project: Project }) {
  if (!project.description) {
    return null;
  }
  return <MarkupRenderer content={project.description} isDark />;
}
