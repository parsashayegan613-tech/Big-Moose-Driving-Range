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

const iconPaths: Record<RangeIconName, React.ReactNode> = {
  bays: (
    <>
      <path d="M4 9.5h16" />
      <path d="M6 14h16" />
      <path d="M2 18.5h16" />
    </>
  ),
  balls: (
    <>
      <circle cx="8" cy="14" r="3" />
      <circle cx="12" cy="9" r="3" />
      <circle cx="16" cy="14" r="3" />
    </>
  ),
  bucket: (
    <>
      <path d="M7 9h10l-1.2 9.5H8.2L7 9Z" />
      <path d="M8.5 9a3.5 3.5 0 0 1 7 0" />
      <path d="M9.5 13h5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  mat: (
    <>
      <path d="M5 15.5h14l1.5 3.5h-17L5 15.5Z" />
      <path d="M12 6v9" />
      <circle cx="12" cy="5" r="2" />
    </>
  ),
  sign: (
    <>
      <path d="M5 5.5h14v8H5z" />
      <path d="M12 13.5V21" />
      <path d="M8 21h8" />
    </>
  ),
  flag: (
    <>
      <path d="M8 21V4" />
      <path d="M8 5h10l-2 3 2 3H8" />
      <path d="M6 21h8" />
    </>
  ),
  miniGolf: (
    <>
      <path d="M8 20V5" />
      <path d="M8 6h9l-2 2.5 2 2.5H8" />
      <path d="M4 20c2.2-5.2 13.8-5.2 16 0" />
      <circle cx="17" cy="17" r="1.5" />
    </>
  ),
  grass: (
    <>
      <path d="M3 20h18" />
      <path d="M7 20c.5-4.5 1.9-7.6 4.2-9.2" />
      <path d="M12 20c.1-5.1 1.2-8.8 3.5-11" />
      <path d="M16.5 20c-.2-3.7.8-6.4 3-8" />
      <path d="M9.5 20c-.8-3.4-2.3-5.8-4.5-7.2" />
    </>
  ),
  shortGame: (
    <>
      <path d="M8 21V5" />
      <path d="M8 6h8l-1.5 2.5L16 11H8" />
      <path d="M4 20c2.5-4 10.8-4.8 16-1" />
      <circle cx="6.5" cy="17.5" r="1.4" />
    </>
  ),
  yardGames: (
    <>
      <circle cx="8" cy="9" r="3.5" />
      <circle cx="16" cy="15" r="3.5" />
      <path d="M12 12l2-2" />
    </>
  ),
  swing: (
    <>
      <path d="M8 20l6-16" />
      <path d="M7 20h7" />
      <path d="M15.5 8c2.5 2 3.8 4.5 4 7.5" />
      <circle cx="18.5" cy="19" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  junior: (
    <>
      <circle cx="9" cy="7" r="2.5" />
      <circle cx="15.5" cy="8.5" r="2" />
      <path d="M4 20c.9-4 3-6 6.2-6s5.3 2 6.2 6" />
      <path d="M13.5 15.2c2.6.2 4.4 1.8 5.3 4.8" />
    </>
  ),
  clipboard: (
    <>
      <path d="M7 5.5h10a2 2 0 0 1 2 2V20H5V7.5a2 2 0 0 1 2-2Z" />
      <path d="M9 5a3 3 0 0 1 6 0v2H9V5Z" />
      <path d="M8.5 12h7" />
      <path d="M8.5 16h5" />
    </>
  ),
  punchCard: (
    <>
      <path d="M4 7h16v10H4z" />
      <circle cx="8" cy="12" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="16" cy="12" r="1.4" />
    </>
  ),
  clubs: (
    <>
      <path d="M9 4v14" />
      <path d="M14 4v14" />
      <path d="M7 18h4l-1.5 2H6.5a1.5 1.5 0 0 1 0-3H9" />
      <path d="M12 18h4l1.5 2h-4a1.5 1.5 0 0 1 0-3H14" />
    </>
  ),
  senior: (
    <>
      <circle cx="8" cy="8" r="3" />
      <path d="M5 20c.6-3.7 2.6-5.6 6-5.6" />
      <path d="M15 17l5-5" />
      <path d="M15 12h5v5" />
    </>
  ),
  concession: (
    <>
      <path d="M7 10h10l-1 9H8l-1-9Z" />
      <path d="M8 10c.2-3 1.7-4.5 4-4.5s3.8 1.5 4 4.5" />
      <path d="M9.5 14h5" />
    </>
  ),
};

export default function RangeIcon({ name, className = '' }: RangeIconProps) {
  return (
    <svg
      className={`range-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[name]}
      </g>
    </svg>
  );
}
