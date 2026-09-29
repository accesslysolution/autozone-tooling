"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
  The one animated moment on the site: an engineering-drawing cross-section
  of a punch air-bending a sheet into a V-die. Plays once on load.
*/

const FLAT = "M 40 204 L 200 204 L 360 204";
const BENT = "M 75 150 L 200 250 L 325 150";

const PUNCH_START = 70;
const PUNCH_TOUCH = 200;
const PUNCH_END = 246;

export default function BendHero() {
  const reduce = useReducedMotion();
  const duration = 1.8;
  const times = [0, 0.4, 1];

  return (
    <svg viewBox="0 0 400 360" className="h-auto w-full" role="img" aria-labelledby="bend-title bend-desc">
      <title id="bend-title">Punch bending a sheet into a V-die</title>
      <desc id="bend-desc">
        Cross-section drawing: the punch presses the sheet into the V-opening of the die to form the bend.
      </desc>

      <defs>
        <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </pattern>
      </defs>

      {/* centre line */}
      <line x1="200" y1="0" x2="200" y2="352" stroke="currentColor" strokeWidth="0.75" strokeDasharray="10 4 2 4" opacity="0.35" />

      {/* die block with V-opening */}
      <path
        d="M 60 208 L 140 208 L 200 262 L 260 208 L 340 208 L 340 330 L 60 330 Z"
        fill="url(#hatch)"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-steel"
      />

      {/* sheet */}
      <motion.path
        d={reduce ? BENT : FLAT}
        animate={reduce ? undefined : { d: [FLAT, FLAT, BENT] }}
        transition={{ duration, times, delay: 0.4, ease: "easeInOut" }}
        fill="none"
        stroke="var(--color-straw)"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="square"
      />

      {/* punch */}
      <motion.g
        initial={{ y: reduce ? PUNCH_END : PUNCH_START }}
        animate={reduce ? undefined : { y: [PUNCH_START, PUNCH_TOUCH - 4, PUNCH_END] }}
        transition={{ duration, times, delay: 0.4, ease: "easeInOut" }}
      >
        <path
          d="M 200 0 L 172 -44 L 180 -44 L 180 -200 L 220 -200 L 220 -44 L 228 -44 Z"
          fill="var(--color-oxide-2)"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-steel"
        />
      </motion.g>

      {/* annotations appear once the bend is formed */}
      <motion.g
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 2.3, duration: 0.5 }}
        fill="currentColor"
        className="text-steel"
        fontSize="11"
        fontFamily="var(--font-plex), sans-serif"
      >
        <line x1="140" y1="346" x2="260" y2="346" stroke="currentColor" strokeWidth="0.75" />
        <line x1="140" y1="338" x2="140" y2="352" stroke="currentColor" strokeWidth="0.75" />
        <line x1="260" y1="338" x2="260" y2="352" stroke="currentColor" strokeWidth="0.75" />
        <text x="200" y="342" textAnchor="middle">V-opening</text>

        <line x1="325" y1="150" x2="360" y2="120" stroke="currentColor" strokeWidth="0.75" />
        <text x="362" y="116">Sheet</text>

        <line x1="228" y1="190" x2="290" y2="90" stroke="currentColor" strokeWidth="0.75" />
        <text x="292" y="86">Punch</text>

        <line x1="320" y1="300" x2="368" y2="280" stroke="currentColor" strokeWidth="0.75" />
        <text x="352" y="274">Die</text>
      </motion.g>
    </svg>
  );
}