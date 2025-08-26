"use client";

import CustomUnderline from "@/components/common/CustomUnderline";
import HeroSection from "@/components/common/HeroSection";
import PartsSelector from "@/components/home/PartsSelector";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GiCarWheel } from "react-icons/gi";

function RimsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the TireConnect widget script dynamically
    const script = document.createElement("script");
    script.src = "https://app.tireconnect.ca/js/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.TCWidget) {
        window.TCWidget.init({
          apikey: "a8a72a2c519972b3e6b8866d7fc9229d",
          container: "tireconnect",
        });
        setIsLoading(false);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <HeroSection
        title="Premium"
        colorTitle="Rims"
        description="Style, performance and durability in every wheel."
      />

      {/* Selection Widget */}
      <PartsSelector title="Find the Perfect Rims for Your Vehicle" />

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-">
            <span className="text-[var(--color-primary)]">Rim</span> Categories
          </h2>

          <CustomUnderline className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Alloy Rims", img: "/images/w1.png" },
              { title: "Chrome Rims", img: "/images/w3.png" },
              { title: "Matte Black", img: "/images/w4.webp" },
              { title: "Performance", img: "/images/w5.webp" },
              { title: "Luxury", img: "/images/w6.webp" },
              { title: "Off-Road", img: "/images/w7.png" },
              { title: "Alloy Rims", img: "/images/w1.png" },
              { title: "Chrome Rims", img: "/images/w3.png" },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative border border-gray-300 rounded-xl overflow-hidden group cursor-pointer p-4"
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={500}
                  height={300}
                  className="object-cover w-full  group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 flex items-end pb-2 justify-center">
                  <h3 className="text-white text-lg rounded-md bg-black/50 px-4 py-1">
                    {cat.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our{" "}
            <span className="text-[var(--color-primary)]"> Rims?</span>
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Engineered with top-grade alloys for maximum durability.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Multiple finishes: matte, gloss, chrome, and custom paints.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />{" "}
              Precision-designed for performance and safety.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" /> Lightweight
              construction for improved handling.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" /> Easy care and
              resistant to weather conditions.
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-80 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/g2.webp"
            alt="Rim Showcase"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Upgrade Your Vehicle’s Look Today
          </h3>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="bg-black px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </main>
  );
}

export default RimsPage;
