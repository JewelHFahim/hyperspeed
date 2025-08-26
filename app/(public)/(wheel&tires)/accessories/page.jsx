"use client";

import PartsSelector from "@/components/home/PartsSelector";
import Breadcumb from "@/components/common/Breadcumb";
import HeroSection from "@/components/common/HeroSection";
import CustomUnderline from "@/components/common/CustomUnderline";
import { motion } from "framer-motion";
import Image from "next/image";
import { GiCarWheel } from "react-icons/gi";

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Breadcrumb */}
      <Breadcumb title="Accessories" />

      {/* Hero Section */}
      <HeroSection
        title="Car"
        colorTitle="Accessories"
        description="Enhance comfort, style, and performance with premium accessories."
      />

      {/* Selection Widget */}
      <PartsSelector title="Find the Perfect Rims for Your Vehicle" />

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">
            {" "}
            Explore Our Accessories{" "}
          </h2>
          <CustomUnderline className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Floor Mats" },
              { title: "Seat Covers" },
              { title: "Lighting" },
              { title: "Car Covers" },
              { title: "Phone Mounts" },
              { title: "Roof Racks" },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative border border-gray-300 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src="/images/Accessories.png"
                  alt={cat.title}
                  width={500}
                  height={300}
                  className="object-cover w-full group-hover:scale-110 transition-transform duration-500"
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
            Why Choose Our <span className="text-[var(--color-primary)]"> Accessories ?</span>
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Designed to fit perfectly with your vehicle.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Durable and made from high-quality materials.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Enhance comfort, safety, and convenience.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Wide range of options to suit every style.
            </li>
            <li className="flex items-center gap-2">
              <GiCarWheel className="text-lg text-green-500" />
              Affordable pricing with premium quality.
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
            alt="Accessories Showcase"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Upgrade Your Ride with Premium Accessories
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
