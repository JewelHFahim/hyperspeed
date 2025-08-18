"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiPhone,
  FiArrowRight,
  FiAlertTriangle,
  FiTool,
  FiShield,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";
import { PiSteeringWheel } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";

export default function ServicePage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(0,122,255,0.11),transparent),radial-gradient(60%_60%_at_85%_10%,rgba(255,99,71,0.10),transparent)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: "url('/textures/noise.png')", opacity: 0.08 }} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Precision <span className="text-[#e60023]">Wheel Alignment</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-lg text-gray-700"
            >
              Better handling, even tire wear, safer braking. Our laser-guided alignment gets your car back to factory specs—and your ride back to smooth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[#e60023] px-6 py-3 text-white font-semibold hover:bg-black transition-colors"
              >
                Book an appointment <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+14375550146"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur border border-black/5 px-6 py-3 font-semibold hover:bg-white"
              >
                <FiPhone /> Call us
              </a>
            </motion.div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { icon: <FiClock />, text: "Same‑day slots" },
                { icon: <FiShield />, text: "12‑month guarantee" },
                { icon: <FiStar />, text: "4.9★ local rating" },
              ].map((f, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-center gap-2 rounded-2xl bg-white/70 backdrop-blur border border-black/5 px-4 py-3 shadow-sm"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e60023]/10 text-[#e60023]">{f.icon}</span>
                  <span className="font-medium">{f.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white to-gray-50 shadow-xl">
              <Image
                src="/images/g3.webp"
                alt="Wheel alignment bay"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur px-3 py-2 text-sm shadow">
                <PiSteeringWheel className="text-[#e60023]" /> Laser-calibrated equipment
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section id="problems" className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">What’s wrong vs how we fix it</h2>
          <p className="text-gray-700 mt-2">Common symptoms and the exact alignment service that solves them.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold"><FiAlertTriangle className="text-red-500" /> Problems</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Car pulls left or right",
                "Crooked steering wheel",
                "Uneven or rapid tire wear",
                "Vibration at highway speeds",
                "After hitting a pothole/curb",
                "New suspension or lowering springs",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-md bg-red-50 text-red-600"><FiAlertTriangle /></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold"><FiTool className="text-[#e60023]" /> Solutions</h3>
            <ul className="mt-4 space-y-3">
              {[
                { t: "Front or 4‑wheel alignment", d: "Set camber, toe, caster to OEM spec." },
                { t: "Steering wheel centering", d: "Recalibrate and road‑test." },
                { t: "Tire wear correction", d: "Adjust angles + rotate and balance." },
                { t: "Highway vibration check", d: "Road force balance and toe correction." },
                { t: "Impact inspection", d: "Measure, adjust, and replace bent parts if needed." },
                { t: "Custom fitment", d: "Specs for lifted/lowered or track setups." },
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-md bg-[#e60023]/10 text-[#e60023]"><FiCheckCircle /></span>
                  <span>
                    <span className="font-semibold">{s.t}:</span> {s.d}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              { icon: <FiMapPin />, t: "Arrival & inspection", d: "We check suspension and tires first." },
              { icon: <GiCarWheel />, t: "Mount & measure", d: "Laser heads on all four wheels." },
              { icon: <PiSteeringWheel />, t: "Precision adjust", d: "Camber, caster, toe to spec." },
              { icon: <FiCheckCircle />, t: "Road test", d: "Steering wheel straight, printout provided." },
            ].map((s, i) => (
              <motion.li key={i} variants={item} className="relative">
                <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-black/90 text-white">{s.icon}</span>
                  <div>
                    <p className="font-semibold">{s.t}</p>
                    <p className="text-sm text-gray-600">{s.d}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Appointment section */}
      <section id="appointment" className="max-w-7xl mx-auto px-6 py-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[#e60023] text-white p-6 md:p-8 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Book your alignment</h2>
              <p className="mt-1 text-white/80">Pick a time that works. Most alignments take under 60 minutes.</p>

              <form className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90"
                >
                  Confirm slot <FiChevronRight className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><FiClock /> Open Mon–Sat, 9–6</span>
                <span className="inline-flex items-center gap-2"><FiPhone /> +1 (437) 555‑0146</span>
                <span className="inline-flex items-center gap-2"><FiMapPin /> 125 King St W, Toronto</span>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-white text-black p-5 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold">What’s included</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2"> <FiCheckCircle className="text-green-600" /> 4‑wheel laser alignment</li>
                  <li className="flex items-center gap-2"> <FiCheckCircle className="text-green-600" /> Steering wheel centering</li>
                  <li className="flex items-center gap-2"> <FiCheckCircle className="text-green-600" /> Before/after printout</li>
                  <li className="flex items-center gap-2"> <FiCheckCircle className="text-green-600" /> 12‑month guarantee</li>
                </ul>
                <div className="mt-4 rounded-xl bg-gray-50 p-4">
                  <p className="text-3xl font-extrabold">$<span className="tabular-nums">109</span><span className="text-base align-top"> CAD</span></p>
                  <p className="text-xs text-gray-600">Price before tax. Most cars; SUVs/trucks may vary.</p>
                </div>
              </div>
            </div>
          </div>

          <GiCarWheel className="absolute -right-10 -top-14 h-44 w-44 opacity-20 rotate-12" />
        </div>
      </section>

      {/* Results / Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold">What you’ll feel after</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "30%", l: "longer tire life" },
              { n: "↑", l: "straighter tracking" },
              { n: "↓", l: "steering vibration" },
              { n: "✓", l: "centered wheel" },
            ].map((s, i) => (
              <Stat key={i} n={s.n} l={s.l} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Faq q="Do I need an alignment after new tires?" a="Yes. New tires should start life at proper angles to avoid early wear and protect your warranty." />
            <Faq q="How long does it take?" a="Most alignments are done in under an hour, including road test and printout." />
            <Faq q="Can you align lowered cars?" a="Absolutely. We set custom specs for lowered, lifted, and track setups." />
            <Faq q="What if parts are bent?" a="We’ll show you the measurements and quote any suspension parts before proceeding." />
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ n, l }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-black/5 bg-white px-4 py-5 text-center shadow-sm"
    >
      <div className="text-3xl font-extrabold tracking-tight">{n}</div>
      <div className="text-sm text-gray-600">{l}</div>
    </motion.div>
  );
}

function Faq({ q, a }) {
  return (
    <details className="group rounded-2xl border border-black/5 bg-white p-4">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="font-semibold">{q}</span>
        <FiChevronRight className="transition-transform group-open:rotate-90" />
      </summary>
      <p className="mt-2 text-gray-700">{a}</p>
    </details>
  );
}