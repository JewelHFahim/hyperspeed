// app/(public)/financial/equal-payment-plan/page.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaWallet,
  FaRegCalendarAlt,
  FaClipboardCheck,
  FaShoppingCart,
  FaRegClock,
  FaUniversity,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function EqualPaymentPlanPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#e60023] via-[#a5001a] to-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Equal Payment Plan
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Buy now, pay later with Fairstone. Enjoy the products you want
              today and pay over time with flexible financing options, both
              in-store and online.
            </p>
            <Link
              href="#apply"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              Start Your Application
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/finance-hero.jpg" // <-- Add finance-related image in public/images
              alt="Equal Payment Plan"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Relaxed Financing Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Relaxed Financing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Shop stress-free with flexible payment options. Break down your
            purchase into easy monthly payments with Fairstone.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "3 Month",
              desc: "No interest if paid in full within 3 months. Min. $149.99 purchase.",
              fee: "No fee",
            },
            {
              title: "6 Month",
              desc: "No interest if paid in full within 6 months. Min. $289.99 purchase.",
              fee: "$29.99 admin fee",
            },
            {
              title: "12 Month",
              desc: "No interest if paid in full within 12 months. Min. $389.99 purchase.",
              fee: "$69.99 admin fee",
            },
            {
              title: "18 Month",
              desc: "Low interest. Min. $599.99 purchase.",
              fee: "$99.99 admin fee",
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition-transform shadow-lg"
            >
              <FaRegCalendarAlt
                size={40}
                className="text-[#e60023] mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{plan.desc}</p>
              <p className="text-gray-300 font-medium">{plan.fee}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here's how it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaClipboardCheck size={40} />,
              title: "1. Apply",
              desc: "Complete a simple form and get instant results.",
            },
            {
              icon: <FaWallet size={40} />,
              title: "2. Choose",
              desc: "Pick Best Buy Financing at checkout.",
            },
            {
              icon: <FaShoppingCart size={40} />,
              title: "3. Checkout",
              desc: "Select your plan and place the order.",
            },
            {
              icon: <FaRegClock size={40} />,
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
              className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-[#e60023] mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Three Ways to Pay */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Easy Ways to Pay
          </h2>
          <p className="text-gray-400">
            Choose the payment option that suits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaUniversity size={40} />,
              title: "Online Banking",
              desc: "Use your bank’s platform to make payments.",
            },
            {
              icon: <FaRegEnvelope size={40} />,
              title: "Mailed Cheques",
              desc: "Mail to 630 René-Lévesque Blvd. West, Suite 1400, Montréal, QC.",
            },
            {
              icon: <FaMapMarkerAlt size={40} />,
              title: "Visit a Branch",
              desc: "Pay at your nearest Fairstone branch.",
            },
          ].map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-[#e60023] mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-400">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="apply"
        className="py-16 px-6 bg-gradient-to-r from-[#e60023] via-[#a5001a] to-black text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Apply for Best Buy Financing Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Find out if you’re approved in just a few minutes and enjoy flexible,
          stress-free financing with Fairstone.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
        >
          Start Your Application
        </motion.a>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 bg-black text-gray-500 text-sm max-w-5xl mx-auto">
        <p>
          ¹ Minimum payment of 1% of your balance will be due each billing
          cycle. Admin fees and interest may apply based on plan type. Approvals
          subject to credit checks by Fairstone Financial Inc.
        </p>
      </section>
    </main>
  );
}
