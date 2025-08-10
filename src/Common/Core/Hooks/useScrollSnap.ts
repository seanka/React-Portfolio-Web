import { useRef, useState } from "react";

export function useScrollSnap(maxHeight: number, threshold = 50) {
  const activePage = useRef(0);
  const isScrolling = useRef(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const newPos = el.scrollTop;
    const delta = newPos - scrollPos;

    if (isScrolling.current) return;
    if (Math.abs(delta) < threshold) return;

    if (delta > 0) {
      activePage.current = Math.min(
        activePage.current + 1,
        Math.floor(el.scrollHeight / maxHeight) - 1,
      );
    } else {
      activePage.current = Math.max(activePage.current - 1, 0);
    }

    isScrolling.current = true;

    el.scrollTo({
      top: maxHeight * activePage.current,
      behavior: "smooth",
    });

    setScrollPos(maxHeight * activePage.current);

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  return { handleScroll, activePageIndex: activePage.current };
}
