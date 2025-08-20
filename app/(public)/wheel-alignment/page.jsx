"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCarAlt, FaWrench, FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";
import HeroSection from "@/components/common/HeroSection";
import CustomUnderline from "@/components/common/CustomUnderline";
import Container from "@/components/layout/Container";

export default function WheelAlignmentPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <HeroSection
        title="Wheel Alignment "
        colorTitle="Services"
        description="Ensure your vehicle drives straight, smooth, and safely. We offer expert wheel alignment for all types of vehicles."
      />

      {/* What is Wheel Alignment? */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            What is Wheel Alignment?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Wheel alignment adjusts your vehicle’s suspension system to ensure
            your tires meet the road at the correct angle. Proper alignment
            improves handling, reduces tire wear, and ensures your car drives
            straight.
          </p>
        </motion.div>
      </section>

      {/* Signs You Need a Wheel Alignment */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            Signs You Need a Wheel Alignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaChevronCircleRight size={40} />,
                title: "Car Pulls to One Side",
              },
              {
                icon: <FaChevronCircleRight size={40} />,
                title: "Uneven Tire Wear",
              },
              {
                icon: <FaChevronCircleRight size={40} />,
                title: "Steering Wheel Off-Center",
              },
              {
                icon: <FaChevronCircleRight size={40} />,
                title: "Vibration While Driving",
              },
            ].map((sign, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <div className="text-[var(--color-primary)] mb-4">
                  {sign.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {sign.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Wheel Alignment Matters */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            Why Wheel Alignment Matters
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Proper wheel alignment is essential for improving your vehicle's
            performance, extending the life of your tires, and ensuring your
            safety on the road. Here’s why it matters:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8">
            {[
              {
                title: "Improve Driving Safety",
                desc: "Proper alignment ensures better control and handling of your vehicle.",
              },
              {
                title: "Extend Tire Life",
                desc: "Prevents uneven tire wear, helping your tires last longer.",
              },
              {
                title: "Save on Fuel",
                desc: "Proper alignment reduces rolling resistance and improves fuel efficiency.",
              },
              {
                title: "Better Vehicle Handling",
                desc: "Aligned wheels make your vehicle drive straight and respond better to steering inputs.",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Before & After Alignment */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border"
          >
            <h2 className="text-3xl font-semibold text-black mb-6">
              Before & After Alignment
            </h2>
            <CustomUnderline className="mb-5" />
            <p className="text-gray-600 mb-8">
              Wheel alignment can fix various issues and improve the performance
              of your vehicle. Here’s a comparison of common problems before
              alignment and the solutions after alignment:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Problem Side */}
              <div className="bg-[#f8f8f8] rounded-lg shadow-lg overflow-hidden border border-red-300">
                <h3 className="text-xl font-semibold text-black mb-4 bg-red-50 py-2">
                  Problem
                </h3>

                <div className="space-y-4 p-6">
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-[var(--color-primary)]/50 mr-4"
                    />
                    <span className="text-gray-600">Car pulls to one side</span>
                  </div>

                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-[var(--color-primary)]/50 mr-4"
                    />
                    <span className="text-gray-600">Uneven tire wear</span>
                  </div>
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-[var(--color-primary)]/50 mr-4"
                    />
                    <span className="text-gray-600">
                      Vibrating steering wheel
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-[var(--color-primary)]/50 mr-4"
                    />
                    <span className="text-gray-600">Poor fuel economy</span>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="bg-[#f8f8f8] rounded-lg shadow-lg border border-green-300 overflow-hidden">
                <h3 className="text-xl font-semibold text-black mb-4 py-2 bg-green-50">
                  Solution
                </h3>
                <div className="space-y-4 p-6">
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-green-400 mr-4"
                    />
                    <span className="text-gray-600">
                      Drives straight and balanced
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-green-400 mr-4"
                    />
                    <span className="text-gray-600">Tires wear evenly</span>
                  </div>
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-green-400 mr-4"
                    />
                    <span className="text-gray-600">Smooth steering</span>
                  </div>
                  <div className="flex items-center">
                    <FaChevronCircleRight
                      size={20}
                      className="text-green-400 mr-4"
                    />
                    <span className="text-gray-600">
                      Better fuel efficiency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Book Your Wheel Alignment */}
      <section
        id="book-appointment"
        className="py-16 px-6 bg-[var(--color-primary)] text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-white"
        >
          Book Your Wheel Alignment Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Get your vehicle aligned by our professionals and experience improved
          handling, better tire wear, and increased safety.
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
