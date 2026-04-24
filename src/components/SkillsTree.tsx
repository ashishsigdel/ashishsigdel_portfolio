"use client";

import { useEffect, useMemo, useState } from "react";
import { KeyRound, UserRound } from "lucide-react";

type Rect = { x: number; y: number; w: number; h: number };

type Layout = {
  width: number;
  height: number;
  minWidth: number;
  boxes: Record<string, Rect>;
};

const FRONTEND_LINES = ["REACT", "NEXTJS", "TYPESCRIPT", "HTML5"];
const MOTION_LINES = ["FRAMER", "MOTION", "GSAP"];
const BACKEND_LINES = ["NODEJS", "FASTAPI", "FLASK", "EXPRESS.JS"];
const ML_LINES = ["PYTORCH", "TRANSFORMERS", "LLM"];

const dark = {
  panel: "#101014",
  panelSoft: "#0d0d11",
  line: "#6b7280",
  border: "#4b5563",
  text: "#e5e7eb",
  textSoft: "#cbd5e1",
};

function fitMainBlock(x: number, y: number, lines: string[]): Rect {
  const maxLen = Math.max(...lines.map((line) => line.length));
  const w = Math.max(140, Math.round(maxLen * 13 + 44));
  const h = Math.round(lines.length * 38 + 28);
  return { x, y, w, h };
}

function center(r: Rect) {
  return { x: r.x + r.w / 2, y: r.y + r.h / 2 };
}

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
  const dur = 2.6 + (index % 5) * 0.28;
  const delay = (index * 0.31) % 2.3;

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={dark.line}
        strokeOpacity={0.46}
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

