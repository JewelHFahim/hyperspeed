"use client";

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
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-6 text-sm">
        <div className="max-w-7xl mx-auto">
          <span className="text-gray-500">Home</span> /{" "}
          <span className="font-semibold text-[var(--color-primary)]">Rims</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black text-white">
        <Image
          src="/images/slider3.jpg"
          alt="Premium Rims"
          fill
          className="object-cover opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider">
            Premium Rims
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Style, performance, and durability in every wheel.
          </p>
        </motion.div>
      </section>

      {/* Selection Widget */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Find the Perfect Rims for Your Vehicle
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Use our advanced selector tool to explore rims tailored to your car’s make, model, and size.
        </p>
        <div className="border rounded-xl overflow-hidden shadow-lg">
          {/* TireConnect iframe-style integration */}
          <div id="tireconnect" className="w-full min-h-[600px]" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                TCWidget.init({
                  apikey: 'a8a72a2c519972b3e6b8866d7fc9229d',
                  container: 'tireconnect'
                });
              `,
            }}
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Rim Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Alloy Rims", img: "/images/rims/alloy.jpg" },
              { title: "Chrome Rims", img: "/images/rims/chrome.jpg" },
              { title: "Matte Black", img: "/images/rims/matte-black.jpg" },
              { title: "Performance", img: "/images/rims/performance.jpg" },
              { title: "Luxury", img: "/images/rims/luxury.jpg" },
              { title: "Off-Road", img: "/images/rims/offroad.jpg" },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative border rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
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
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Rims?</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>✅ Engineered with top-grade alloys for maximum durability.</li>
            <li>✅ Multiple finishes: matte, gloss, chrome, and custom paints.</li>
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
            src="/images/rims-showcase.jpg"
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


export default RimsPage