"use client";

import { FaSnowflake, FaCar, FaShieldAlt } from "react-icons/fa";
import Container from "@/components/layout/Container";
import HeroSection from "@/components/common/HeroSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MpiWinterTireProgramPage() {

  return (
    <main className="min-h-screen">

      <HeroSection title="AMPI Winter" colorTitle="Tire Program" description=" Eligible Manitobans can finance winter tires and installation at low interest through Hyper Speed Performance. Don’t miss out—see if you qualify!"/>


      {/* Hero split section */}
      <section className="relative bg-gray-100 bg-gradient-to-r from-[#e60023 ] via-[#a5001a ] to-blac k">
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-16">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              MPI Winter <span className="text-[var(--color-primary)]">Tire Program</span>
            </h1>
            <p className="text-lg text-black leading-relaxed">
              Eligible Manitobans can finance winter tires and installation at
              low interest through Hyper Speed Performance. Don’t miss out—see
              if you qualify!
            </p>
            <Link
              href="#eligibility"
              className="inline-block bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-black transition-colors"
            >
              Check Your Eligibility
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
              src="/images/g3.webp" // <- Add this image in public/images
              alt="Winter tires"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
        </Container>
      </section>

      {/* Benefits section */}
      <section className="py-16 px-6 bg-blac k">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Why Choose MPI Winter Tire Program?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Drive safe and save money with flexible financing, professional
            installation, and trusted tire brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaSnowflake size={40} />,
              title: "Winter Safety",
              desc: "Enhanced traction and control in snow, ice, and cold weather.",
            },
            {
              icon: <FaCar size={40} />,
              title: "Affordable Financing",
              desc: "Low-interest payments make safe driving accessible for everyone.",
            },
            {
              icon: <FaShieldAlt size={40} />,
              title: "Professional Installation",
              desc: "Installed by certified technicians for reliability and peace of mind.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-[#e60023] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eligibility Section */}
      <section
        id="eligibility"
        className="mt-12 py-16 px-6 bg-[var(--color-primary)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Check Your Eligibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8"
          >
            Fill in a quick form to see if you qualify for financing through the
            MPI Winter Tire Program.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e60023] px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </main>
  );
}
