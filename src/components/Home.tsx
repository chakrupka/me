import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const BASE_VH = 50;
  const SCROLL_VH = 80;
  const location = useLocation();
  const initialHeight = useRef(window.innerHeight);
  const initialProgress = location.state?.scrollProgress ?? 0;
  const [progress, setProgress] = useState(initialProgress);
  const scrollRafRef = useRef<number | null>(null);
  const hasRestoredScroll = useRef(false);

  useEffect(() => {
    if (initialProgress > 0 && !hasRestoredScroll.current) {
      hasRestoredScroll.current = true;
      const limitPx = (SCROLL_VH / 100) * initialHeight.current;
      const targetScroll = initialProgress * limitPx;
      window.scrollTo(0, targetScroll);
    }

    const limitPx = (SCROLL_VH / 100) * initialHeight.current;
    let lastY = 0;

    const onScroll = () => {
      lastY = window.scrollY;

      if (scrollRafRef.current !== null) return;

      scrollRafRef.current = requestAnimationFrame(() => {
        const p = limitPx > 0 ? Math.min(lastY / limitPx, 1) : 0;
        setProgress(p);
        scrollRafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const limitPx = (SCROLL_VH / 100) * initialHeight.current;
    let lastY = 0;

    const onScroll = () => {
      lastY = window.scrollY;

      if (scrollRafRef.current !== null) return;

      scrollRafRef.current = requestAnimationFrame(() => {
        const p = limitPx > 0 ? Math.min(lastY / limitPx, 1) : 0;
        setProgress(p);
        scrollRafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  const scale = Math.max(1 - progress, 0.3);
  const topHeight = (BASE_VH / 100) * initialHeight.current;
  const maxShift = topHeight * 0.7;
  const shift = maxShift * progress;

  return (
    <div
      className="relative min-h-[200vh] overscroll-none dark:bg-black"
      style={{ overscrollBehavior: "none" }}
    >
      <div
        className="fixed inset-0 z-0 flex flex-col items-center justify-center gap-5 text-5xl dark:text-white"
        style={{ opacity: `${scale == 0.3 ? 1 : 1 - scale}` }}
      >
        <Link
          to="/about"
          state={{ scrollProgress: progress }}
          className="cursor-pointer underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          state={{ scrollProgress: progress }}
          className="cursor-pointer underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current"
        >
          PROJECTS
        </Link>
        <Link
          to="/"
          state={{ scrollProgress: progress }}
          className="cursor-pointer underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current"
        >
          RÉSUMÉ
        </Link>
      </div>

      <div
        className="pointer-events-none fixed top-0 left-0 z-10 w-full overflow-hidden"
        style={{ height: `${topHeight}px` }}
      >
        <div
          className="absolute inset-0 origin-top bg-white will-change-transform dark:bg-black"
          style={{ transform: `scaleY(${scale})` }}
        />
        <div
          className="pointer-events-auto absolute inset-x-0 bottom-0 flex justify-center will-change-transform"
          style={{ transform: `translateY(-${shift}px)` }}
        >
          <h1 className="pointer-events-none text-7xl text-black select-none dark:text-white">
            cha
          </h1>
        </div>
      </div>

      <div
        className="pointer-events-none fixed bottom-0 left-0 z-10 w-full overflow-hidden"
        style={{ height: `${topHeight}px` }}
      >
        <div
          className="absolute inset-0 origin-bottom bg-white will-change-transform dark:bg-black"
          style={{ transform: `scaleY(${scale})` }}
        />
        <div
          className="pointer-events-auto absolute inset-x-0 top-0 flex justify-center will-change-transform"
          style={{ transform: `translateY(${shift}px)` }}
        >
          <h1 className="pointer-events-none text-7xl text-black select-none dark:text-white">
            krupka
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
