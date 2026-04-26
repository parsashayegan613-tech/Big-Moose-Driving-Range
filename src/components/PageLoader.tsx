"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("big-moose-loader-seen") === "true") {
      const skipTimer = setTimeout(() => setHidden(true), 0);
      return () => clearTimeout(skipTimer);
    }

    sessionStorage.setItem("big-moose-loader-seen", "true");
    const loadTimer = setTimeout(() => setLoaded(true), 400);
    const hideTimer = setTimeout(() => setHidden(true), 800);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`page-loader ${loaded ? "loader-done" : ""}`}>
      <div className="loader-content">
        <Image
          src="/brand/bigmoose-logo-moose-small.png"
          alt=""
          width={76}
          height={90}
          className="loader-logo"
          priority
        />
        <div className="loader-text">Big Moose</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
