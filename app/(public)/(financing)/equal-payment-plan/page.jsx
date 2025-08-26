"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaRegMoneyBillAlt,
  FaTools,
  FaCarAlt,
  FaClipboardCheck,
  FaUniversity,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/layout/Container";
import CustomUnderline from "@/components/common/CustomUnderline";
import { IoCalendarOutline } from "react-icons/io5";

import { FiCalendar } from "react-icons/fi";

export default function EqualPaymentPlanPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection
        title="Plan for Your Car"
        colorTitle="Services and Parts"
        description=" Keep your car running smoothly and your wallet happy with flexible financing options."
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
                Buy now, pay later with{" "}
                <span className="text-[var(--color-primary)]"> Fairstone </span>
              </h1>
              <p className="text-lg text-black leading-relaxed">
                Enjoy the products you want today and pay over time with
                flexible financing options, both in-store and online.
              </p>
              <Link
                href="#eligibility"
                className="inline-block bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-black transition-colors"
              >
                Apply NOw
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

      {/* Equal Payment Plan Options */}
      <Container>
        <section className="py-16 my-10 bg-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-black mb-6">
              Choose Your Equal Payment Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "3 Months",
                  desc: "No interest if paid in full within 3 months. Min. $149.99 purchase.",
                  fee: "No fee",
                },
                {
                  title: "6 Months",
                  desc: "No interest if paid in full within 6 months. Min. $289.99 purchase.",
                  fee: "$29.99 admin fee",
                },
                {
                  title: "12 Months",
                  desc: "No interest if paid in full within 12 months. Min. $389.99 purchase.",
                  fee: "$69.99 admin fee",
                },
                {
                  title: "18 Months",
                  desc: "Low interest. Min. $599.99 purchase.",
                  fee: "$99.99 admin fee",
                },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[#f8f8f8] border border-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <IoCalendarOutline
                    size={30}
                    className="text-[var(--color-primary)] mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-">
                    {plan.title}
                  </h3>
                  {/* <p className="text-gray-600">{plan.desc}</p> */}
                  <p className="text-gray-500 font-medium">{plan.fee}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </Container>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-black mb-6">
              How It Works
            </h2>

            <CustomUnderline className="mb-7"/>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaClipboardCheck size={40} />,
                  title: "1. Apply",
                  desc: "Fill out a simple form and get instant results.",
                },
                {
                  icon: <FaRegMoneyBillAlt size={40} />,
                  title: "2. Choose",
                  desc: "Select your financing plan at checkout.",
                },
                {
                  icon: <FaCarAlt size={40} />,
                  title: "3. Service",
                  desc: "Get your car serviced or purchase parts.",
                },
                {
                  icon: <FaTools size={40} />,
                  title: "4. Pay Later",
                  desc: "Enjoy your purchase and pay later over time.",
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

      {/* Three Easy Ways to Pay */}
      <section className="py-16 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-black mb-6">
            Three Easy Ways to Pay
          </h2>

          <p className="text-gray-600 mb-8">
            Choose the option that suits you best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUniversity size={40} />,
                title: "Online Banking",
                desc: "Use your financial institution’s platform to make payments.",
              },
              {
                icon: <FaRegEnvelope size={40} />,
                title: "Mailed Cheques",
                desc: "Mail to 630 René-Lévesque Blvd. West, Suite 1400, Montréal, QC, H3B 1S6",
              },
              {
                icon: <FaMapMarkerAlt size={40} />,
                title: "At a Fairstone Branch",
                desc: "Visit a local branch using the locator tool.",
              },
            ].map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <div className="text-[var(--color-primary)] mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Disclaimers Section */}
      <section className="py-8 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-gray-500 text-sm">
            <strong>
              ¹ Minimum payment of 1% of your balance will be due each billing
              cycle.
            </strong>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Admin fees and interest may apply based on plan type. Approvals
            subject to credit checks by Fairstone Financial Inc.
          </p>
        </motion.div>
      </section>

      {/* Final Call-to-Action */}
      <section id="apply" className="py-16 px-6 bg-[var(--color-primary)] text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-white"
        >
          Apply for Financing Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Get approved in just a few minutes and enjoy stress-free car servicing
          and part purchases with easy financing.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
        >
          Start Your Application
        </motion.a>
      </section>
    </main>
  );
}
