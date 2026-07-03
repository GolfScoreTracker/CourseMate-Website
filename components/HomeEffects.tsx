"use client";

import { useEffect } from "react";

export default function HomeEffects() {
  useEffect(() => {
    // Scroll reveal — set initial hidden state only when JS runs, so no-JS stays visible.
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    reveals.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
    });
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            revealIO.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => revealIO.observe(el));

    // Scroll-spy nav highlight.
    const links = Array.from(document.querySelectorAll<HTMLElement>("[data-nav]"));
    const sections = links
      .map((l) => {
        const h = l.getAttribute("href");
        return h && h.startsWith("#") ? document.querySelector(h) : null;
      })
      .filter((s): s is Element => Boolean(s));
    const setActive = (id: string) => {
      links.forEach((l) => {
        const on = l.getAttribute("href") === id;
        l.style.color = on ? "#2E5E3A" : "#3a2417";
        l.style.borderBottomColor = on ? "#C56A28" : "transparent";
      });
    };
    const spyIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spyIO.observe(s));

    return () => {
      revealIO.disconnect();
      spyIO.disconnect();
    };
  }, []);

  return null;
}
