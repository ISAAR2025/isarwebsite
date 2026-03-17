import React, { useEffect, useState } from "react";

export default function BackToTopButton({
  showAfter = 280,
  ariaLabel = "Back to top",
  icon = "▲",           // replace with an SVG if desired
}) {
  const [visible, setVisible] = useState(false);
  const [firstShow, setFirstShow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const shouldShow = y > showAfter;
      if (shouldShow && !visible) {
        setVisible(true);
      } else if (!shouldShow && visible) {
        setVisible(false);
        setFirstShow(false); // after first hide, disable the one-time intro
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter, visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const classNames = [
    "tx-backtop",
    visible ? "enter" : "exit",
    firstShow ? "intro" : "no-intro",
  ].join(" ");

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={classNames}
      onClick={scrollToTop}
    >
      <span className="tx-icon" aria-hidden="true">{icon}</span>
      <span className="tx-ring" aria-hidden="true" />
    </button>
  );
}
