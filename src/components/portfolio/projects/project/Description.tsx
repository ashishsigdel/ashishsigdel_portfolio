import MarkupRenderer from "@ashish-ui/markup-renderer";

export default function Description({ project }: { project: any }) {
  if (!project.description) {
    return;
  }
  return <MarkupRenderer content={project.description} isDark />;
}
