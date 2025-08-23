"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/common/HeroSection";
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShield,
  FiChevronRight,
  FiFileText,
  FiTool,
  FiInfo,
} from "react-icons/fi";
import {
  GiCarWheel,
  GiSteeringWheel,
  GiSuspensionBridge,
} from "react-icons/gi";

export default function ManitobaSafetyInspectionPage() {
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
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <HeroSection
        title="Manitoba Safety"
        colorTitle="Inspection"
        description="Book a provincially‑licensed vehicle safety inspection. Clear checklist, transparent pricing, and fast turnaround."
      />

      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(0,122,255,0.11),transparent),radial-gradient(60%_60%_at_85%_10%,rgba(255,99,71,0.10),transparent)]" />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            backgroundImage: "url('/textures/noise.png')",
            opacity: 0.08,
          }}
        />
      </div>

      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Provincial{" "}
              <span className="text-[var(--color-primary)]">
                Safety Inspection
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-lg text-gray-700"
            >
              We perform full safety inspections for passenger cars, SUVs, and
              light trucks. You'll receive a detailed report with pass/fail
              items and recommendations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--color-primary)] px-6 py-3 text-white font-semibold hover:bg-black transition-colors"
              >
                Book inspection
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
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
                { icon: <FiShield />, text: "License facility" },
                { icon: <FiFileText />, text: "Digital report" },
              ].map((f, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-center gap-2 rounded-2xl bg-white/70 backdrop-blur border border-black/5 px-4 py-3 shadow-sm"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {f.icon}
                  </span>
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
                alt="Safety inspection bay"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur px-3 py-2 text-sm shadow">
                <GiSteeringWheel className="text-[var(--color-primary)]" />{" "}
                Certified inspectors
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we check */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            What’s included in the inspection
          </h2>
          <p className="text-gray-700 mt-2">
            A comprehensive safety check covering critical components. Scope may
            vary by vehicle class.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Brakes & Steering",
              d: [
                "Pads/rotors condition",
                "Hydraulic leaks",
                "Parking brake",
                "Steering free‑play & linkage",
              ],
              icon: <GiSteeringWheel />,
            },
            {
              t: "Suspension & Driveline",
              d: [
                "Ball joints & bushings",
                "Shocks/struts",
                "CV boots & axles",
                "Wheel bearings",
              ],
              icon: <GiSuspensionBridge />,
            },
            {
              t: "Tires, Lights & Body",
              d: [
                "Tire tread & size",
                "Head/taillights & signals",
                "Glass, mirrors, wipers",
                "Frame/corrosion (visual)",
              ],
              icon: <GiCarWheel />,
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
            >
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-black/90 text-white">
                  {s.icon}
                </span>
                {s.t}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {s.d.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> {x}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bring these */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">What to bring</h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Photo ID", d: "Driver’s license or government‑issued ID." },
              {
                t: "Vehicle ownership",
                d: "Registration or proof of ownership.",
              },
              {
                t: "Insurance (if applicable)",
                d: "Proof may be requested for road test.",
              },
              {
                t: "Previous reports (optional)",
                d: "Any recent inspection notes help speed things up.",
              },
              {
                t: "Out‑of‑province info",
                d: "If recently purchased/imported, bring sale bill and docs.",
              },
              {
                t: "The vehicle",
                d: "Fuelled and free of cargo to access jacking points.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-black/5 bg-white p-4"
              >
                <p className="font-semibold">{x.t}</p>
                <p className="text-sm text-gray-700">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-start gap-2 text-sm text-gray-700">
            <FiInfo className="mt-0.5" /> Requirements can vary by vehicle class
            and circumstance. We’ll confirm details when you book.
          </p>
        </div>
      </section>

      {/* Pass vs. Fix & Retest */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-green-700">
              <FiCheckCircle /> Pass
            </h3>
            <p className="mt-2 text-gray-700">
              You’ll receive a digital copy of the inspection report and
              certificate of inspection (where applicable). Keep it for your
              records and any registration needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-red-600">
              <FiAlertTriangle /> Fix & retest
            </h3>
            <p className="mt-2 text-gray-700">
              If something fails, we’ll walk you through exactly what’s needed.
              Repairs can be done here or at a facility of your choice. Retest
              options are available—ask us for timelines and fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[var(--color-primary)] text-white p-6 md:p-8 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Pricing</h2>
              <p className="mt-1 text-white/80">
                Transparent pricing for passenger vehicles. Commercial or
                modified vehicles may vary—contact us for a quote.
              </p>
              <a
                href="#book"
                className="w-max rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center gap-2 my-5"
              >
                Book inspection <FiChevronRight />
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <FiClock /> Mon–Sat, 9–6
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiPhone /> +1 (437) 555‑0146
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiMapPin /> 125 King St W, Winnipeg
                </span>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-white/70 text-black p-5 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold">Passenger vehicles</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Full safety
                    inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Digital report
                    & photos
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Road test
                  </li>
                </ul>
                <div className="mt-4 rounded-xl bg-white/40 p-4">
                  <p className="text-3xl font-extrabold">
                    $<span className="tabular-nums">149</span>
                    <span className="text-base align-top"> CAD</span>
                  </p>
                  <p className="text-xs text-gray-600">
                    Price before tax. Trucks/SUVs or specialty vehicles may
                    differ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FiTool className="absolute -right-10 -top-14 h-44 w-44 opacity-20 rotate-12" />
        </div>
      </section>

      {/* Prep tips */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Quick prep tips</h2>
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              {
                t: "All lights working",
                d: "Check headlamps, signals, brake, reverse, and plate lights.",
              },
              {
                t: "Tire health",
                d: "Ensure safe tread depth and no exposed cords or sidewall.",
              },
              {
                t: "No warning lights",
                d: "Address ABS/airbag warnings before arriving if possible.",
              },
              {
                t: "No major leaks",
                d: "Fix obvious fuel/brake/hydraulic leaks that will fail quickly.",
              },
            ].map((s, i) => (
              <motion.li key={i} variants={item} className="relative">
                <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-black/90 text-white">
                    {i + 1}
                  </span>
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

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            Manitoba Safety FAQ
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Faq
              q="How long does the inspection take?"
              a="Most vehicles are completed within 60–90 minutes depending on condition and backlog."
            />
            <Faq
              q="Do you repair failed items?"
              a="Yes, we can quote and complete most repairs in‑house. You're free to choose any repair shop."
            />
            <Faq
              q="Is this valid for out‑of‑province vehicles?"
              a="Yes—please bring your documentation. Additional checks may apply based on vehicle history."
            />
            <Faq
              q="What vehicles do you inspect?"
              a="Passenger cars, SUVs, and light trucks. For commercial or modified vehicles, contact us for scope and pricing."
            />
          </div>
          <p className="mt-3 text-xs text-gray-600">
            Note: Provincial rules and documentation requirements can change.
            We’ll confirm current details when booking.
          </p>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[var(--color-primary)] text-white p-6 md:p-8 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">
                Book your safety inspection
              </h2>
              <p className="mt-1 text-white/80">
                Pick a time that works. We’ll send prep tips and confirm
                documentation by email.
              </p>
              <a
                href="#"
                className="w-max rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center gap-2 my-5"
              >
                Book now <FiChevronRight />
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <FiClock /> Mon–Sat, 9–6
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiPhone /> +1 (437) 555‑0146
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiMapPin /> 125 King St W, Winnipeg
                </span>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-white/70 text-black p-5 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold">What’s included</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Licensed safety
                    inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Digital report
                    & photos
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Pass/fail
                    summary & next steps
                  </li>
                </ul>
                <div className="mt-4 rounded-xl bg-white/40 p-4">
                  <p className="text-xs text-gray-600">
                    Taxes extra. Terms apply. Requirements may vary by vehicle
                    class.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FiTool className="absolute -right-10 -top-14 h-44 w-44 opacity-20 rotate-12" />
        </div>
      </section>

      {/* Terms */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-black/5 bg-white p-4 text-xs text-gray-600">
          <p className="font-semibold mb-1">Important</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Inspection scope and documentation can change by regulation. We
              confirm current requirements when you schedule.
            </li>
            <li>
              Pricing based on typical passenger vehicles; final quotes depend
              on vehicle class and condition.
            </li>
            <li>
              Repairs are quoted separately. Retest availability and fees vary
              by case.
            </li>
          </ul>
        </div>
      </section>
    </main>
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
