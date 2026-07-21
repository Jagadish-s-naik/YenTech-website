"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export function MagneticButton({
  children,
  range = 40,
  strength = 0.35,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if device supports hover/pointer events (exclude touch-only devices)
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const child = container.querySelector(".magnetic-child");
    if (!child) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);

      if (distance < range) {
        gsap.to(child, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(child, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(child, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [range, strength]);

  // Clone child to apply custom class for GSAP targeting
  const childProps = children.props as { className?: string };
  const clonedChild = React.cloneElement(children, {
    className: `${childProps.className || ""} magnetic-child inline-block transition-none will-change-transform`,
  } as React.HTMLAttributes<HTMLElement>);

  return (
    <div ref={containerRef} className="inline-block">
      {clonedChild}
    </div>
  );
}
