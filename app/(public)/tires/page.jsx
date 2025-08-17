"use client";

import HeroSection from "@/components/common/HeroSection";
import PartsSelector from "@/components/home/PartsSelector";
import CustomUnderline from "@/components/common/CustomUnderline";
import Breadcumb from "@/components/common/Breadcumb";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TiresPage() {


  return (
    <main className="min-h-screen bg-white text-black">

      {/* Breadcrumb */}
      <Breadcumb title="Tires"/>

      {/* Hero Section */}
      <HeroSection title="Premium" colorTitle="Tires" description="Enhance comfort, style, and performance with premium accessories."/>

      {/* Tire Selector Widget */}
      <PartsSelector title="Find the Right Tires for Your Vehicle" description=""/>


      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Tire Categories</h2>
           <CustomUnderline className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Alloy Rims"},
              { title: "Chrome Rims"},
              { title: "Matte Black"},
              { title: "Performance"},
              { title: "Luxury"},
              { title: "Off-Road"},
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
          <h2 className="text-3xl font-bold mb-4">Why <span className="text-[var(--color-primary)]"> Choose</span> Our Tires?</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>✅ Enhanced safety and grip in all driving conditions.</li>
            <li>✅ Optimized tread patterns for longer lifespan.</li>
            <li>✅ Fuel-efficient designs to save on gas.</li>
            <li>✅ Trusted brands with performance pedigree.</li>
            <li>✅ Options for every season and terrain.</li>
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
            alt="Tires Showcase"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Get the Best Tires for Your Drive
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
