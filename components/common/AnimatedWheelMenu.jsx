"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaCog } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Wheels & Tires", href: "/wheels-tires" },
  { name: "Financing", href: "/financing" },
  { name: "Services", href: "/services" },
  { name: "Promos", href: "/promos" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function AnimatedWheelMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const controls = useAnimation();
  const itemRefs = useRef([]);

  useEffect(() => {
    if (hoveredIndex === null) {
      controls.stop();
      controls.set({ opacity: 0, x: -30 });
      return;
    }

    async function animateWheel() {
      if (!itemRefs.current[hoveredIndex]) return;
      const item = itemRefs.current[hoveredIndex];
      const width = item.offsetWidth;

      // Reset position left outside the menu item & visible
      await controls.set({ x: -30, opacity: 1 });

      // Animate from left to right over the menu width faster
      await controls.start({
        x: width + 10,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      // Fade out the wheel quickly after passing
      await controls.start({ opacity: 0, transition: { duration: 0.2 } });
    }

    animateWheel();

    // Cleanup: stop animation immediately if hoveredIndex changes
    return () => controls.stop();
  }, [hoveredIndex, controls]);

  return (
    <nav className="hidden md:flex items-center gap-8 relative">
      {navLinks.map((link, i) => (
        <div
          key={link.name}
          ref={(el) => (itemRefs.current[i] = el)}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            href={link.href}
            className="relative text-black font-medium transition-colors duration-300 group-hover:text-[#8B0000]"
          >
            {link.name}
          </Link>

          {/* Track Line */}
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#8B0000] opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
            style={{ filter: "blur(1.5px)" }}
          />

          {/* Animated Wheel */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.div
                key={i} // Key here forces remount when hoveredIndex changes
                animate={controls}
                initial={{ x: -30, opacity: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-[2px] left-0 w-6 h-6 text-[#8B0000]"
              >
                <FaCog className="w-6 h-6 animate-spin-slow" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
