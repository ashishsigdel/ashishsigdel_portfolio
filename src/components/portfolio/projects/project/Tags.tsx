import React from "react";

type Props = {
  tags: string | undefined;
};

export default function Tags({ tags }: Props) {
  return (
    <>
      {tags &&
        tags.split(",").map((tag: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-md bg-portfolio-primary/20 border border-portfolio-primary/30 text-portfolio-primary h-fit"
          >
            {tag}
          </span>
        ))}
    </>
  );
}
