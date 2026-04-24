"use client";

import React from "react";

export default function YoloCauliflowerCard() {
  const cssStyles = `
    @keyframes scanDown {
      0% { transform: translateY(0px); opacity: 0; }
      5% { opacity: 1; }
      90% { opacity: 0.7; }
      100% { transform: translateY(148px); opacity: 0; }
    }
    @keyframes labelFade {
      0% { opacity: 0; transform: translateX(-4px); }
      15% { opacity: 1; transform: translateX(0); }
      80% { opacity: 1; }
      100% { opacity: 0; }
    }
    @keyframes dotPulse {
      0%, 100% { opacity: 0.05; }
      50% { opacity: 0.16; }
    }
    @keyframes bracketGlow {
      0%, 100% { opacity: 0.35; }
      50% { opacity: 0.6; }
    }
    .yolo-card { transition: border-color 0.5s ease, background 0.5s ease; }
    .yolo-card:hover { border-color: #3f3f46 !important; }
    .yolo-card:hover .right-panel { background: #060608 !important; }
    .yolo-card:hover .detect-box { border-color: #2e2e32 !important; }
    .yolo-card:hover .stat-cell { border-color: #27272a !important; background: #111113 !important; }
    .yolo-card:hover .stat-val { color: #71717a !important; }
    .yolo-card:hover .bracket-path { animation: bracketGlow 2s ease-in-out infinite; stroke: rgba(255,255,255,0.7) !important; }
    .yolo-card:hover .dot-grid circle { animation: dotPulse 3s ease-in-out infinite; }
    .yolo-card:hover .scan-line { display: block !important; }
    .yolo-card:hover .class-label { display: block !important; }
    .yolo-card:hover .confidence-bar { display: block !important; }
    .yolo-card:hover .cluster-circle { stroke: rgba(255,255,255,0.18) !important; }
    .yolo-card:hover .center-dot { fill: rgba(255,255,255,0.55) !important; }
    .yolo-card:hover .cta-btn:hover { background: #e4e4e7 !important; }
    .dot-grid circle:nth-child(2n) { animation-delay: 0.5s; }
    .dot-grid circle:nth-child(3n) { animation-delay: 1s; }
    .dot-grid circle:nth-child(5n) { animation-delay: 1.5s; }
    .scan-line { display: none; animation: scanDown 2.2s ease-in-out infinite; }
    .class-label { display: none; animation: labelFade 1.8s ease-in-out infinite; }
    .confidence-bar { display: none; }

    @media (max-width: 1024px) {
      .yolo-card {
        grid-template-columns: 1fr !important;
      }
      .left-panel {
        padding: 28px !important;
      }
      .right-panel {
        border-left: 0 !important;
        border-top: 1px solid #18181a !important;
        padding: 20px !important;
      }
    }

    @media (max-width: 640px) {
      .left-panel {
        padding: 22px !important;
      }
      .left-head {
        gap: 12px !important;
      }
      .left-title {
        font-size: 22px !important;
      }
      .left-copy {
        font-size: 13px !important;
        max-width: 100% !important;
      }
      .stats-grid {
        gap: 6px !important;
      }
    }
  `;

  return (
    <div
      style={{
        width: "100%",
        padding: 0,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <div
        className="yolo-card"
        style={{
          width: "100%",
          borderRadius: "22px",
          border: "1px solid #27272a",
          background: "#09090b",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          minHeight: "340px",
        }}
      >
        {/* LEFT PANEL */}
        <div
          className="left-panel"
          style={{
            padding: "44px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-56px",
              top: "32px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.025)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          ></div>

          {/* Icon + Heading */}
          <div
            className="left-head"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "18px",
              marginBottom: "24px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: "14px",
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: "14px",
                flexShrink: 0,
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="m9 10 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3
                className="left-title"
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 10px",
                  lineHeight: 1.25,
                  letterSpacing: "-0.025em",
                }}
              >
                YOLO Cauliflower
                <br />
                Disease Detection
              </h3>
              <p
                className="left-copy"
                style={{
                  color: "#52525b",
                  fontSize: "13.5px",
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: "380px",
                }}
              >
                Published research on early detection and localization of
                cauliflower diseases using YOLO variants and transfer learning.
                Custom 810-image dataset across 5 classes with domain-expert
                annotations — best YOLOv8s model trained over ~200 epochs.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "7px",
              marginBottom: "32px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {["810 Images", "5 Classes", "YOLOv8s", "200 Epochs"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#52525b",
                  border: "1px solid #27272a",
                  background: "#111113",
                  padding: "5px 12px",
                  borderRadius: "999px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://ieeexplore.ieee.org/document/11485071"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              background: "#fff",
              color: "#000",
              padding: "13px 26px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "13.5px",
              textDecoration: "none",
              position: "relative",
              zIndex: 1,
              transition: "background 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e4e4e7")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Read IEEE Paper
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="right-panel"
          style={{
            borderLeft: "1px solid #18181a",
            background: "#040405",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            transition: "background 0.5s ease",
          }}
        >
          <p
            style={{
              fontSize: "9px",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2e2e33",
              margin: "0 0 14px",
            }}
          >
            Model Snapshot
          </p>

          {/* Detection Viewer */}
          <div
            className="detect-box"
            style={{
              flex: 1,
              border: "1px solid #17171a",
              borderRadius: "16px",
              background: "#020203",
              overflow: "hidden",
              position: "relative",
              minHeight: "185px",
              transition: "border-color 0.5s ease",
            }}
          >
            <svg
              viewBox="0 0 240 196"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <defs>
                <clipPath id="frame-clip">
                  <rect x="38" y="18" width="164" height="150" />
                </clipPath>
              </defs>

              {/* Dot grid */}
              <g className="dot-grid">
                {[14, 40, 66, 92, 118, 144, 170, 196, 222].map((x) =>
                  [14, 40, 66, 92, 118, 144, 170].map((y) => (
                    <circle
                      key={`${x}-${y}`}
                      cx={x}
                      cy={y}
                      r="1"
                      fill="rgba(255,255,255,0.07)"
                    />
                  )),
                )}
              </g>

              {/* Cauliflower cluster (clipped to frame) */}
              <g clipPath="url(#frame-clip)">
                <circle
                  className="cluster-circle"
                  cx="120"
                  cy="93"
                  r="33"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="93"
                  cy="76"
                  r="23"
                  fill="rgba(255,255,255,0.025)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="147"
                  cy="76"
                  r="23"
                  fill="rgba(255,255,255,0.025)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="120"
                  cy="56"
                  r="19"
                  fill="rgba(255,255,255,0.02)"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="92"
                  cy="113"
                  r="20"
                  fill="rgba(255,255,255,0.02)"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="148"
                  cy="113"
                  r="20"
                  fill="rgba(255,255,255,0.02)"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="120"
                  cy="130"
                  r="18"
                  fill="rgba(255,255,255,0.02)"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="73"
                  cy="93"
                  r="16"
                  fill="rgba(255,255,255,0.015)"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />
                <circle
                  className="cluster-circle"
                  cx="167"
                  cy="93"
                  r="16"
                  fill="rgba(255,255,255,0.015)"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.6"
                  style={{ transition: "stroke 0.4s" }}
                />

                {/* Scan line */}
                <line
                  className="scan-line"
                  x1="40"
                  y1="18"
                  x2="202"
                  y2="18"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="0.8"
                />
              </g>

              {/* Center crosshair dot */}
              <circle
                className="center-dot"
                cx="120"
                cy="93"
                r="2.2"
                fill="rgba(255,255,255,0.18)"
                style={{ transition: "fill 0.4s" }}
              />

              {/* Corner brackets */}
              <path
                className="bracket-path"
                d="M38 36 L38 18 L56 18"
                fill="none"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1.6"
                strokeLinecap="round"
                style={{ transition: "stroke 0.4s" }}
              />
              <path
                className="bracket-path"
                d="M184 18 L202 18 L202 36"
                fill="none"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1.6"
                strokeLinecap="round"
                style={{ transition: "stroke 0.4s" }}
              />
              <path
                className="bracket-path"
                d="M202 150 L202 168 L184 168"
                fill="none"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1.6"
                strokeLinecap="round"
                style={{ transition: "stroke 0.4s" }}
              />
              <path
                className="bracket-path"
                d="M56 168 L38 168 L38 150"
                fill="none"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1.6"
                strokeLinecap="round"
                style={{ transition: "stroke 0.4s" }}
              />

              {/* Class label (shown on hover) */}
              <g className="class-label">
                <rect
                  x="38"
                  y="4"
                  width="64"
                  height="13"
                  rx="3"
                  fill="rgba(255,255,255,0.1)"
                />
                <text
                  x="43"
                  y="14"
                  fontSize="8"
                  fill="rgba(255,255,255,0.65)"
                  fontFamily="'Courier New', monospace"
                >
                  Black Rot 0.72
                </text>
              </g>

              {/* Confidence bar (shown on hover) */}
              <g className="confidence-bar">
                <rect
                  x="38"
                  y="174"
                  width="164"
                  height="2.5"
                  rx="1.5"
                  fill="rgba(255,255,255,0.07)"
                />
                <rect
                  x="38"
                  y="174"
                  width="118"
                  height="2.5"
                  rx="1.5"
                  fill="rgba(255,255,255,0.3)"
                />
                <text
                  x="38"
                  y="184"
                  fontSize="7.5"
                  fill="rgba(255,255,255,0.28)"
                  fontFamily="'Courier New', monospace"
                >
                  CONF
                </text>
                <text
                  x="170"
                  y="184"
                  fontSize="7.5"
                  fill="rgba(255,255,255,0.28)"
                  fontFamily="'Courier New', monospace"
                >
                  72%
                </text>
              </g>
            </svg>
          </div>

          {/* Stats */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "7px",
              marginTop: "10px",
            }}
          >
            {[
              { label: "P", value: "34.43%" },
              { label: "R", value: "31.94%" },
              { label: "mAP50", value: "28.15%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="stat-cell"
                style={{
                  border: "1px solid #17171a",
                  background: "#0a0a0c",
                  borderRadius: "10px",
                  padding: "8px 6px",
                  textAlign: "center",
                  transition: "all 0.4s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "8.5px",
                    fontFamily: "'Courier New', monospace",
                    color: "#2e2e33",
                    letterSpacing: "0.1em",
                    marginBottom: "3px",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  className="stat-val"
                  style={{
                    fontSize: "11px",
                    fontFamily: "'Courier New', monospace",
                    color: "#3f3f46",
                    transition: "color 0.4s",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
