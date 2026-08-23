'use client';

import React, { useEffect } from 'react';

export const ScrollAnimationObserver: React.FC = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          } else {
            // Keep animations playing every time they scroll back in
            entry.target.classList.remove('reveal-active');
          }
        });
      },
      {
        threshold: 0.05, // Trigger early as soon as 5% of section is visible
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const elements = document.querySelectorAll('section, .reveal-item');
    
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isTopElement = rect.top < window.innerHeight;

      if (isTopElement || el.id === 'hero') {
        // Elements in initial viewport reveal immediately on load
        el.classList.add('reveal-ready', 'reveal-active');
      } else {
        el.classList.add('reveal-ready');
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
};
