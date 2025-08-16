"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const promos = [
  {
    title: "Summer Wheel Sale",
    desc: "Up to 30% off on all premium wheels. Limited time offer!",
    img: "/images/promos.jpg",
    tag: "Hot Deal",
  },
  {
    title: "Tire Replacement Promo",
    desc: "Buy 3 tires and get the 4th free. Performance guaranteed.",
    img: "/images/promos2.jpg",
    tag: "Limited",
  },
  {
    title: "Accessories Bundle",
    desc: "Get 20% off when you buy 2 or more accessories.",
    img: "/images/promos3.jpg",
    tag: "Special",
  },
];

const pastPromos = [
  { title: "Spring Tire Discount", img: "/images/promos.jpg" },
  { title: "Winter Care Pack", img: "/images/promos.jpg" },
  { title: "Free Alignment", img: "/images/promos.jpg" },
  { title: "New Year Wheel Blast", img: "/images/promos.jpg" },
];

export default function PromosPage() {
  return (
    <main className="bg-white text-black">
      {/* 🔹 Hero Section */}
      <section className="relative py-16 bg-black text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Current <span className="text-[#e60023]">Promotions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
        >
          Discover our latest deals and save big on wheels, tires, and
          accessories.
        </motion.p>
        <div className="mt-6 flex justify-center">
          <span className="w-24 h-1 bg-[#e60023] rounded-full"></span>
        </div>
      </section>

      {/* 🔹 Active Promos */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Active <span className="text-[#e60023]">Deals</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {promos.map((promo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-lg overflow-hidden border border-gray-200 group"
            >
              <Image
                src={promo.img}
                alt={promo.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <span className="text-xs bg-[#e60023] px-2 py-1 rounded w-fit mb-2">
                  {promo.tag}
                </span>
                <h3 className="text-xl font-bold">{promo.title}</h3>
                <p className="text-sm text-gray-200">{promo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Promo Highlight Banner */}
      <section className="relative h-[400px] my-16">
        <Image
          src="/images/slider3.jpg"
          alt="Promo highlight"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Exclusive Online <span className="text-[#e60023]">Offer</span>
          </motion.h2>
          <p className="max-w-xl mb-6">
            Get free installation on all wheel purchases this week. Don’t miss
            out!
          </p>
          <Link
            href="/parts"
            className="bg-[#e60023] px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🔹 Past Promos */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Past <span className="text-[#e60023]">Promotions</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pastPromos.map((promo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={promo.img}
                alt={promo.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                {promo.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Call to Action */}
      <section className="bg-[#e60023] text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Don’t Miss the Next Deal!
        </motion.h2>
        <p className="mb-6 text-lg">
          Subscribe to our newsletter and stay updated on upcoming promotions.
        </p>
        <form className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-200 rounded-md text-gray-50 w-full"
          />
          <button
            type="submit"
            className="bg-black px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
