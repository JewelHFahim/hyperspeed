"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/g1.webp", alt: "Car wheel closeup" },
  { src: "/images/g2.webp", alt: "Luxury car tire" },
  { src: "/images/g2.webp", alt: "Car accessories" },
  { src: "/images/g1.webp", alt: "Off-road wheels" },
  { src: "/images/g1.webp", alt: "Racing car tires" },
  { src: "/images/g2.webp", alt: "Workshop service" },
  { src: "/images/g2.webp", alt: "Stylish rims" },
  { src: "/images/g1.webp", alt: "Car performance" },
];

export default function GalleryPage() {
  return (
    <main className="bg-white text-black">
      {/* 🔹 Hero Section */}
      <section className="relative py-20 bg-black text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Our <span className="text-[#e60023]">Gallery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
        >
          Explore our premium wheels, tires, and car accessories. Designed for
          performance and style.
        </motion.p>
        <div className="mt-6 flex justify-center">
          <span className="w-24 h-1 bg-[#e60023] rounded-full"></span>
        </div>
      </section>

      {/* 🔹 Masonry Gallery */}
      <Container>
      <section className="py-16  mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-sm group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="w-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      </Container>

      {/* 🔹 Highlight Section */}
      <section className="relative bg-gray-100 py-20">
        <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Premium <span className="text-[#e60023]">Quality</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every product in our collection is carefully selected for its
              durability, style, and performance. Our gallery highlights the
              precision and craftsmanship that goes into each wheel and tire.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/g3.webp"
              alt="Featured product"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
         </Container>
      </section>

      {/* 🔹 Extended Gallery */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">
          More <span className="text-[#e60023]">Inspiration</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.concat(galleryImages).map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-52 object-cover rounded-lg hover:brightness-90 transition"
              />
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
          Ready to Upgrade Your Ride?
        </motion.h2>
        <p className="mb-6 text-lg">
          Browse our shop today and find the perfect wheels, tires, and
          accessories for your car.
        </p>
        <a
          href="/parts"
          className="bg-black px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
}
