import React from 'react';

export type RangeIconName =
  | 'bays'
  | 'balls'
  | 'bucket'
  | 'target'
  | 'mat'
  | 'sign'
  | 'flag'
  | 'miniGolf'
  | 'grass'
  | 'shortGame'
  | 'yardGames'
  | 'swing'
  | 'junior'
  | 'clipboard'
  | 'punchCard'
  | 'clubs'
  | 'senior'
  | 'concession';

type RangeIconProps = {
  name: RangeIconName;
  className?: string;
};

const outline = '#221a16';
const blue = '#0068b8';
const blueDark = '#004b86';
const green = '#3f7f4f';
const tan = '#efbf70';
const gold = '#d79a47';
const brown = '#744414';
const white = '#fffaf1';

const strokeProps = {
  stroke: outline,
  strokeWidth: 3.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function GolfBall({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={white} {...strokeProps} />
      <circle cx={cx - r * 0.28} cy={cy - r * 0.16} r={r * 0.07} fill={brown} />
      <circle cx={cx + r * 0.3} cy={cy - r * 0.06} r={r * 0.07} fill={brown} />
      <circle cx={cx - r * 0.1} cy={cy + r * 0.2} r={r * 0.06} fill={brown} />
      <circle cx={cx + r * 0.18} cy={cy + r * 0.32} r={r * 0.055} fill={brown} />
    </g>
  );
}

function Flag({ x = 32, y = 14, color = blue }: { x?: number; y?: number; color?: string }) {
  return (
    <g>
      <path d={`M${x} ${y}v31`} stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x + 1} ${y + 1}l18 8-18 8z`} fill={color} {...strokeProps} />
    </g>
  );
}

const iconPaths: Record<RangeIconName, React.ReactNode> = {
  bays: (
    <>
      <path d="M9 42h45l-6-23H19z" fill={tan} {...strokeProps} />
      <path d="M15 36h32l-3-11H20z" fill={green} {...strokeProps} />
      <path d="M48 19V9h8v24" fill={brown} {...strokeProps} />
      <path d="M14 42h43" stroke={blueDark} strokeWidth="3" strokeLinecap="round" />
      <GolfBall cx={32} cy={25} r={5} />
      <path d="M32 30v6" stroke={outline} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  balls: (
    <>
      <GolfBall cx={24} cy={39} r={12} />
      <GolfBall cx={41} cy={39} r={12} />
      <GolfBall cx={33} cy={25} r={12} />
    </>
  ),
  bucket: (
    <>
      <path d="M17 24c2-12 28-12 30 0" fill="none" {...strokeProps} />
      <path d="M15 23h34l-4 28H19z" fill={blue} {...strokeProps} />
      <path d="M17 23c4 8 26 8 32 0" fill="none" stroke={blueDark} strokeWidth="5" strokeLinecap="round" />
      <path d="M21 31h6M31 31h6M41 31h4M23 39h6M34 39h6M41 47h3M27 47h6" stroke={white} strokeWidth="3" strokeLinecap="round" />
      <GolfBall cx={23} cy={20} r={8} />
      <GolfBall cx={33} cy={15} r={8} />
      <GolfBall cx={43} cy={20} r={8} />
      <GolfBall cx={33} cy={24} r={8} />
    </>
  ),
  target: (
    <>
      <path d="M25 53h14l-3-10h-8z" fill={brown} {...strokeProps} />
      <circle cx="32" cy="28" r="22" fill={blue} {...strokeProps} />
      <circle cx="32" cy="28" r="16" fill={white} stroke={outline} strokeWidth="2.8" />
      <circle cx="32" cy="28" r="10" fill={tan} stroke={outline} strokeWidth="2.8" />
      <circle cx="32" cy="28" r="4" fill={brown} />
      <path d="M32 6V2" stroke={outline} strokeWidth="3" strokeLinecap="round" />
      <path d="M33 3l14 7-14 7z" fill={tan} {...strokeProps} />
    </>
  ),
  mat: (
    <>
      <path d="M9 42h46l-5 10H14z" fill={gold} {...strokeProps} />
      <path d="M13 20h38v22H13z" fill={blue} {...strokeProps} />
      <path d="M18 25h28v13H18z" fill={green} {...strokeProps} />
      <GolfBall cx={32} cy={16} r={6} />
      <path d="M32 22v10" stroke={outline} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  sign: (
    <>
      <path d="M12 18h40v25H12z" fill={white} {...strokeProps} />
      <path d="M12 18h40v8H12z" fill={blue} {...strokeProps} />
      <GolfBall cx={15} cy={20} r={6} />
      <circle cx="20" cy="34" r="5" fill={white} {...strokeProps} />
      <circle cx="32" cy="34" r="5" fill={white} {...strokeProps} />
      <circle cx="44" cy="34" r="5" fill={white} {...strokeProps} />
      <circle cx="20" cy="47" r="5" fill={white} {...strokeProps} />
      <circle cx="32" cy="47" r="5" fill={white} {...strokeProps} />
      <circle cx="44" cy="47" r="5" fill={brown} {...strokeProps} />
    </>
  ),
  flag: (
    <>
      <path d="M11 46c8-15 33-15 42 0-5 7-36 7-42 0Z" fill={tan} {...strokeProps} />
      <Flag x={22} y={12} />
      <ellipse cx="22" cy="46" rx="8" ry="4" fill={outline} />
    </>
  ),
  miniGolf: (
    <>
      <path d="M12 46c8-17 32-18 43-2-4 9-36 11-43 2Z" fill={green} {...strokeProps} />
      <Flag x={27} y={10} />
      <ellipse cx="27" cy="44" rx="8" ry="4" fill={outline} />
      <GolfBall cx={45} cy={42} r={5} />
      <path d="M39 52c5 2 11 1 16-2" stroke={blueDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  grass: (
    <>
      <path d="M10 51h44V42H10z" fill={tan} {...strokeProps} />
      <path d="M14 42c4-14 6-18 9-26 0 13 2 18 3 25 5-18 8-24 12-30-1 16 0 22 2 30 4-13 8-19 12-25-2 13-2 19 0 26Z" fill={green} {...strokeProps} />
      <path d="M21 42c2-8 4-14 8-20M37 42c1-10 4-17 9-23" stroke={blueDark} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  shortGame: (
    <>
      <path d="M12 46c7-12 30-13 42-3-3 8-30 13-42 3Z" fill={tan} {...strokeProps} />
      <Flag x={23} y={12} color={tan} />
      <ellipse cx="23" cy="45" rx="7" ry="4" fill={white} {...strokeProps} />
      <GolfBall cx={46} cy={43} r={4.5} />
    </>
  ),
  yardGames: (
    <>
      <path d="M35 13h8v39h-8z" fill={brown} {...strokeProps} />
      <ellipse cx="39" cy="54" rx="12" ry="5" fill={gold} {...strokeProps} />
      <ellipse cx="30" cy="34" rx="14" ry="7" transform="rotate(-18 30 34)" fill="none" stroke={blue} strokeWidth="6" />
      <ellipse cx="47" cy="31" rx="14" ry="7" transform="rotate(18 47 31)" fill="none" stroke={tan} strokeWidth="6" />
    </>
  ),
  swing: (
    <>
      <path d="M23 52h17l-3-26H26z" fill={blue} {...strokeProps} />
      <path d="M24 30c-7 1-10 6-10 12v10h7V41c0-3 1-5 4-5" fill={blue} {...strokeProps} />
      <path d="M40 30c7 1 10 6 10 12v10h-7V41c0-3-1-5-4-5" fill={tan} {...strokeProps} />
      <path d="M25 25h14l2 6H23z" fill={brown} {...strokeProps} />
      <path d="M23 24V8M32 24V6M41 24V9" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d="M21 8h7M30 6h8M39 9h7" stroke={white} strokeWidth="5" strokeLinecap="round" />
      <path d="M25 43c4-4 7-6 11-7" stroke={outline} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  junior: (
    <>
      <GolfBall cx={25} cy={31} r={13} />
      <path d="M30 35c11-2 18 3 21 13" stroke={outline} strokeWidth="5" strokeLinecap="round" />
      <path d="M29 42c7-9 20-8 28 0-5 5-19 6-28 0Z" fill={tan} {...strokeProps} />
      <path d="M36 43h15" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d="M34 42c-4 4-7 7-10 11" stroke={outline} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  clipboard: (
    <>
      <path d="M18 12h30a3 3 0 0 1 3 3v39H13V15a3 3 0 0 1 3-3z" fill={white} {...strokeProps} />
      <path d="M24 8h16v10H24z" fill={blue} {...strokeProps} />
      <path d="M24 30l4 4 8-9M24 41l4 4 8-9M24 52l4 4 8-9" fill="none" stroke={blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 31h8M40 43h8M40 54h8" stroke={outline} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  punchCard: (
    <>
      <path d="M9 16h46v35H9z" fill={tan} {...strokeProps} />
      <path d="M9 16h46v10H9z" fill={blue} {...strokeProps} />
      {[18, 29, 40, 51].map((cx) => (
        <circle cx={cx} cy={35} r="5" fill={white} {...strokeProps} key={`top-${cx}`} />
      ))}
      {[18, 29, 40].map((cx) => (
        <circle cx={cx} cy={47} r="5" fill={white} {...strokeProps} key={`bottom-${cx}`} />
      ))}
      <circle cx="51" cy="47" r="5" fill={brown} {...strokeProps} />
    </>
  ),
  clubs: (
    <>
      <path d="M24 52h18l-3-23H27z" fill={blue} {...strokeProps} />
      <path d="M24 30h18l2 6H22z" fill={tan} {...strokeProps} />
      <path d="M23 28V10M32 28V7M41 28V11" stroke={outline} strokeWidth="4" strokeLinecap="round" />
      <path d="M20 10h8M29 7h9M38 11h8" stroke={white} strokeWidth="5" strokeLinecap="round" />
      <path d="M19 10h7M29 7h7M38 11h7" stroke={outline} strokeWidth="3" strokeLinecap="round" />
      <path d="M19 43h-7a8 8 0 0 0 0 16h7z" fill={blue} {...strokeProps} />
      <path d="M45 43h7a8 8 0 0 1 0 16h-7z" fill={tan} {...strokeProps} />
    </>
  ),
  senior: (
    <>
      <path d="M15 36c6-10 28-10 34 0 5 8-2 17-17 17s-22-9-17-17Z" fill={white} {...strokeProps} />
      <path d="M22 34c4-6 16-6 20 0" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d="M18 34c3-11 23-13 28-1" fill={tan} {...strokeProps} />
      <path d="M24 36h16" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d="M21 46h22" stroke={blue} strokeWidth="5" strokeLinecap="round" />
      <circle cx="49" cy="47" r="8" fill={tan} {...strokeProps} />
      <path d="M46 50l6-6" stroke={white} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  concession: (
    <>
      <path d="M19 50h27l-3-25H22z" fill={blue} {...strokeProps} />
      <path d="M21 25c2-10 21-10 23 0" fill="none" {...strokeProps} />
      <path d="M19 25h27" stroke={outline} strokeWidth="5" strokeLinecap="round" />
      <path d="M23 33h5M31 33h5M39 33h4M25 41h5M34 41h6" stroke={white} strokeWidth="3" strokeLinecap="round" />
      <GolfBall cx={27} cy={19} r={7} />
      <GolfBall cx={37} cy={18} r={8} />
      <GolfBall cx={32} cy={26} r={7} />
    </>
  ),
};

export default function RangeIcon({ name, className = '' }: RangeIconProps) {
  return (
    <svg
      className={`range-icon ${className}`.trim()}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      {iconPaths[name]}
    </svg>
  );
}
