"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaClipboardCheck,
  FaTools,
  FaCarAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/layout/Container";
import CustomUnderline from "@/components/common/CustomUnderline";

export default function ManitobaSafetyInspectionPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection
        title="Manitoba"
        colorTitle="Safety Inspection"
        description=" Ensure your vehicle meets safety standards with our trusted and certified inspection services."
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
                What is Manitoba
                <span className="text-[var(--color-primary)]"> Safety Inspection? </span>
              </h1>
              <p className="text-lg text-black leading-relaxed">
                Manitoba Safety Inspection is a comprehensive inspection process
                to ensure your vehicle complies with the province’s safety
                regulations. Our licensed professionals will ensure your vehicle
                is in top condition and safe for the road.
              </p>
              <Link
                href="#eligibility"
                className="inline-block bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-black transition-colors"
              >
                Book Your Inspection
              </Link>
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-black mb-6">
              How the Manitoba Safety Inspection Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaClipboardCheck size={40} />,
                  title: "Step 1: Book Your Inspection",
                  desc: "Choose a convenient time for your vehicle's safety inspection.",
                },
                {
                  icon: <FaCarAlt size={40} />,
                  title: "Step 2: Vehicle Inspection",
                  desc: "Our experts will perform a thorough inspection of your vehicle.",
                },
                {
                  icon: <FaRegCheckCircle size={40} />,
                  title: "Step 3: Pass or Repair",
                  desc: "If your vehicle passes, you get certified. If repairs are needed, we’ll guide you.",
                },
                {
                  icon: <FaTools size={40} />,
                  title: "Step 4: Ready to Drive",
                  desc: "Once everything is cleared, you are good to drive, knowing your vehicle is safe.",
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
        </Container>
      </section>

      {/* Inspection Prices & Services */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            Our Services & Pricing
          </h2>

          <CustomUnderline className="mb-5"/>

          <p className="text-gray-600 mb-8">
            Affordable, transparent pricing for a full vehicle safety
            inspection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Inspection",
                price: "$99",
                desc: "Basic safety check covering key areas like brakes, lights, and tires.",
              },
              {
                title: "Full Inspection",
                price: "$149",
                desc: "Comprehensive inspection including all major vehicle components.",
              },
              {
                title: "Fleet Inspection",
                price: "$89 per vehicle",
                desc: "For businesses needing multiple vehicle inspections at once.",
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f8f8] p-6 rounded- shadow-lg hover:scale-105 transition-transform"
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
          Schedule Your Manitoba Safety Inspection Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Don’t wait for your next inspection – schedule today and keep your
          vehicle in top condition.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
        >
          Book Your Inspection
        </motion.a>
      </section>
    </main>
  );
}
