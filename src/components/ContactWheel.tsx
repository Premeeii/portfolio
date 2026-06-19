"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Copy } from "lucide-react";
import type { ContactItem } from "@/lib/contacts";

/* --- SVG arc math --- */

function toCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

function arcSegmentPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startDeg: number,
  endDeg: number
) {
  const oStart = toCartesian(cx, cy, outerR, startDeg);
  const oEnd = toCartesian(cx, cy, outerR, endDeg);
  const iStart = toCartesian(cx, cy, innerR, startDeg);
  const iEnd = toCartesian(cx, cy, innerR, endDeg);
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;

  return [
    `M ${oStart.x} ${oStart.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${oEnd.x} ${oEnd.y}`,
    `L ${iEnd.x} ${iEnd.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${iStart.x} ${iStart.y}`,
    "Z",
  ].join(" ");
}

/* --- Brand icon SVG components --- */

function InstagramIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/* --- Icon map --- */

type IconComponentType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

const ICON_MAP: Record<string, IconComponentType> = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  phone: Phone,
  mail: Mail,
};

/* --- Component --- */

interface ContactWheelProps {
  contacts: ContactItem[];
}

export default function ContactWheel({ contacts }: ContactWheelProps) {
  const [displayLines, setDisplayLines] = useState(["KITTAPAS", "CHOCKTANATORN"]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  /* Vertical arc: center near left of SVG, arc curves right, concave faces left */
  const cx = 40;
  const cy = 400;
  const outerR = 370;
  const innerR = 215;
  const gapDeg = 2.5;
  const totalArc = 180;
  const segmentArc = totalArc / contacts.length;

  const handleClick = useCallback(
    (contact: ContactItem) => {
      if (contact.type === "link") {
        window.open(contact.value, "_blank", "noopener,noreferrer");
      } else {
        if (activeId === contact.id) {
          setDisplayLines(["KITTAPAS", "CHOCKTANATORN"]);
          setActiveId(null);
          setActiveValue(null);
        } else {
          setDisplayLines([contact.value]);
          setActiveId(contact.id);
          setActiveValue(contact.value);
        }
        setCopied(false);
      }
    },
    [activeId]
  );

  const handleCopy = useCallback(async () => {
    if (!activeValue) return;
    try {
      await navigator.clipboard.writeText(activeValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }, [activeValue]);

  return (
    <div className="flex min-h-[calc(100dvh-65px)] items-center justify-center overflow-hidden px-6">
      <div className="flex w-full max-w-5xl items-center justify-center gap-0">
        {/* Text - centered */}
        <div className="relative z-10 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayLines.join("-")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {displayLines.map((line, i) => (
                <motion.h1
                  key={i}
                  className="font-jetbrains text-3xl font-bold leading-tight tracking-tight text-muted sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {line}
                </motion.h1>
              ))}

              {/* Copy button for text contacts */}
              {activeValue && (
                <motion.button
                  type="button"
                  onClick={handleCopy}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mt-6 inline-flex items-center gap-2 border border-accent/40 px-5 py-2.5 font-jetbrains text-xs font-medium tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10"
                >
                  {copied ? "COPIED!" : "COPY"}
                  <Copy size={14} className={copied ? "text-muted" : ""} />
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Contact List */}
          <div className="mt-12 flex flex-col gap-6 lg:hidden">
            {contacts.map((contact, i) => {
              const IconComponent = ICON_MAP[contact.iconName];
              const isLink = contact.type === "link";
              
              const content = (
                <>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-accent">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex flex-col items-start overflow-hidden">
                    <span className="font-jetbrains text-[10px] tracking-widest text-muted">
                      {contact.label.toUpperCase()}
                    </span>
                    <span className="truncate font-jetbrains text-sm text-accent mt-1 max-w-[250px] sm:max-w-[400px]">
                      {contact.type === "link" 
                        ? contact.value.replace(/^https?:\/\/(www\.)?/, '') 
                        : contact.value}
                    </span>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  {isLink ? (
                    <a
                      href={contact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center gap-4 transition-transform hover:translate-x-2"
                    >
                      {content}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(contact.value);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="flex w-full items-center gap-4 text-left transition-transform hover:translate-x-2"
                    >
                      {content}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Wheel */}
        <div className="hidden shrink-0 lg:block">
          <svg
            viewBox="0 0 420 800"
            className="h-[calc(100dvh-120px)] w-auto"
            aria-label="Contact wheel"
            role="img"
          >
            {contacts.map((contact, i) => {
              const startDeg = 90 - i * segmentArc - gapDeg / 2;
              const endDeg = 90 - (i + 1) * segmentArc + gapDeg / 2;
              const midDeg = (startDeg + endDeg) / 2;
              const midR = (innerR + outerR) / 2;
              const iconPos = toCartesian(cx, cy, midR, midDeg);
              const isActive = activeId === contact.id;
              const isHovered = hoveredId === contact.id;
              const IconComponent = ICON_MAP[contact.iconName];

              return (
                <g key={contact.id}>
                  {/* Segment */}
                  <motion.path
                    d={arcSegmentPath(
                      cx,
                      cy,
                      innerR,
                      outerR,
                      startDeg,
                      endDeg
                    )}
                    className="cursor-pointer"
                    fill={
                      isActive
                        ? "#FCECD3"
                        : isHovered
                          ? "#4a5060"
                          : "#393e46"
                    }
                    stroke="#0E141C"
                    strokeWidth={2.5}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                    onClick={() => handleClick(contact)}
                    onMouseEnter={() => setHoveredId(contact.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  />

                  {/* Icon */}
                  <foreignObject
                    x={iconPos.x - 14}
                    y={iconPos.y - 14}
                    width={28}
                    height={28}
                    className="pointer-events-none"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <IconComponent
                        size={18}
                        className={
                          isActive ? "text-background" : "text-accent"
                        }
                      />
                    </motion.div>
                  </foreignObject>

                  {/* Label */}
                  <motion.text
                    x={iconPos.x}
                    y={iconPos.y + 22}
                    textAnchor="middle"
                    className="pointer-events-none select-none font-jetbrains text-[9px] tracking-widest"
                    fill={isActive ? "#0E141C" : "#CEC5BA"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    {contact.label.toUpperCase()}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
