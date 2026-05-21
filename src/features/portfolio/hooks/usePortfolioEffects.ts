import { RefObject, useEffect } from "react";

export function useRevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useCountUp() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          const start = performance.now();
          const duration = 1100;
          const tick = (time: number) => {
            const p = Math.min((time - start) / duration, 1);
            el.textContent = `${Math.floor(target * p)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useCustomCursor(dotRef: RefObject<HTMLDivElement | null>, ringRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let ringX = 0;
    let ringY = 0;
    let dotX = 0;
    let dotY = 0;

    const move = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    };

    const animate = () => {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    const raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [dotRef, ringRef]);
}

export function useMagneticElements() {
  useEffect(() => {
    const magnets = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const cleanups: Array<() => void> = [];

    magnets.forEach((el) => {
      const enter = () => el.classList.add("magnetic-on");
      const leave = () => {
        el.classList.remove("magnetic-on");
        el.style.transform = "translate3d(0, 0, 0)";
      };
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("mousemove", move as EventListener);

      cleanups.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.removeEventListener("mousemove", move as EventListener);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

export function useTimelineProgress() {
  useEffect(() => {
    const timeline = document.querySelector<HTMLElement>("[data-experience-timeline]");
    if (!timeline) return;

    const cards = Array.from(timeline.querySelectorAll<HTMLElement>(".experience-card"));
    const setProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.28;
      const end = rect.height + viewportHeight * 0.28;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / end));
      timeline.style.setProperty("--timeline-progress", `${progress}`);

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardMid = cardRect.top + cardRect.height / 2;
        const isActive = cardMid < viewportHeight * 0.62;
        card.classList.toggle("active", isActive);
      });
    };

    let frame = 0;
    const onChange = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setProgress();
      });
    };

    setProgress();
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
