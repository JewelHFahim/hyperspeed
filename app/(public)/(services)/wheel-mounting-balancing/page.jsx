// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaCog, FaBalanceScale, FaTools, FaCarAlt } from "react-icons/fa";
// import HeroSection from "@/components/common/HeroSection";
// import Container from "@/components/layout/Container";
// import CustomUnderline from "@/components/common/CustomUnderline";

// export default function WheelMountingBalancingPage() {
//   return (
//     <main className="min-h-screen bg-white text-black">
//       <HeroSection
//         title="  Wheel Mounting & Balancing "
//         colorTitle="Services"
//         description="  Ensure your vehicle runs smoothly with our expert wheel mounting and balancing services."
//       />

//       {/* Hero split section */}
//       <section className="relative bg-gray-100">
//         <Container>
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
//             {/* Text side */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
//                 Why Wheel Mounting & Balancing is Essential
//                 <span className="text-[var(--color-primary)]"> Essential </span>
//               </h1>
//               <p className="text-lg text-black leading-relaxed">
//                 Proper wheel mounting and balancing are vital for a smooth
//                 driving experience, better fuel efficiency, and extended tire
//                 life. If your wheels are out of balance, it can lead to uneven
//                 tire wear and poor handling, which may even damage your
//                 suspension system.
//               </p>
//             </motion.div>

//             {/* Image side */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="flex justify-center"
//             >
//               <Image
//                 src="/images/g3.webp"
//                 alt="Winter tires"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg object-cover"
//               />
//             </motion.div>
//           </div>
//         </Container>
//       </section>

//       {/* Step-by-Step Process */}
//       <section className="py-20 bg-white">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <h2 className="text-3xl font-semibold text-black mb-6">
//             Our Wheel Mounting & Balancing Process
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <FaCarAlt size={40} />,
//                 title: "Step 1: Vehicle Preparation",
//                 desc: "We safely lift your vehicle and remove the wheels for inspection.",
//               },
//               {
//                 icon: <FaTools size={40} />,
//                 title: "Step 2: Mounting the Tire",
//                 desc: "The tire is properly mounted onto the wheel with care and precision.",
//               },
//               {
//                 icon: <FaBalanceScale size={40} />,
//                 title: "Step 3: Balancing",
//                 desc: "We balance the wheels to ensure smooth driving and avoid uneven wear.",
//               },
//               {
//                 icon: <FaCog size={40} />,
//                 title: "Step 4: Reinstallation",
//                 desc: "The wheels are installed back onto the vehicle, ensuring everything is aligned.",
//               },
//             ].map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
//               >
//                 <div className="text-[var(--color-primary)] mb-4">{step.icon}</div>
//                 <h3 className="text-lg font-semibold text-black mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Pricing */}
//       <section className="py-16 px-6 bg-gray-50 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-semibold text-black mb-6">
//             Pricing for Wheel Mounting & Balancing
//           </h2>

//           <CustomUnderline className="mb-5" />
          
//           <p className="text-gray-600 mb-8">
//             Affordable pricing for high-quality wheel mounting and balancing
//             services.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Basic Mounting & Balancing",
//                 price: "$49.99",
//                 desc: "Includes mounting and balancing of 1 tire.",
//               },
//               {
//                 title: "Full Set of 4",
//                 price: "$179.99",
//                 desc: "Includes mounting and balancing of 4 tires.",
//               },
//               {
//                 title: "Additional Services",
//                 price: "Varies",
//                 desc: "Includes tire rotation, valve replacement, and more.",
//               },
//             ].map((plan, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
//               >
//                 <h3 className="text-xl font-semibold text-black mb-2">
//                   {plan.title}
//                 </h3>
//                 <p className="text-gray-600">{plan.desc}</p>
//                 <p className="text-[var(--color-primary)] text-lg font-semibold">
//                   {plan.price}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Schedule Inspection */}
//       <section id="schedule" className="py-16 px-6 bg-[var(--color-primary)] text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-semibold mb-6 text-white"
//         >
//           Schedule Your Wheel Mounting & Balancing Today
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-gray-200 max-w-2xl mx-auto mb-8"
//         >
//           Book your appointment today and enjoy a smoother, safer ride with
//           perfectly balanced wheels.
//         </motion.p>
//         <motion.a
//           href="/contact"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
//         >
//           Book Your Service
//         </motion.a>
//       </section>
//     </main>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/common/HeroSection";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShield,
  FiChevronRight,
  FiAlertTriangle,
  FiTool,
  FiStar,
} from "react-icons/fi";
import { GiCarWheel, GiCarBattery } from "react-icons/gi";
import { PiSteeringWheel } from "react-icons/pi";

