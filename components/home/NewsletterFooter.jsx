"use client";

import { motion } from "framer-motion";

 function NewsletterFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)] to-black animate-gradient-x"></div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        {/* Left Text */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-extrabold tracking-wide text-center md:text-left"
        >
          Stay updated with our{" "}
          <span className="text-black bg-white px-2 py-1 rounded-md">
            latest offers
          </span>
        </motion.h3>

        {/* Subscription Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full md:w-auto bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full md:w-80 text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-[var(--color-primary)] transition-colors duration-300"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default NewsletterFooter;