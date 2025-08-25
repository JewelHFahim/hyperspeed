"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/common/HeroSection";
import {
  FiArrowRight,
  FiChevronRight,
  FiCheckCircle,
  FiClock,
  FiCopy,
  FiCreditCard,
  FiMapPin,
  FiPercent,
  FiPhone,
  FiShoppingCart,
  FiStar,
  FiTag,
} from "react-icons/fi";
import { GiCarWheel, GiCarBattery, GiCarSeat } from "react-icons/gi";
import { PiSteeringWheel } from "react-icons/pi";

export default function PromosPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <HeroSection
        title="Promos &"
        colorTitle="Deals"
        description="Limited‑time service specials and parts discounts. Book online or shop in‑store and save today."
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

      {/* Limited Time Banner */}
      <LimitedTimeBanner endsAtISO={bannerEndISO} />

      {/* Featured Service Deals */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <header className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-bold">Service Specials</h2>
          <a
            href="#book"
            className="group inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold"
          >
            Book now{" "}
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, idx) => (
            <PromoCard
              key={idx}
              title="4‑Wheel Alignment"
              priceLabel="$109"
              currency="CAD"
              badgeText="Most cars"
              image="/images/g3.webp"
              features={[
                "Laser calibrated",
                "12‑month guarantee",
                "Before/after printout",
              ]}
              cta={{ label: "Book appointment", href: "#book" }}
              icon={<PiSteeringWheel />}
            />
          ))}
        </div>
      </section>

      {/* Coupons */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="rounded-xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              Clip These Coupons
            </h2>
            <p className="text-sm text-gray-600">
              Show at counter or apply online at checkout.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coupons.map((c) => (
              <Coupon key={c.code} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="max-w-7xl mx-auto px-6 py-14">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-[var(--color-primary)] text-white p-6 md:p-8 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Book & Lock Your Price</h2>
              <p className="mt-1 text-white/80">
                Promos applied at checkout. Most services done under 60 minutes.
              </p>
              <a
                href="#"
                className="w-max rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center gap-2 my-5"
              >
                Book an appointment <FiChevronRight />
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <FiClock /> Mon–Sat, 9–6
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiPhone /> +1 (437) 555‑0146
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiMapPin /> 125 King St W, Toronto
                </span>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-white/70 text-black p-5 shadow-2xl ring-1 ring-black/5">
                <p className="text-sm font-semibold">Today’s highlights</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Alignment $109
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Brake service
                    15% off
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Batteries 10%
                    off
                  </li>
                </ul>
                <div className="mt-4 rounded-xl bg-white/40 p-4">
                  <p className="text-xs text-gray-600">
                    Taxes extra. See terms below.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <GiCarWheel className="absolute -right-10 -top-14 h-44 w-44 opacity-20 rotate-12 animate-spin-slow" />
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Why customers love us
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "4.9★", l: "local rating" },
              { n: "12mo", l: "service guarantee" },
              { n: "30%", l: "longer tire life*" },
              { n: "+10k", l: "happy drivers" },
            ].map((s, i) => (
              <Stat key={i} n={s.n} l={s.l} />
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-600">
            *With proper alignment and rotation schedule. Results vary.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Promo FAQ</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Faq
              q="Can I combine coupons?"
              a="Unless stated otherwise, coupons cannot be combined with other offers or price matches."
            />
            <Faq
              q="Do promos apply to all vehicles?"
              a="Most deals cover passenger cars and light SUVs. Some trucks or specialty models may vary."
            />
            <Faq
              q="Online vs in‑store pricing?"
              a="Same great price. Some online‑only codes may require booking through our website."
            />
            <Faq
              q="How long are deals valid?"
              a={`Service specials end on ${bannerEndLabel}. Parts promos while supplies last.`}
            />
          </div>
        </div>
      </section> */}

      {/* Terms */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-black/5 bg-white p-4 text-xs text-gray-600">
          <p className="font-semibold mb-1">Promo Terms</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Offers valid for a limited time; end dates shown where applicable.
            </li>
            <li>
              Prices before tax. Shop supplies or environmental fees may apply.
            </li>
            <li>
              Vehicle condition and fitment may affect eligibility and price.
            </li>
            <li>One coupon per service unless noted. No cash value.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

/* ------------------------ Helper Components ------------------------ */

function PromoCard({
  title,
  priceLabel,
  currency,
  badgeText,
  image,
  features,
  cta,
  icon,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-black/5 bg-white/80 backdrop-blur shadow-xl"
    >
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        {badgeText && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur px-3 py-1 text-xs font-semibold shadow">
            {icon}
            {badgeText}
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {icon && (
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-red-500/20 text-red-500">
              {icon}
            </span>
          )}
          {priceLabel}
          {currency && (
            <span className="text-sm ml-1 align-top">{currency}</span>
          )}
        </h3>


        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <FiCheckCircle className="text-green-600" /> {f}
            </li>
          ))}
        </ul>

      </div>
    </motion.article>
  );
}

function PartsCard({ title, image, icon, note, perks }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 backdrop-blur shadow-xl"
    >
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        {note && (
          <span className="absolute right-3 top-3 rounded-lg bg-white/85 backdrop-blur px-2 py-1 text-xs shadow">
            {note}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {icon && (
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-black/90 text-white">
              {icon}
            </span>
          )}
          {title}
        </h3>
        {perks && (
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" /> {p}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3 flex items-center justify-between">
          <a
            href="#parts"
            className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2"
          >
            Shop now <FiShoppingCart />
          </a>
          <span className="text-sm text-gray-600">In‑store & online</span>
        </div>
      </div>
    </motion.article>
  );
}

function Coupon({ code, title, desc, finePrint }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-2xl border border-dashed border-black/20 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            {title}
          </p>
          <p className="text-xl font-extrabold tracking-tight">{code}</p>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-3 py-2 text-sm"
        >
          <FiCopy /> {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {desc && <p className="mt-2 text-sm text-gray-700">{desc}</p>}
      {finePrint && <p className="mt-1 text-xs text-gray-500">{finePrint}</p>}
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-black/5 bg-white px-4 py-5 text-center shadow-sm"
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

/* ------------------------ Data & Banner ------------------------ */

const coupons = [
  {
    code: "ALIGN109",
    title: "Alignment Special",
    desc: "4‑wheel laser alignment for just $109 CAD.",
    finePrint: "Most cars. SUVs/trucks may vary. Expires end of month.",
  },
  {
    code: "BRAKE15",
    title: "Brake Service",
    desc: "Save 15% on pads & rotors when installed by us.",
    finePrint: "In‑store only. Cannot combine with price match.",
  },
  {
    code: "POWER10",
    title: "Battery Deal",
    desc: "10% off any in‑stock battery with core return.",
    finePrint: "Includes free testing.",
  },
];

const bundles = [
  {
    tag: "Best value",
    title: "Alignment + Tire Rotation",
    items: ["Laser alignment", "Rotate & balance", "Steering centering"],
    price: "$169",
  },
  {
    tag: "Daily driver",
    title: "Oil Change + Inspection",
    items: ["Full synthetic + filter", "Multi‑point check", "Top‑ups"],
    price: "$89",
  },
  {
    tag: "Safety first",
    title: "Brake Pads + Install",
    items: ["Premium pads", "Hardware kit", "Bed‑in & road test"],
    price: "$279",
  },
];

// Change this to control the limited‑time banner end date (local time)
const bannerEndISO = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 10); // 10 days from now
  d.setHours(23, 59, 59, 0);
  return d.toISOString();
})();

const bannerEndLabel = (() => {
  const d = new Date(bannerEndISO);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
})();

function LimitedTimeBanner({ endsAtISO }) {
  const endsAt = useMemo(() => new Date(endsAtISO).getTime(), [endsAtISO]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, Math.floor((endsAt - now) / 1000));
  const days = Math.floor(remaining / 86400);
  const hours = Math.floor((remaining % 86400) / 3600);
  const mins = Math.floor((remaining % 3600) / 60);
  const secs = remaining % 60;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-r from-black to-[var(--color-primary)] text-white p-5 md:p-6 shadow-xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Limited‑time Event
            </h2>
            <p className="mt-1 text-white/80">
              Extra savings on alignment, brakes, and batteries. Ends{" "}
              {bannerEndLabel}.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <FiPercent /> Stackable with financing
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <FiStar /> 4.9★ local rating
              </span>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="rounded-2xl bg-white/80 text-black p-4 shadow-xl ring-1 ring-black/5 min-w-[260px]">
              <p className="text-sm font-semibold flex items-center gap-2">
                <FiClock /> Time left
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <TimePill label="D" value={days} />
                <TimePill label="H" value={hours} />
                <TimePill label="M" value={mins} />
                <TimePill label="S" value={secs} />
              </div>
              <a
                href="#book"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 w-full justify-center"
              >
                Book & save <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
        <FiTag className="absolute -right-10 -top-10 h-40 w-40 opacity-20 rotate-12" />
      </div>
    </section>
  );
}

function TimePill({ label, value }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="rounded-xl bg-white/70 px-3 py-2 text-center">
      <div className="text-2xl font-extrabold tabular-nums">{v}</div>
      <div className="text-[10px] uppercase tracking-wide text-gray-600">
        {label}
      </div>
    </div>
  );
}
