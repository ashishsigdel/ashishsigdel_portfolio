import React from "react";
import he from "he";

export default function Description({ project }: { project: any }) {
  if (!project.description) {
    return;
  }
  return (
    <div className="description-container">
      <div
        className="description-content"
        dangerouslySetInnerHTML={{
          __html: he.decode(project.description),
        }}
      ></div>
    </div>
  );
}
