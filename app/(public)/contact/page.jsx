"use client";

import Breadcumb from "@/components/common/Breadcumb";
import HeroSection from "@/components/common/HeroSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// React Icons (already installed)
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiUser,
  FiMessageSquare,
  FiUpload,
  FiTruck,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { GiCarWheel, GiTireIronCross } from "react-icons/gi";
import { PiSteeringWheel } from "react-icons/pi";

export default function ContactPage() {
  const [fileName, setFileName] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen bg-white text-black">
      {/* Ambient gradient + pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(255,99,71,0.12),transparent),radial-gradient(60%_60%_at_80%_0%,rgba(0,122,255,0.10),transparent)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: "url('/textures/noise.png')", opacity: 0.08 }} />
      </div>

      {/* Breadcrumb */}
      <Breadcumb title="Contact" />

      {/* Hero Section */}
      <HeroSection
        title="Get in"
        colorTitle="Touch"
        dscription="Questions about wheels, tires, rims, or accessories? We’re here to help across Canada."
      />

      {/* Highlights / Services Pills */}
      <section className="max-w-7xl mx-auto px-6 -mt-6">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: <GiCarWheel className="text-xl" />, label: "Wheels & Rims" },
            { icon: <GiTireIronCross className="text-xl" />, label: "Tire Fitting" },
            { icon: <PiSteeringWheel className="text-xl" />, label: "Alignment" },
            { icon: <FiTruck className="text-xl" />, label: "Canada-wide Shipping" },
          ].map((pill, i) => (
            <motion.li
              key={i}
              variants={item}
              className="group flex items-center gap-2 rounded-2xl bg-white/70 backdrop-blur border border-black/5 px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="grid place-items-center h-8 w-8 rounded-xl bg-[#e60023]/10 text-[#e60023] group-hover:scale-110 transition-transform">{pill.icon}</span>
              <span className="font-medium text-sm md:text-base">{pill.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative wheel image */}
          <Image
            src="/images/wheel-overlay.png"
            alt="Wheel"
            width={420}
            height={420}
            className="pointer-events-none select-none absolute -top-16 -right-10 opacity-10 rotate-12 hidden md:block"
            priority
          />

          <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur shadow-xl">
            <div className="flex items-center gap-3 p-6 border-b border-black/5">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-[#e60023] text-white">
                <FiMessageSquare />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="text-sm text-gray-600">We respond within one business day.</p>
              </div>
            </div>

            <form className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Alex Morgan"
                    className="w-full pl-10 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone (Canada)
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (416) 555-0199"
                    className="w-full pl-10 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Wheel fitment for 2021 Civic"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="order">
                  Order # (optional)
                </label>
                <input
                  id="order"
                  type="text"
                  placeholder="AWC-12345"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="service">
                  Service type
                </label>
                <select
                  id="service"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                  defaultValue="fitment"
                >
                  <option value="fitment">Fitment advice</option>
                  <option value="quote">Quote for wheels/tires</option>
                  <option value="install">Install & alignment</option>
                  <option value="warranty">Warranty/Returns</option>
                  <option value="shipping">Shipping question</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your vehicle, driving style, and what you’re looking for."
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Attach a photo (optional)</label>
                <label
                  htmlFor="file"
                  className="flex items-center gap-3 cursor-pointer rounded-xl border border-dashed border-gray-300 px-4 py-3 hover:border-[#e60023]/60 transition"
                >
                  <FiUpload />
                  <span className="text-sm text-gray-600">
                    {fileName || "Upload wheel/tire photo or vehicle"}
                  </span>
                  <input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="preferred">
                  Preferred contact
                </label>
                <select
                  id="preferred"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60023] transition bg-white"
                  defaultValue="email"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <div className="flex items-center gap-2 sm:col-span-1 mt-2">
                <input id="subscribe" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="subscribe" className="text-sm text-gray-700">
                  Send me promos and tips
                </label>
              </div>

              <div className="flex items-start gap-2 sm:col-span-2">
                <FiShield className="mt-0.5 text-gray-400" />
                <p className="text-xs text-gray-600">
                  We respect your privacy. By submitting, you agree to our Terms and Privacy Policy.
                </p>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#e60023] px-6 py-3 font-semibold text-white transition-colors hover:bg-black"
                >
                  <span>Send message</span>
                  <span className="absolute inset-0 -z-10 rounded-xl bg-[#e60023]/40 blur-xl group-hover:opacity-0 transition-opacity" />
                </button>
                <span className="text-sm text-gray-600">Average reply time: ~4 hours</span>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info / Locations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur shadow-xl overflow-hidden">
            <div className="flex items-center gap-3 p-6 border-b border-black/5">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-black text-white">
                <FiSettings />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Contact information</h2>
                <p className="text-sm text-gray-600">Toronto HQ · Serving all provinces</p>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <InfoRow icon={<FiMapPin />} title="Address" text="125 King St W, Toronto, ON M5H 1A1, Canada" />
              <InfoRow icon={<FiPhone />} title="Phone" text="+1 (437) 555-0146" />
              <InfoRow icon={<FiMail />} title="Email" text="support@autowheel.ca" />
              <InfoRow icon={<FiClock />} title="Hours" text="Mon–Sat: 9:00–18:00 • Sun: Closed" />

              <div className="pt-2">
                <p className="text-sm font-semibold mb-2">Follow us</p>
                <div className="flex items-center gap-3">
                  <Social icon={<FiFacebook />} label="Facebook" />
                  <Social icon={<FiInstagram />} label="Instagram" />
                  <Social icon={<FiTwitter />} label="X" />
                </div>
              </div>
            </div>
          </div>

          {/* Trust / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { label: "Free Mount & Balance", icon: <GiCarWheel /> },
              { label: "Fast Shipping", icon: <FiTruck /> },
              { label: "2-Year Warranty", icon: <FiShield /> },
              { label: "Expert Fitment", icon: <PiSteeringWheel /> },
            ].map((b, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur border border-black/5 px-3 py-2 text-sm shadow-sm"
              >
                <span className="text-[#e60023]">{b.icon}</span>
                <span className="font-medium">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Google Map Section */}
      <section className="h-[420px] relative">
        <div className="absolute inset-0">
          <iframe
            title="AutoWheel Canada Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.269094072514!2d-79.38429382359225!3d43.64869087110368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b7a6c5a7%3A0x1d6bc1b7d2e2b3f!2sFirst%20Canadian%20Place!5e0!3m2!1sen!2sca!4v1683523423453!5m2!1sen!2sca"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-none" />
      </section>

      {/* CTA Bar */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[#e60023] text-white p-6 md:p-8 shadow-xl"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              Not sure what fits your ride?
            </h3>
            <p className="mt-1 text-white/80">
              Tell us your make, model, and year. Our specialists will recommend the perfect setup.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90"
              >
                Get fitment help
              </a>
              <a
                href="tel:+14375550146"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                <FiPhone className="mr-2" /> Call now
              </a>
            </div>
          </div>

          <GiCarWheel className="absolute -right-6 -top-10 h-40 w-40 opacity-20 rotate-12" />
        </motion.div>
      </section>
    </main>
  );
}

function InfoRow({
  icon,
  title,
  text,
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-[#e60023]/10 text-[#e60023]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

function Social({ icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="group grid h-9 w-9 place-items-center rounded-xl border border-black/5 bg-white/70 backdrop-blur hover:bg-black hover:text-white transition"
    >
      <span className="text-lg">{icon}</span>
    </a>
  );
}
