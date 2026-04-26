"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Atom,
  Bot,
  Boxes,
  Braces,
  Cloud,
  Container,
  Database,
  FlaskConical,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
  Link,
  Paintbrush,
  Rocket,
  Search,
  Server,
  Sparkles,
  UserRound,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Rect = { x: number; y: number; w: number; h: number };

type Layout = {
  width: number;
  height: number;
  minWidth: number;
  boxes: Record<string, Rect>;
};

type TechItem = {
  key: string;
  label: string;
};

const dark = {
  panel: "#0b0d12",
  panelSoft: "#0a0b10",
  line: "#6b7280",
  border: "#44506a",
  textSoft: "#cbd5e1",
};

const FRONTEND_ITEMS: TechItem[] = [
  { key: "react", label: "React" },
  { key: "vite", label: "Vite" },
  { key: "nextjs", label: "Next.js" },
  { key: "tailwind", label: "Tailwind" },
  { key: "shadcn", label: "shadcn/ui" },
];

const STATE_ITEMS: TechItem[] = [
  { key: "redux", label: "Redux" },
  { key: "query", label: "React Query" },
];

const MOTION_ITEMS: TechItem[] = [
  { key: "framer", label: "Framer Motion" },
  { key: "gsap", label: "GSAP" },
];

const STYLE_ITEMS: TechItem[] = [
  { key: "tailwind", label: "Tailwind" },
  { key: "css", label: "CSS3" },
  { key: "scss", label: "SCSS" },
];

const BACKEND_ITEMS: TechItem[] = [
  { key: "node", label: "Node.js" },
  { key: "fastapi", label: "FastAPI" },
  { key: "flask", label: "Flask" },
  { key: "express", label: "Express" },
];

const DB_ITEMS: TechItem[] = [
  { key: "mysql", label: "MySQL" },
  { key: "postgres", label: "PostgreSQL" },
  { key: "mongo", label: "MongoDB" },
  { key: "redis", label: "Redis" },
];

const INFRA_ITEMS: TechItem[] = [
  { key: "aws", label: "AWS" },
  { key: "docker", label: "Docker" },
  { key: "gha", label: "GitHub Actions" },
  { key: "cicd", label: "CI/CD" },
];

const ML_ITEMS: TechItem[] = [
  { key: "pytorch", label: "PyTorch" },
  { key: "transformers", label: "Transformers" },
  { key: "llm", label: "LLM" },
];

const ORCH_ITEMS: TechItem[] = [
  { key: "langchain", label: "LangChain" },
  { key: "llamaindex", label: "LlamaIndex" },
  { key: "pinecone", label: "Pinecone" },
];

const MODELS_ITEMS: TechItem[] = [
  { key: "openai", label: "OpenAI" },
  { key: "claude", label: "Claude" },
];

const iconByKey: Record<string, LucideIcon> = {
  react: Atom,
  vite: Sparkles,
  nextjs: Globe,
  tailwind: Wind,
  shadcn: Boxes,
  redux: GitBranch,
  query: Search,
  framer: Sparkles,
  gsap: Activity,
  css: Paintbrush,
  scss: Paintbrush,
  node: Server,
  fastapi: Rocket,
  flask: FlaskConical,
  express: Braces,
  mysql: Database,
  postgres: Database,
  mongo: Database,
  redis: Database,
  aws: Cloud,
  docker: Container,
  gha: GitBranch,
  cicd: Link,
  pytorch: Bot,
  transformers: Layers,
  llm: Sparkles,
  langchain: Link,
  llamaindex: Boxes,
  pinecone: Database,
  openai: Bot,
  claude: Sparkles,
};

function anchor(r: Rect, side: "left" | "right" | "top" | "bottom") {
  if (side === "left") return { x: r.x, y: r.y + r.h / 2 };
  if (side === "right") return { x: r.x + r.w, y: r.y + r.h / 2 };
  if (side === "top") return { x: r.x + r.w / 2, y: r.y };
  return { x: r.x + r.w / 2, y: r.y + r.h };
}

