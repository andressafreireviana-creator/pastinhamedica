"use client";

import { useEffect } from "react";

export function LandingInteractions() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");

    const updateHeader = () => {
      header?.classList.toggle("scrolled", window.scrollY > 10);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const cleanupFaq = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".faq-q"),
    ).map((button) => {
      const handleClick = () => {
        const item = button.closest<HTMLElement>(".faq-item");
        const panel = item?.querySelector<HTMLElement>(".faq-a");

        if (!item || !panel) {
          return;
        }

        const isOpen = item.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
        panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "";
      };

      button.addEventListener("click", handleClick);
      return () => button.removeEventListener("click", handleClick);
    });

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      revealElements.forEach((element) => observer?.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("in"));
    }

    // Scrollspy: highlight the nav link of the section currently in view.
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']"),
    );
    const linkById = new Map(
      navLinks.map((link) => [link.getAttribute("href")?.slice(1) ?? "", link]),
    );
    const spiedSections = Array.from(linkById.keys())
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let spy: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window && spiedSections.length > 0) {
      const visible = new Set<string>();

      const setActive = () => {
        let active: string | null = null;
        for (const id of linkById.keys()) {
          if (visible.has(id)) {
            active = id;
          }
        }
        linkById.forEach((link, id) => {
          if (id === active) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      };

      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visible.add(entry.target.id);
            } else {
              visible.delete(entry.target.id);
            }
          });
          setActive();
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );

      spiedSections.forEach((section) => spy?.observe(section));
    }

    return () => {
      window.removeEventListener("scroll", updateHeader);
      cleanupFaq.forEach((cleanup) => cleanup());
      observer?.disconnect();
      spy?.disconnect();
    };
  }, []);

  return null;
}
