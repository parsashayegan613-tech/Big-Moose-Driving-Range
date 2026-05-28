"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Icon from "@/components/Icon";

const galleryItems = [
  {
    src: "/images/range/range-bays.jpg",
    alt: "Range overview with hitting mats",
    label: "The Range",
  },
  {
    src: "/images/range/putting-green.jpg",
    alt: "Practice putting green",
    label: "Hitting Bays",
  },
  {
    src: "/images/range/range-targets.jpg",
    alt: "Open range with distance targets",
    label: "In Action",
  },
  {
    src: "/images/range/yard-games-mini-golf.jpg",
    alt: "Mini golf and yard games area",
    label: "Equipment",
  },
  {
    src: "/images/range/golden-hour-range.jpg",
    alt: "Golden hour view across the driving range",
    label: "Golden Hour",
  },
  {
    src: "/images/range/entrance-sign.jpg",
    alt: "Big Moose Driving Range entrance signage",
    label: "Entrance Sign",
  },
];

export default function RangeGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, galleryItems.length - 1));
    const track = trackRef.current;
    const item = track?.children[nextIndex] as HTMLElement | undefined;

    item?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(nextIndex);
  };

  return (
    <div className="range-gallery-carousel" aria-label="Range photo gallery">
      <div className="range-gallery-controls">
        <button
          className="range-gallery-arrow"
          type="button"
          aria-label="Previous range photo"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
        >
          <Icon name="chevronLeft" />
        </button>
        <div className="range-gallery-count" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
        </div>
        <button
          className="range-gallery-arrow"
          type="button"
          aria-label="Next range photo"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === galleryItems.length - 1}
        >
          <Icon name="chevronRight" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="gallery-horizontal-track"
        onScroll={(event) => {
          const track = event.currentTarget;
          const trackCenter = track.scrollLeft + track.clientWidth / 2;
          let closestIndex = 0;
          let closestDistance = Number.POSITIVE_INFINITY;

          Array.from(track.children).forEach((child, index) => {
            const item = child as HTMLElement;
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(itemCenter - trackCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
        }}
      >
        {galleryItems.map((item, index) => (
          <div className="gallery-h-item" data-lightbox key={item.src}>
            <Image src={item.src} alt={item.alt} width={1200} height={900} sizes="(max-width: 768px) 86vw, 56vw" />
            <div className="gallery-h-overlay">
              <span className="gallery-h-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="gallery-h-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="range-gallery-dots" aria-hidden="true">
        {galleryItems.map((item, index) => (
          <span className={index === activeIndex ? "active" : ""} key={item.src} />
        ))}
      </div>
    </div>
  );
}
