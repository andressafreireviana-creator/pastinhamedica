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

    return () => {
      window.removeEventListener("scroll", updateHeader);
      cleanupFaq.forEach((cleanup) => cleanup());
      observer?.disconnect();
    };
  }, []);

  return null;
}
