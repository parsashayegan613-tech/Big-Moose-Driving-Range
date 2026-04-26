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
  | 'concession'
  | 'hours'
  | 'location'
  | 'phone'
  | 'email';

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
      <path d="M8 48h48l-5-24H13z" fill={tan} {...strokeProps} />
      <path d="M15 42h34l-3-13H18z" fill={green} {...strokeProps} />
      <path d="M14 48h40" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <path d="M48 24V11h8v28" fill={brown} {...strokeProps} />
      <path d="M12 24h36" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <GolfBall cx={31} cy={31} r={4.5} />
      <path d="M31 35.5v6" stroke={outline} strokeWidth="3" strokeLinecap="round" />
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
      <path d="M8 45h48l-5 9H13z" fill={gold} {...strokeProps} />
      <path d="M12 21h40v24H12z" fill={blue} {...strokeProps} />
      <path d="M17 27h30v13H17z" fill={green} {...strokeProps} />
      <path d="M23 40h18" stroke={blueDark} strokeWidth="3" strokeLinecap="round" />
      <GolfBall cx={32} cy={20} r={5} />
      <path d="M32 25v9" stroke={outline} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  sign: (
    <>
      <path d="M14 25h36v23H14z" fill={white} {...strokeProps} />
      <path d="M11 25l21-12 21 12z" fill={tan} {...strokeProps} />
      <path d="M20 33h24" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <path d="M20 41h13" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d="M14 48h36" stroke={blueDark} strokeWidth="4" strokeLinecap="round" />
      <GolfBall cx={45} cy={18} r={5} />
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
      <path d="M10 45c7-17 35-18 45-2-4 10-36 12-45 2Z" fill={green} {...strokeProps} />
      <Flag x={23} y={12} />
      <ellipse cx="23" cy="43" rx="7" ry="4" fill={outline} />
      <path d="M36 50c7 2 14 1 19-3" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <GolfBall cx={46} cy={41} r={5} />
      <path d="M39 37c3-2 7-2 10 0" stroke={tan} strokeWidth="4" strokeLinecap="round" />
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
      <path d="M11 45c8-13 32-14 43-3-3 9-32 13-43 3Z" fill={green} {...strokeProps} />
      <path d="M18 50c9 4 24 3 35-2" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <Flag x={23} y={12} color={tan} />
      <ellipse cx="23" cy="44" rx="7" ry="4" fill={outline} />
      <GolfBall cx={47} cy={41} r={4.5} />
    </>
  ),
  yardGames: (
    <>
      <path d="M29 12h8v39h-8z" fill={brown} {...strokeProps} />
      <ellipse cx="33" cy="53" rx="14" ry="5" fill={gold} {...strokeProps} />
      <ellipse cx="25" cy="34" rx="15" ry="7" transform="rotate(-18 25 34)" fill="none" stroke={blue} strokeWidth="6" />
      <ellipse cx="44" cy="31" rx="15" ry="7" transform="rotate(18 44 31)" fill="none" stroke={tan} strokeWidth="6" />
      <ellipse cx="38" cy="40" rx="15" ry="7" transform="rotate(-8 38 40)" fill="none" stroke={green} strokeWidth="5" />
    </>
  ),
  swing: (
    <>
      <path d="M15 48c11 6 27 6 38 0" stroke={green} strokeWidth="6" strokeLinecap="round" />
      <path d="M18 42c3-17 17-27 32-24" fill="none" stroke={blue} strokeWidth="5" strokeLinecap="round" />
      <path d="M24 48l20-30" stroke={brown} strokeWidth="5" strokeLinecap="round" />
      <path d="M41 18l8 4" stroke={white} strokeWidth="5" strokeLinecap="round" />
      <path d="M40 18l9 4" stroke={outline} strokeWidth="3" strokeLinecap="round" />
      <GolfBall cx={17} cy={47} r={5} />
      <path d="M28 36l10 7" stroke={tan} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  junior: (
    <>
      <path d="M13 45c6-12 31-12 38 0-5 8-32 8-38 0Z" fill={green} {...strokeProps} />
      <Flag x={23} y={12} color={tan} />
      <path d="M38 34c3-5 12-5 15 0-2 4-11 4-15 0Z" fill={blue} {...strokeProps} />
      <path d="M40 35h11" stroke={white} strokeWidth="3" strokeLinecap="round" />
      <GolfBall cx={43} cy={45} r={5} />
      <path d="M18 50c8 4 22 4 34 0" stroke={blue} strokeWidth="4" strokeLinecap="round" />
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
      <path d="M9 17h46v34H9z" fill={white} {...strokeProps} />
      <path d="M9 17h46v9H9z" fill={blue} {...strokeProps} />
      <GolfBall cx={15} cy={20} r={5} />
      {[20, 31, 42].map((cx) => (
        <circle cx={cx} cy={36} r="5" fill={white} {...strokeProps} key={`top-${cx}`} />
      ))}
      {[20, 31].map((cx) => (
        <circle cx={cx} cy={48} r="5" fill={white} {...strokeProps} key={`bottom-${cx}`} />
      ))}
      <circle cx="42" cy="48" r="5" fill={brown} {...strokeProps} />
      <path d="M50 34l4 4 8-10" fill="none" stroke={blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  clubs: (
    <>
      <path d="M24 52h18l-3-24H27z" fill={blue} {...strokeProps} />
      <path d="M23 29h20l2 7H21z" fill={tan} {...strokeProps} />
      <path d="M22 28V9M32 28V7M42 28V10" stroke={outline} strokeWidth="4" strokeLinecap="round" />
      <path d="M18 9h9M28 7h10M38 10h9" stroke={white} strokeWidth="5" strokeLinecap="round" />
      <path d="M18 9h8M28 7h8M38 10h8" stroke={outline} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 44h-8a7 7 0 0 0 0 14h8z" fill={blue} {...strokeProps} />
      <path d="M44 44h8a7 7 0 0 1 0 14h-8z" fill={tan} {...strokeProps} />
    </>
  ),
  senior: (
    <>
      <GolfBall cx={27} cy={35} r={14} />
      <circle cx="43" cy="43" r="10" fill={tan} {...strokeProps} />
      <path d="M39 47l8-8" stroke={white} strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="39" r="1.8" fill={white} />
      <circle cx="47" cy="47" r="1.8" fill={white} />
      <path d="M17 50c8 5 23 5 34 0" stroke={blue} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  concession: (
    <>
      <path d="M11 27h35c5 0 9 4 9 9v11H11z" fill={tan} {...strokeProps} />
      <path d="M17 20h22c4 0 7 3 7 7H14c0-4 2-7 3-7z" fill={blue} {...strokeProps} />
      <path d="M17 35h15" stroke={brown} strokeWidth="4" strokeLinecap="round" />
      <path d="M37 35h10" stroke={white} strokeWidth="4" strokeLinecap="round" />
      <circle cx="22" cy="48" r="5" fill={white} {...strokeProps} />
      <circle cx="45" cy="48" r="5" fill={white} {...strokeProps} />
      <path d="M14 43h38" stroke={outline} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  hours: (
    <>
      <circle cx="32" cy="32" r="20" fill={white} {...strokeProps} />
      <path d="M32 19v14l9 6" stroke={blue} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 49c8 6 22 6 30 0" stroke={tan} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  location: (
    <>
      <path d="M32 55s17-17 17-31c0-9-7-16-17-16s-17 7-17 16c0 14 17 31 17 31Z" fill={blue} {...strokeProps} />
      <circle cx="32" cy="24" r="7" fill={white} {...strokeProps} />
      <path d="M18 53c8 4 20 4 28 0" stroke={tan} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  phone: (
    <>
      <path d="M21 13l8 10-6 6c4 7 9 12 16 16l6-6 10 8c-2 6-6 10-13 10-17-4-31-18-35-35 0-7 4-11 10-13Z" fill={blue} {...strokeProps} />
      <path d="M18 49c8 5 21 7 32 3" stroke={tan} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  email: (
    <>
      <path d="M11 18h42v30H11z" fill={white} {...strokeProps} />
      <path d="M12 20l20 17 20-17" fill="none" stroke={blue} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 47l13-13M50 47L37 34" stroke={tan} strokeWidth="4" strokeLinecap="round" />
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