export default function WheelMountingBalancingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <HeroSection
        title="Wheel Mounting &"
        colorTitle="Balancing"
        description="Smooth, quiet, and safe. We mount tires the right way and balance them with precision so your ride feels brand new."
      />

      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(0,122,255,0.11),transparent),radial-gradient(60%_60%_at_85%_10%,rgba(255,99,71,0.10),transparent)]" />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{ backgroundImage: "url('/textures/noise.png')", opacity: 0.08 }}
        />
      </div>

      {/* Hero content */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Precision <span className="text-[var(--color-primary)]">Mount & Balance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-lg text-gray-700"
            >
              From daily drivers to staggered fitments—our techs use protected clamps, torque to spec, and dynamic or road‑force balance for glass‑smooth cruising.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--color-primary)] px-6 py-3 text-white font-semibold hover:bg-black transition-colors"
              >
                Book now
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
                { icon: <FiShield />, text: "12‑month guarantee" },
                { icon: <FiStar />, text: "4.9★ local rating" },
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
                alt="Wheel mounting and balancing"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur px-3 py-2 text-sm shadow">
                <GiCarWheel className="text-[var(--color-primary)]" /> Dynamic & road‑force balancing
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">What’s wrong vs how we fix it</h2>
          <p className="text-gray-700 mt-2">Common symptoms and the exact service that solves them.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <FiAlertTriangle className="text-red-500" /> Symptoms
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Steering wheel shake 80–110 km/h",
                "Seat/body vibration at highway speeds",
                "Uneven or cupped tire wear",
                "After hitting a pothole or curb",
                "New tires just installed elsewhere",
                "Wheel weights fell off",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-md bg-red-50 text-red-600">
                    <FiAlertTriangle />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <FiTool className="text-[var(--color-primary)]" /> Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { t: "Dynamic balancing", d: "Corrects imbalance on both axes for smooth highway ride." },
                { t: "Road‑force match mounting", d: "Measures tire/wheel forces and aligns the high/low spots for minimal vibration." },
                { t: "Bead seating & hub cleaning", d: "Remove corrosion, apply proper lube, seat evenly, and prevent run‑out." },
                { t: "TPMS reset & valve service", d: "Relearn sensors and replace valve cores/seals as needed." },
                { t: "Torque to spec", d: "Hand torque with calibrated wrenches to OEM spec." },
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <FiCheckCircle />
                  </span>
                  <span>
                    <span className="font-semibold">{s.t}:</span> {s.d}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Packages</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Standard Balance",
                price: "$79",
                features: ["Mount & dynamic balance (4)", "Hub face clean", "Torque to spec"],
              },
              {
                name: "Road‑Force Balance",
                price: "$119",
                features: ["Road‑force measurement (4)", "Match‑mount optimization", "Adhesive/clip weights as needed"],
                badge: "Most Popular",
              },
              {
                name: "Performance Setup",
                price: "$159",
                features: ["Low‑profile/run‑flat care", "Staggered fitments", "TPMS relearn & road test"],
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                {p.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-black text-white px-3 py-1 text-xs">{p.badge}</span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-2xl font-extrabold">{p.price} <span className="text-sm">CAD</span></p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><FiCheckCircle className="text-green-600" /> {f}</li>
                  ))}
                </ul>
                <a href="#appointment" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2">
                  Choose package <FiChevronRight />
                </a>
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-600">Prices before tax. Run‑flats, oversized wheels, or seized hardware may require additional time.</p>
        </div>
      </section>

      {/* Process */}
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
              { icon: <GiCarWheel />, t: "Inspect & prep", d: "Check wheels/tires, TPMS, and clean hub faces." },
              { icon: <PiSteeringWheel />, t: "Mount", d: "Lube beads, protect finish, seat evenly." },
              { icon: <FiTool />, t: "Balance", d: "Dynamic or road‑force, add precise weights." },
              { icon: <FiCheckCircle />, t: "Torque & test", d: "Hand torque to spec and road test." },
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

      {/* Appointment */}
      <section id="appointment" className="max-w-7xl mx-auto px-6 py-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[var(--color-primary)] text-white p-6 md:p-8 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Book mounting & balancing</h2>
              <p className="mt-1 text-white/80">Most sets completed within 45–60 minutes. Torque recheck recommended after 100 km.</p>

              <a
                href="#"
                className="w-max rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center gap-2 my-5"
              >
                Book an appointment
                <FiChevronRight className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><FiClock /> Mon–Sat, 9–6</span>
                <span className="inline-flex items-center gap-2"><FiPhone /> +1 (437) 555‑0146</span>
                <span className="inline-flex items-center gap-2"><FiMapPin /> 125 King St W, Toronto</span>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-white/70 text-black p-5 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold">What’s included</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600" /> Mount & balance (4)</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600" /> Adhesive or clip‑on weights</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600" /> TPMS reset (if needed)</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600" /> Torque to spec</li>
                </ul>
                <div className="mt-4 rounded-xl bg-white/40 p-4">
                  <p className="text-3xl font-extrabold">
                    $<span className="tabular-nums">79</span>
                    <span className="text-base align-top"> CAD</span>
                  </p>
                  <p className="text-xs text-gray-600">Price before tax. Run‑flats/oversize may vary.</p>
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
              { n: "↓", l: "steering vibration" },
              { n: "↓", l: "tire noise" },
              { n: "↑", l: "high‑speed stability" },
              { n: "✓", l: "butter‑smooth ride" },
            ].map((s, i) => (
              <Stat key={i} n={s.n} l={s.l} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Wheel Mount & Balance FAQ</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Faq q="Do I need balancing with brand‑new tires?" a="Yes. New tires and wheels still require balancing to eliminate manufacturing tolerances." />
            <Faq q="What’s road‑force balancing?" a="A machine measures tire and wheel stiffness/force variation under load, then we rotate and match‑mount to minimize vibration." />
            <Faq q="How long does it take?" a="Most sets take 45–60 minutes. Complex fitments or TPMS issues can add time." />
            <Faq q="Should I re‑torque?" a="We recommend re‑torquing after ~100 km for safety—drop in for a quick, free check." />
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-black/5 bg-white p-4 text-xs text-gray-600">
          <p className="font-semibold mb-1">Important</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prices exclude tax and environmental fees. Aftermarket hardware or seized lugs may require additional labor.</li>
            <li>We use torque‑stick + hand torque to finish. Always re‑torque after 100 km.</li>
            <li>Extreme wheel sizes, bead damage, or bent rims may limit results—repairs/straightening quoted separately.</li>
          </ul>
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
