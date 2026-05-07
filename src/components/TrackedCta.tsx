import React from 'react';
import Link from 'next/link';
import { ctaTracking, type CtaAction } from '@/lib/siteConfig';

type TrackedCtaProps = {
  href: string;
  action: CtaAction;
  placement: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  onClick?: () => void;
};

function isInternalHref(href: string) {
  return href.startsWith('/') || href.startsWith('#');
}

export default function TrackedCta({
  href,
  action,
  placement,
  className,
  children,
  target,
  rel,
  style,
  ariaLabel,
  onClick,
}: TrackedCtaProps) {
  const tracking = ctaTracking(action, placement);
  const content = <span className="tracked-cta-content">{children}</span>;

  if (isInternalHref(href)) {
    return (
      <Link href={href} prefetch={false} className={className} style={style} aria-label={ariaLabel} onClick={onClick} {...tracking}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={onClick}
      {...tracking}
    >
      {content}
    </a>
  );
}
