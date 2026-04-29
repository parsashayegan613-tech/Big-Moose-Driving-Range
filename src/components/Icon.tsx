import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock,
  Diamond,
  ExternalLink,
  Facebook,
  Flag,
  Flame,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Navigation,
  Phone,
  Send,
  Star,
  Tag,
  X,
  type LucideIcon,
} from 'lucide-react';

const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowUpRight: ArrowUpRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  clock: Clock,
  diamondTurnRight: Navigation,
  externalLink: ExternalLink,
  facebook: Facebook,
  flag: Flag,
  flame: Flame,
  globe: Globe,
  golfBall: CircleDot,
  instagram: Instagram,
  location: MapPin,
  mail: Mail,
  menu: Menu,
  paperPlane: Send,
  phone: Phone,
  star: Star,
  tag: Tag,
  x: X,
  diamond: Diamond,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  filled?: boolean;
  strokeWidth?: number;
};

export default function Icon({ name, className, filled = false, strokeWidth = 2.8 }: IconProps) {
  const Component = icons[name];
  const classes = ['site-icon', filled ? 'site-icon-filled' : '', className].filter(Boolean).join(' ');

  return <Component aria-hidden="true" className={classes} strokeWidth={strokeWidth} />;
}
