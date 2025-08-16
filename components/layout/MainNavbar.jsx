// components/layout/MainNavbar.tsx
"use client";

import { FaCog, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Wheels & Tires",
    href: "/wheels-tires",
    submenu: [
      { name: "Rims", href: "/rims" },
      { name: "Tires", href: "/tires" },
      { name: "Accessories", href: "/accessories" },
    ],
  },
  {
    name: "Financing",
    href: "/financing",
    submenu: [
      { name: "Apply for Financing", href: "/financing/apply" },
      { name: "Payment Calculator", href: "/financing/calculator" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Car Servicing", href: "/services/car-servicing" },
      { name: "Wheel Alignment", href: "/services/wheel-alignment" },
      { name: "Tire Installation", href: "/services/tire-installation" },
    ],
  },
  { name: "Promos", href: "/promos" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState([]);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <div className="bg-[#8B0000] md:bg-white shadow-sm relative">
      <Container>
        <div className="flex justify-between items-center py-3">
          {/* Left - Logo */}
          <Link href="/">
            <img
              src="https://hyperspeedwinnipeg.ca/wp-content/uploads/hyper-speed-logo-min.webp"
              alt="Logo"
              className="h-12 w-auto object-contain hidden md:block"
            />
            <img
              src="https://hyperspeedwinnipeg.ca/wp-content/uploads/hyperspeed-white.webp"
              alt="Logo"
              className="h-12 w-auto object-contain block md:hidden"
            />
          </Link>

          {/* Center - Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(link.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.href}
                  className="relative text-black font-medium transition-colors duration-300 hover:text-[#8B0000]"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#8B0000] transition-all duration-300 ease-out hover:w-full"></span>
                </Link>

                <AnimatePresence>
                  {link.submenu && hoveredMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 min-w-[200px]"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#8B0000] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
         

          {/* Right - Wheel Visualizer Button */}
          <div className="hidden md:block">
            <Link
              href="/wheel-visualizer"
              className="flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-md border-2 border-[#8B0000] transition-all duration-300 hover:bg-white hover:text-[#8B0000]"
            >
              <FaCog className="text-lg animate-spin-slow" />
              <span className="font-semibold">Wheel Visualizer</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Side Drawer */}
      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isOpen = openMenus.includes(link.name);
                const hasSubmenu = Boolean(link.submenu);

                return (
                  <div key={link.name} className="border-b border-gray-200">
                    <button
                      onClick={() => {
                        if (hasSubmenu) {
                          setOpenMenus((prev) =>
                            prev.includes(link.name)
                              ? prev.filter((name) => name !== link.name)
                              : [...prev, link.name]
                          );
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                      className="w-full flex justify-between items-center px-4 py-3 text-gray-800 font-medium hover:text-[#8B0000] transition-colors"
                    >
                      <span>{link.name}</span>
                      {hasSubmenu && (
                        <motion.span
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-500"
                        >
                          <MdOutlineKeyboardArrowRight />
                        </motion.span>
                      )}
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {hasSubmenu && isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-2 px-6 pb-3"
                        >
                          {link.submenu?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-gray-600 hover:text-[#8B0000] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Wheel Visualizer Button */}
              <div className="p-4">
                <Link
                  href="/wheel-visualizer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-md border-2 border-[#8B0000] transition-all duration-300 hover:bg-white hover:text-[#8B0000] w-full justify-center"
                >
                  <FaCog className="text-lg animate-spin-slow" />
                  <span className="font-semibold">Wheel Visualizer</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
