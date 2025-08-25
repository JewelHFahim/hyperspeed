"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/common/HeroSection";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openAt = (idx) => setLightboxIndex(idx);
  const close = () => setLightboxIndex(null);

  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection
        title="Project"
        colorTitle="Gallery"
        description="Real work, real results. Wheels, tires, alignments, and installs — all in one feed."
      />

      {/* Ambient */}
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {MEDIA.length === 0 ? (
          <div className="rounded-2xl border border-black/5 bg-white p-6 text-center text-gray-600">
            No media yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MEDIA.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <ThumbCard media={m} onOpen={() => openAt(idx)} />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <Lightbox
        items={MEDIA}
        index={lightboxIndex}
        onClose={close}
        onIndex={(i) => setLightboxIndex(i)}
      />

      {/* Footer note */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-black/5 bg-white p-4 text-xs text-gray-600">
          <p>
            All media shot on‑site with customer permission. Results vary by
            vehicle condition and parts selection.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- Components ----------------------------- */

function ThumbCard({ media, onOpen }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl h-full">
      {/* Image only */}
      <div
        className="relative w-full"
        style={{ aspectRatio: media.aspect || "4/3" }}
      >
        <Image
          src={media.src}
          alt={media.alt || media.title || "Gallery image"}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
          placeholder={media.blurDataURL ? "blur" : undefined}
          blurDataURL={media.blurDataURL}
        />
        <button
          onClick={onOpen}
          className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/20 transition-colors"
          aria-label="Open lightbox"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-white/90 p-2 shadow">
            <FiMaximize2 className="h-6 w-6" />
          </span>
        </button>
      </div>
    </article>
  );
}

function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null;
  const i = index ?? 0;
  const prev = () => onIndex((i - 1 + items.length) % items.length);
  const next = () => onIndex((i + 1) % items.length);

  useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, i]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
        >
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="relative z-10 w-full max-w-5xl"
          >
            <div className="relative w-full rounded-2xl bg-black overflow-hidden">
              <div
                className="relative w-full"
                style={{ aspectRatio: items[i].aspect || "16/9" }}
              >
                <Image
                  src={items[i].src}
                  alt={items[i].alt || items[i].title || "Gallery image"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <button
                onClick={onClose}
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow"
                aria-label="Close"
              >
                <FiX />
              </button>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
                aria-label="Previous"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
                aria-label="Next"
              >
                <FiChevronRight />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------- Types & Data ------------------------------- */
const MEDIA = [
  {
    id: "m1",
    kind: "image",
    title: "Precision Alignment – BMW 3 Series",
    alt: "BMW 3 Series on alignment rack",
    src: "/images/g3.webp",
    aspect: "5/4",
  },
  {
    id: "m3",
    kind: "image",
    title: "Brake Upgrade – Civic",
    alt: "Honda Civic brake upgrade",
    src: "/images/g1.webp",
    aspect: "4/3",
  },
  {
    id: "m4",
    kind: "image",
    title: "New Tire Fitment – SUV",
    alt: "SUV all‑terrain tire fitment",
    src: "/images/g3.webp",
    aspect: "4/3",
  },
  {
    id: "m5",
    kind: "image",
    title: "Battery Install – Corolla",
    alt: "Corolla AGM battery install",
    src: "/images/g1.webp",
    aspect: "4/3",
  },
  {
    id: "m6",
    kind: "image",
    title: "Workshop – Balancer",
    alt: "Wheel balancing machine in shop",
    src: "/images/g2.webp",
    aspect: "4/3",
  },
  {
    id: "m7",
    kind: "image",
    title: "Rims – Display",
    alt: "Rim display wall",
    src: "/images/g2.webp",
    aspect: "4/3",
  },
];
