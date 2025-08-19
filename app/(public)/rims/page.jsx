"use client";

import CustomUnderline from "@/components/common/CustomUnderline";
import HeroSection from "@/components/common/HeroSection";
import PartsSelector from "@/components/home/PartsSelector";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      {/* 🔹 Hero Section */}
      <HeroSection title="Premium" colorTitle="Rims" description="Style, performance and durability in every wheel."/>

      {/* Selection Widget */}
      <PartsSelector title="Find the Perfect Rims for Your Vehicle" />

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-">
            <span className="text-[#e60023]">Rim</span> Categories
          </h2>

          <CustomUnderline className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Alloy Rims", img: "/images/g2.webp" },
              { title: "Chrome Rims", img: "/images/rim1.jpg" },
              { title: "Matte Black", img: "/images/rim1.jpg" },
              { title: "Performance", img: "/images/rim1.jpg" },
              { title: "Luxury", img: "/images/rim1.jpg" },
              { title: "Off-Road", img: "/images/rim1.jpg" },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative border rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src="/images/g2.webp"
                  alt={cat.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{cat.title}</h3>
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
            Why <span className="text-[#e60023]"> Choose </span>
            Our Rims?
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>✅ Engineered with top-grade alloys for maximum durability.</li>
            <li>
              ✅ Multiple finishes: matte, gloss, chrome, and custom paints.
            </li>
            <li>✅ Precision-designed for performance and safety.</li>
            <li>✅ Lightweight construction for improved handling.</li>
            <li>✅ Easy care and resistant to weather conditions.</li>
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
      <section className="bg-[#e60023] text-white py-16">
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
