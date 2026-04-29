import Image from 'next/image';

export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <Image
        src="/images/range/golden-hour-range.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={65}
        className="hero-bg-image"
      />
    </div>
  );
}
