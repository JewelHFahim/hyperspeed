"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function BrandCard({ logo, bgImage, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center justify-center border border-gray-200 overflow-hidden p-4 rounded-lg group"
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt={`${name} background`}
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blac k bg-opacity-10"></div>

      {/* Brand logo */}
      <Image
        src={logo}
        alt={name}
        width={150}
        height={80}
        className="relative z-10 object-contain"
      />

      {/* Glow border animation */}
      <div className="glow absolute inset-0 rounded-lg pointer-events-none"></div>
    </motion.div>
  );
}