function PillGroup({
  box,
  title,
  items,
}: {
  box: Rect;
  title?: string;
  items: string[];
}) {
  const pad = 14;
  const titleH = title ? 22 : 2;
  const innerY = box.y + pad + titleH;
  const avail = box.h - pad * 2 - titleH;
  const gap = 10;
  const pillH = (avail - gap * (items.length - 1)) / items.length;

  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={14}
        fill={dark.panelSoft}
        stroke={dark.border}
        strokeWidth={1.4}
      />
      {title && (
        <text
          x={box.x + box.w / 2}
          y={box.y + 20}
          textAnchor="middle"
          fill={dark.text}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize={11}
          fontWeight={700}
          letterSpacing="0.08em"
        >
          {title}
        </text>
      )}
      {items.map((item, idx) => {
        const y = innerY + idx * (pillH + gap);
        const compact = item.length > 18;
        const multiline = item.includes(" (") && item.length > 24;
        const [l1, l2] = multiline ? item.split(" (") : [item, ""];
        return (
          <g key={item}>
            <rect
              x={box.x + 16}
              y={y}
              width={box.w - 32}
              height={pillH}
              rx={pillH / 2}
              fill={dark.panel}
              stroke={dark.border}
              strokeWidth={1.2}
            />
            <text
              x={box.x + box.w / 2}
              y={y + pillH / 2 + (multiline ? -1 : 4)}
              textAnchor="middle"
              fill={dark.text}
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontSize={compact ? 10 : 11}
              fontWeight={700}
              letterSpacing="0.03em"
            >
              {multiline ? (
                <>
                  <tspan x={box.x + box.w / 2} dy={0}>
                    {l1}
                  </tspan>
                  <tspan x={box.x + box.w / 2} dy={11}>
                    ({l2}
                  </tspan>
                </>
              ) : (
                item
              )}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function MainBlock({ box, lines }: { box: Rect; lines: string[] }) {
  const inset = 12;
  const innerH = box.h - inset * 2;
  const rowH = innerH / lines.length;

  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={8}
        fill={dark.panel}
        stroke={dark.border}
        strokeWidth={1.4}
      />
      {lines.map((_, i) => {
        if (i === 0) return null;
        const y = box.y + inset + i * rowH;
        return (
          <line
            key={`sep-${i}`}
            x1={box.x}
            y1={y}
            x2={box.x + box.w}
            y2={y}
            stroke={dark.border}
            strokeWidth={1.1}
          />
        );
      })}
      {lines.map((line, i) => (
        <text
          key={line}
          x={box.x + box.w / 2}
          y={box.y + inset + i * rowH + rowH / 2 + 5}
          textAnchor="middle"
          fill={dark.text}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize={17}
          fontWeight={700}
          letterSpacing="0.02em"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function SplitGroup({
  box,
  leftTitle,
  leftItems,
  rightItems,
}: {
  box: Rect;
  leftTitle: string;
  leftItems: string[];
  rightItems: string[];
}) {
  const left: Rect = {
    x: box.x + 14,
    y: box.y + 14,
    w: box.w * 0.44,
    h: box.h - 28,
  };
  const right: Rect = {
    x: box.x + box.w * 0.53,
    y: box.y + 18,
    w: box.w * 0.42,
    h: box.h - 36,
  };

  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={14}
        fill={dark.panelSoft}
        stroke={dark.border}
        strokeWidth={1.4}
      />
      <PillGroup box={left} title={leftTitle} items={leftItems} />
      <PillGroup box={right} items={rightItems} />
    </g>
  );
}

function CircleGroup({ box, items }: { box: Rect; items: string[] }) {
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h / 2;
  const r = box.w / 2;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={dark.panelSoft}
        stroke={dark.border}
        strokeWidth={1.4}
      />
      {items.map((item, i) => (
        <g key={item}>
          {i !== 0 && (
            <line
              x1={box.x + 14}
              y1={box.y + (box.h / 3) * i}
              x2={box.x + box.w - 14}
              y2={box.y + (box.h / 3) * i}
              stroke={dark.border}
              strokeWidth={1.1}
            />
          )}
          <text
            x={cx}
            y={box.y + box.h / 6 + i * (box.h / 3) + 6}
            textAnchor="middle"
            fill={dark.text}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize={15}
            fontWeight={700}
            letterSpacing="0.03em"
          >
            {item}
          </text>
        </g>
      ))}
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
    width: 1560,
    height: 700,
    minWidth: 1280,
    boxes: {
      frontend: fitMainBlock(316, 244, FRONTEND_LINES),
      state: { x: 324, y: 62, w: 176, h: 126 },
      motion: fitMainBlock(154, 476, MOTION_LINES),
      style: { x: 327, y: 514, w: 158, h: 158 },
      backend: fitMainBlock(664, 244, BACKEND_LINES),
      db: { x: 662, y: 26, w: 192, h: 206 },
      infra: { x: 606, y: 530, w: 314, h: 170 },
      ml: fitMainBlock(1038, 244, ML_LINES),
      orchestration: { x: 982, y: 10, w: 346, h: 170 },
      models: { x: 1060, y: 508, w: 228, h: 146 },
    },
  };
}

function getMobileLayout(): Layout {
  return {
    width: 980,
    height: 1920,
    minWidth: 0,
    boxes: {
      frontend: fitMainBlock(336, 258, FRONTEND_LINES),
      state: { x: 92, y: 140, w: 210, h: 154 },
      motion: fitMainBlock(92, 556, MOTION_LINES),
      style: { x: 352, y: 558, w: 220, h: 220 },
      backend: fitMainBlock(336, 884, BACKEND_LINES),
      db: { x: 82, y: 792, w: 222, h: 252 },
      infra: { x: 94, y: 1194, w: 564, h: 246 },
      ml: fitMainBlock(342, 1556, ML_LINES),
      orchestration: { x: 668, y: 1458, w: 288, h: 270 },
      models: { x: 94, y: 1570, w: 226, h: 178 },
    },
  };
}

function getPillCenter(box: Rect, idx: number, count: number, title = false) {
  const pad = 14;
  const titleH = title ? 22 : 2;
  const innerY = box.y + pad + titleH;
  const avail = box.h - pad * 2 - titleH;
  const gap = 10;
  const pillH = (avail - gap * (count - 1)) / count;
  return { x: box.x + box.w / 2, y: innerY + idx * (pillH + gap) + pillH / 2 };
}

function buildEdges(layout: Layout) {
  const b = layout.boxes;
  const frontend = b.frontend;
  const state = b.state;
  const motion = b.motion;
  const style = b.style;
  const backend = b.backend;
  const db = b.db;
  const infra = b.infra;
  const ml = b.ml;
  const orchestration = b.orchestration;
  const models = b.models;

  const user = layout.width > 1000 ? { x: 56, y: 340 } : { x: 428, y: 106 };
  const frontRight = anchor(frontend, "right");
  const backLeft = anchor(backend, "left");
  const key = {
    x: (frontRight.x + backLeft.x) / 2,
    y: (frontRight.y + backLeft.y) / 2 - 28,
  };

  const lines: string[] = [];
  lines.push(cubic({ x: user.x + 22, y: user.y }, anchor(frontend, "left")));
  lines.push(cubic({ x: user.x + 18, y: user.y - 30 }, anchor(state, "left")));
  lines.push(cubic({ x: user.x + 18, y: user.y + 30 }, anchor(motion, "left")));

  lines.push(cubic(anchor(frontend, "top"), anchor(state, "bottom")));
  lines.push(cubic(anchor(frontend, "left"), anchor(motion, "top")));
  lines.push(cubic(anchor(frontend, "bottom"), anchor(style, "top")));

  lines.push(cubic(frontRight, backLeft));

  lines.push(cubic(anchor(backend, "top"), anchor(db, "bottom")));
  const dbHub = { x: anchor(db, "bottom").x, y: anchor(db, "bottom").y - 10 };
  [0, 1, 2, 3].forEach((idx) => {
    const p = getPillCenter(db, idx, 4);
    lines.push(cubic(dbHub, { x: db.x + 18, y: p.y }));
  });

  lines.push(cubic(anchor(backend, "bottom"), anchor(infra, "top")));
  const infraSplit = { x: infra.x + infra.w * 0.56, y: infra.y + infra.h / 2 };
  [0, 1, 2].forEach((idx) => {
    const right = {
      x: infra.x + infra.w * 0.74,
      y: infra.y + 40 + idx * 56,
    };
    lines.push(cubic(infraSplit, right));
  });

  lines.push(cubic(anchor(backend, "right"), anchor(ml, "left")));

  lines.push(cubic(anchor(ml, "top"), anchor(orchestration, "bottom")));
  [0, 1, 2].forEach((idx) => {
    const p = getPillCenter(orchestration, idx, 3, true);
    lines.push(
      cubic(
        { x: orchestration.x, y: center(orchestration).y },
        { x: orchestration.x + 18, y: p.y },
      ),
    );
  });

  lines.push(cubic(anchor(ml, "bottom"), anchor(models, "top")));

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
        border: "none",
        borderRadius: 0,
      }}
    >
      <svg
        width="100%"
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        style={{
          display: "block",
          minWidth: layout.minWidth || undefined,
          height: isMobile ? "auto" : 700,
          maxHeight: isMobile ? "none" : 700,
        }}
        aria-label="Skills architecture"
      >
        {lines.map((d, i) => (
          <FlowStroke key={`line-${i}`} d={d} index={i} />
        ))}

        <UserGlyph x={user.x} y={user.y} />
        <PathKeyGlyph x={key.x} y={key.y} />

        <MainBlock box={b.frontend} lines={FRONTEND_LINES} />
        <PillGroup box={b.state} items={["REDUX", "REACT QUERY"]} />
        <MainBlock box={b.motion} lines={MOTION_LINES} />
        <CircleGroup box={b.style} items={["TAILWIND", "CSS3", "SCSS"]} />

        <MainBlock box={b.backend} lines={BACKEND_LINES} />
        <PillGroup
          box={b.db}
          items={["MYSQL", "POSTGRESQL", "MONGODB", "REDIS"]}
        />
        <SplitGroup
          box={b.infra}
          leftTitle="AWS"
          leftItems={["S3", "EC2", "BEDROCK"]}
          rightItems={["DOCKER", "GITHUB ACTIONS", "CI/CD"]}
        />

        <MainBlock box={b.ml} lines={ML_LINES} />
        <PillGroup
          box={b.orchestration}
          title="AGENTIC & ORCHESTRATION"
          items={["LANGCHAIN", "LLAMAINDEX", "VECTOR DATABASE (PINECONE)"]}
        />
        <PillGroup
          box={b.models}
          title="MODELS & APIS"
          items={["OPENAI API", "CLAUDE API"]}
        />
      </svg>
    </div>
  );
}