function cubic(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = Math.abs(dx) > Math.abs(dy) ? 0.42 : 0.38;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return `M ${a.x} ${a.y} C ${a.x + dx * t} ${a.y} ${b.x - dx * t} ${b.y} ${b.x} ${b.y}`;
  }
  return `M ${a.x} ${a.y} C ${a.x} ${a.y + dy * t} ${b.x} ${b.y - dy * t} ${b.x} ${b.y}`;
}

function FlowStroke({ d, index }: { d: string; index: number }) {
  const dur = 2.7 + (index % 4) * 0.25;
  const delay = (index * 0.29) % 2;

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={dark.line}
        strokeOpacity={0.48}
        strokeWidth={3.6}
        strokeLinecap="round"
      />
      <path
        d={d}
        fill="none"
        stroke="#f8fafc"
        strokeOpacity={0.95}
        strokeWidth={2.4}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="8 92"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-100"
          dur={`${dur}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </path>
    </g>
  );
}

function SegmentedIconBlock({
  box,
  items,
  direction,
}: {
  box: Rect;
  items: TechItem[];
  direction: "vertical" | "horizontal";
}) {
  const isVertical = direction === "vertical";
  const segmentMain = isVertical ? box.h / items.length : box.w / items.length;

  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={isVertical ? 28 : 20}
        fill={dark.panelSoft}
        stroke={dark.border}
        strokeWidth={1.4}
      />

      {items.map((item, idx) => {
        const Icon = iconByKey[item.key] ?? Boxes;
        const cx =
          direction === "vertical"
            ? box.x + box.w / 2
            : box.x + idx * segmentMain + segmentMain / 2;
        const cy =
          direction === "vertical"
            ? box.y + idx * segmentMain + segmentMain / 2
            : box.y + box.h / 2;

        return (
          <g key={item.label}>
            {idx !== 0 &&
              (isVertical ? (
                <line
                  x1={box.x}
                  y1={box.y + idx * segmentMain}
                  x2={box.x + box.w}
                  y2={box.y + idx * segmentMain}
                  stroke={dark.border}
                  strokeWidth={1.1}
                />
              ) : (
                <line
                  x1={box.x + idx * segmentMain}
                  y1={box.y}
                  x2={box.x + idx * segmentMain}
                  y2={box.y + box.h}
                  stroke={dark.border}
                  strokeWidth={1.1}
                />
              ))}
            <g transform={`translate(${cx - 11},${cy - 11})`}>
              <Icon size={22} color={dark.textSoft} strokeWidth={1.9} />
            </g>
          </g>
        );
      })}
    </g>
  );
}

function UserGlyph({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <g transform="translate(-14,-14)">
        <UserRound size={28} color={dark.textSoft} strokeWidth={1.9} />
      </g>
    </g>
  );
}

function PathKeyGlyph({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <g transform="translate(-12,-12)">
        <KeyRound size={24} color={dark.textSoft} strokeWidth={1.9} />
      </g>
    </g>
  );
}

function getDesktopLayout(): Layout {
  return {
    width: 1460,
    height: 760,
    minWidth: 1180,
    boxes: {
      frontend: { x: 280, y: 170, w: 66, h: 330 },
      state: { x: 206, y: 92, w: 214, h: 56 },
      motion: { x: 176, y: 558, w: 174, h: 56 },
      style: { x: 366, y: 558, w: 252, h: 56 },
      backend: { x: 646, y: 170, w: 66, h: 264 },
      db: { x: 560, y: 86, w: 236, h: 56 },
      infra: { x: 542, y: 558, w: 268, h: 56 },
      ml: { x: 994, y: 200, w: 66, h: 198 },
      orchestration: { x: 902, y: 48, w: 250, h: 56 },
      models: { x: 932, y: 558, w: 190, h: 56 },
    },
  };
}

function getMobileLayout(): Layout {
  return {
    width: 980,
    height: 1760,
    minWidth: 0,
    boxes: {
      frontend: { x: 430, y: 230, w: 72, h: 352 },
      state: { x: 288, y: 120, w: 356, h: 72 },
      motion: { x: 154, y: 694, w: 324, h: 72 },
      style: { x: 516, y: 694, w: 330, h: 72 },
      backend: { x: 430, y: 850, w: 72, h: 282 },
      db: { x: 272, y: 748, w: 392, h: 72 },
      infra: { x: 220, y: 1240, w: 500, h: 72 },
      ml: { x: 794, y: 900, w: 72, h: 212 },
      orchestration: { x: 620, y: 784, w: 340, h: 72 },
      models: { x: 688, y: 1240, w: 248, h: 72 },
    },
  };
}

function buildEdges(layout: Layout) {
  const b = layout.boxes;
  const user = layout.width > 1000 ? { x: 96, y: 334 } : { x: 124, y: 406 };

  const frontRight = anchor(b.frontend, "right");
  const backLeft = anchor(b.backend, "left");
  const key = {
    x: (frontRight.x + backLeft.x) / 2,
    y: (frontRight.y + backLeft.y) / 2 - 26,
  };

  const lines: string[] = [];
  lines.push(cubic({ x: user.x + 22, y: user.y }, anchor(b.frontend, "left")));
  lines.push(
    cubic({ x: user.x + 18, y: user.y - 30 }, anchor(b.state, "left")),
  );
  lines.push(
    cubic({ x: user.x + 18, y: user.y + 30 }, anchor(b.motion, "left")),
  );

  lines.push(cubic(anchor(b.frontend, "top"), anchor(b.state, "bottom")));
  lines.push(cubic(anchor(b.frontend, "bottom"), anchor(b.motion, "top")));
  lines.push(cubic(anchor(b.frontend, "bottom"), anchor(b.style, "top")));

  lines.push(cubic(frontRight, backLeft));
  lines.push(cubic(anchor(b.backend, "top"), anchor(b.db, "bottom")));
  lines.push(cubic(anchor(b.backend, "bottom"), anchor(b.infra, "top")));
  lines.push(cubic(anchor(b.backend, "right"), anchor(b.ml, "left")));

  lines.push(cubic(anchor(b.ml, "top"), anchor(b.orchestration, "bottom")));
  lines.push(cubic(anchor(b.ml, "bottom"), anchor(b.models, "top")));

  return { lines, user, key };
}

export default function SkillsTree() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 980);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const layout = useMemo(
    () => (isMobile ? getMobileLayout() : getDesktopLayout()),
    [isMobile],
  );
  const { lines, user, key } = useMemo(() => buildEdges(layout), [layout]);
  const b = layout.boxes;

  return (
    <div
      style={{
        width: "100%",
        overflowX: isMobile ? "hidden" : "auto",
        overflowY: "hidden",
        background: "transparent",
      }}
    >
      <svg
        width="100%"
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        style={{
          display: "block",
          minWidth: layout.minWidth || undefined,
          height: isMobile ? "auto" : 760,
          maxHeight: isMobile ? "none" : 760,
        }}
        aria-label="Skills architecture"
      >
        {lines.map((d, i) => (
          <FlowStroke key={`line-${i}`} d={d} index={i} />
        ))}

        <UserGlyph x={user.x} y={user.y} />
        <PathKeyGlyph x={key.x} y={key.y} />

        <SegmentedIconBlock
          box={b.frontend}
          items={FRONTEND_ITEMS}
          direction="vertical"
        />
        <SegmentedIconBlock
          box={b.state}
          items={STATE_ITEMS}
          direction="horizontal"
        />
        <SegmentedIconBlock
          box={b.motion}
          items={MOTION_ITEMS}
          direction="horizontal"
        />
        <SegmentedIconBlock
          box={b.style}
          items={STYLE_ITEMS}
          direction="horizontal"
        />

        <SegmentedIconBlock
          box={b.backend}
          items={BACKEND_ITEMS}
          direction="vertical"
        />
        <SegmentedIconBlock
          box={b.db}
          items={DB_ITEMS}
          direction="horizontal"
        />
        <SegmentedIconBlock
          box={b.infra}
          items={INFRA_ITEMS}
          direction="horizontal"
        />

        <SegmentedIconBlock box={b.ml} items={ML_ITEMS} direction="vertical" />
        <SegmentedIconBlock
          box={b.orchestration}
          items={ORCH_ITEMS}
          direction="horizontal"
        />
        <SegmentedIconBlock
          box={b.models}
          items={MODELS_ITEMS}
          direction="horizontal"
        />
      </svg>
    </div>
  );
}
