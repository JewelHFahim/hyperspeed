"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCog, FaBalanceScale, FaTools, FaCarAlt } from "react-icons/fa";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/layout/Container";
import CustomUnderline from "@/components/common/CustomUnderline";

export default function WheelMountingBalancingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection
        title="  Wheel Mounting & Balancing "
        colorTitle="Services"
        description="  Ensure your vehicle runs smoothly with our expert wheel mounting and balancing services."
      />

      {/* Hero split section */}
      <section className="relative bg-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                Why Wheel Mounting & Balancing is Essential
                <span className="text-[var(--color-primary)]"> Essential </span>
              </h1>
              <p className="text-lg text-black leading-relaxed">
                Proper wheel mounting and balancing are vital for a smooth
                driving experience, better fuel efficiency, and extended tire
                life. If your wheels are out of balance, it can lead to uneven
                tire wear and poor handling, which may even damage your
                suspension system.
              </p>
            </motion.div>

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src="/images/g3.webp"
                alt="Winter tires"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            Our Wheel Mounting & Balancing Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCarAlt size={40} />,
                title: "Step 1: Vehicle Preparation",
                desc: "We safely lift your vehicle and remove the wheels for inspection.",
              },
              {
                icon: <FaTools size={40} />,
                title: "Step 2: Mounting the Tire",
                desc: "The tire is properly mounted onto the wheel with care and precision.",
              },
              {
                icon: <FaBalanceScale size={40} />,
                title: "Step 3: Balancing",
                desc: "We balance the wheels to ensure smooth driving and avoid uneven wear.",
              },
              {
                icon: <FaCog size={40} />,
                title: "Step 4: Reinstallation",
                desc: "The wheels are installed back onto the vehicle, ensuring everything is aligned.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <div className="text-[var(--color-primary)] mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            Pricing for Wheel Mounting & Balancing
          </h2>

          <CustomUnderline className="mb-5" />
          
          <p className="text-gray-600 mb-8">
            Affordable pricing for high-quality wheel mounting and balancing
            services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Mounting & Balancing",
                price: "$49.99",
                desc: "Includes mounting and balancing of 1 tire.",
              },
              {
                title: "Full Set of 4",
                price: "$179.99",
                desc: "Includes mounting and balancing of 4 tires.",
              },
              {
                title: "Additional Services",
                price: "Varies",
                desc: "Includes tire rotation, valve replacement, and more.",
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-black mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600">{plan.desc}</p>
                <p className="text-[var(--color-primary)] text-lg font-semibold">
                  {plan.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Schedule Inspection */}
      <section id="schedule" className="py-16 px-6 bg-[var(--color-primary)] text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-white"
        >
          Schedule Your Wheel Mounting & Balancing Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Book your appointment today and enjoy a smoother, safer ride with
          perfectly balanced wheels.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
        >
          Book Your Service
        </motion.a>
      </section>
    </main>
  );
}
