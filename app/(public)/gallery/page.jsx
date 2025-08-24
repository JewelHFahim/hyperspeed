// "use client";

// import Container from "@/components/layout/Container";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const galleryImages = [
//   { src: "/images/g1.webp", alt: "Car wheel closeup" },
//   { src: "/images/g2.webp", alt: "Luxury car tire" },
//   { src: "/images/g2.webp", alt: "Car accessories" },
//   { src: "/images/g1.webp", alt: "Off-road wheels" },
//   { src: "/images/g1.webp", alt: "Racing car tires" },
//   { src: "/images/g2.webp", alt: "Workshop service" },
//   { src: "/images/g2.webp", alt: "Stylish rims" },
//   { src: "/images/g1.webp", alt: "Car performance" },
// ];

// export default function GalleryPage() {
//   return (
//     <main className="bg-white text-black">
//       {/* 🔹 Hero Section */}
//       <section className="relative py-20 bg-black text-center text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-6xl font-extrabold"
//         >
//           Our <span className="text-[var(--color-primary)]">Gallery</span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
//         >
//           Explore our premium wheels, tires, and car accessories. Designed for
//           performance and style.
//         </motion.p>
//         <div className="mt-6 flex justify-center">
//           <span className="w-24 h-1 bg-[var(--color-primary)] rounded-full"></span>
//         </div>
//       </section>

//       {/* 🔹 Masonry Gallery */}
//       <Container>
//       <section className="py-16  mx-auto">
//         <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
//           {galleryImages.map((img, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.02 }}
//               className="relative overflow-hidden rounded-sm group"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 width={500}
//                 height={300}
//                 className="w-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition">
//                 {img.alt}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//       </Container>

//       {/* 🔹 Highlight Section */}
//       <section className="relative bg-gray-100 py-20">
//         <Container>
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-bold mb-4">
//               Premium <span className="text-[var(--color-primary)]">Quality</span>
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Every product in our collection is carefully selected for its
//               durability, style, and performance. Our gallery highlights the
//               precision and craftsmanship that goes into each wheel and tire.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src="/images/g3.webp"
//               alt="Featured product"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-lg object-cover"
//             />
//           </motion.div>
//         </div>
//          </Container>
//       </section>

//       {/* 🔹 Extended Gallery */}
//       <section className="px-6 py-20 max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold mb-10 text-center">
//           More <span className="text-[var(--color-primary)]">Inspiration</span>
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {galleryImages.concat(galleryImages).map((img, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               className="relative overflow-hidden rounded-lg"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 width={400}
//                 height={400}
//                 className="w-full h-52 object-cover rounded-lg hover:brightness-90 transition"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Call to Action */}
//       <section className="bg-[var(--color-primary)] text-white py-16 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold mb-4"
//         >
//           Ready to Upgrade Your Ride?
//         </motion.h2>
//         <p className="mb-6 text-lg">
//           Browse our shop today and find the perfect wheels, tires, and
//           accessories for your car.
//         </p>
//         <a
//           href="/parts"
//           className="bg-black px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
//         >
//           Shop Now
//         </a>
//       </section>
//     </main>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/common/HeroSection";
import {
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiMaximize2,
  FiPlayCircle,
  FiSearch,
  FiX,
  FiTag,
} from "react-icons/fi";

export default function GalleryPage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Collect unique tags
  const allTags = useMemo(() => {
    const set = new Set();
    MEDIA.forEach((m) => m.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MEDIA.filter((m) => {
      const matchesQuery = q
        ? [m.title, m.caption, ...(m.tags || [])].some((s) =>
            s.toLowerCase().includes(q)
          )
        : true;
      const matchesTags = activeTags.length
        ? activeTags.every((t) => m.tags?.includes(t))
        : true;
      return matchesQuery && matchesTags;
    });
  }, [query, activeTags]);

  const openAt = (idx) => setLightboxIndex(idx);
  const close = () => setLightboxIndex(null);

  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection
        title="Project"
        colorTitle="Gallery"
        description="Real work, real results. Browse alignments, brake jobs, tire setups, and parts installs."
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

      {/* Controls */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="rounded-xl border border-black/5 bg-white/80 backdrop-blur p-4 md:p-5 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by car, service, or part…"
                className="w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-3 py-2 text-sm">
                <FiFilter /> Filters
              </span>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 8).map((t) => (
                  <TagPill
                    key={t}
                    tag={t}
                    active={activeTags.includes(t)}
                    onClick={() => toggleTag(t, activeTags, setActiveTags)}
                  />
                ))}
                {allTags.length > 8 && (
                  <details className="relative">
                    <summary className="cursor-pointer text-sm px-3 py-2 rounded-xl border border-black/10">
                      More
                    </summary>
                    <div className="absolute right-0 z-10 mt-2 w-56 rounded-xl border border-black/10 bg-white p-2 shadow-lg max-h-72 overflow-auto">
                      {allTags.slice(8).map((t) => (
                        <TagRow
                          key={t}
                          tag={t}
                          active={activeTags.includes(t)}
                          onClick={() =>
                            toggleTag(t, activeTags, setActiveTags)
                          }
                        />
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-black/5 bg-white p-6 text-center text-gray-600">
            No results. Try clearing filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                {m.kind === "before-after" ? (
                  <BeforeAfterCard media={m} onOpen={() => openAt(idx)} />
                ) : (
                  <ThumbCard media={m} onOpen={() => openAt(idx)} />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <Lightbox
        items={filtered}
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

function TagPill({ tag, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "text-sm px-3 py-2 rounded-xl border",
        active
          ? "bg-black text-white border-black"
          : "bg-white border-black/10",
      ].join(" ")}
    >
      {tag}
    </button>
  );
}

function TagRow({ tag, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left text-sm px-2 py-1 rounded-lg hover:bg-black/5 flex items-center gap-2"
    >
      <span
        className={`inline-block h-2 w-2 rounded-full ${
          active ? "bg-black" : "bg-gray-300"
        }`}
      />
      {tag}
    </button>
  );
}

function ThumbCard({ media, onOpen }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-xl h-full">
      {/* Image */}
      <div
        className="relative w-full"
        style={{ aspectRatio: media.aspect || "4/3" }}
      >
        <Image src={media.src} alt={media.title} fill className="object-cover" />
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

      {/* Text */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <FiTag /> {media.tags?.join(" • ")}
        </div>
        <h3 className="mt-1 text-base font-semibold">{media.title}</h3>
        {media.caption && (
          <p className="text-sm text-gray-700 flex-1">{media.caption}</p>
        )}
      </div>
    </article>
  );
}


function BeforeAfterCard({ media, onOpen }) {
  const [pos, setPos] = useState(50);
  return (
    <article className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl">
      <div
        className="relative w-full"
        style={{ aspectRatio: media.aspect || "4/3" }}
      >
        <Image
          src={media.before}
          alt={`${media.title} - before`}
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={media.after}
            alt={`${media.title} - after`}
            fill
            className="object-cover"
          />
        </div>
        <input
          type="range"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          min={0}
          max={100}
          className="absolute inset-x-6 bottom-4 appearance-none h-1 rounded bg-white/60"
        />
        <div className="absolute left-3 top-3 rounded-xl bg-white/85 px-2 py-1 text-xs font-semibold">
          Before
        </div>
        <div className="absolute right-3 top-3 rounded-xl bg-white/85 px-2 py-1 text-xs font-semibold">
          After
        </div>
        <button
          onClick={onOpen}
          className="absolute inset-0"
          aria-label="Open lightbox"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <FiTag /> {media.tags?.join(" • ")}
        </div>
        <h3 className="mt-1 text-base font-semibold">{media.title}</h3>
        {media.caption && (
          <p className="text-sm text-gray-700">{media.caption}</p>
        )}
      </div>
    </article>
  );
}

function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null;
  const i = index ?? 0;

  const prev = () => onIndex((i - 1 + items.length) % items.length);
  const next = () => onIndex((i + 1) % items.length);

  // keyboard
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
            {/* Media */}
            <div className="relative w-full rounded-2xl bg-black/60 overflow-hidden">
              <MediaViewer media={items[i]} />
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

            {/* Meta */}
            <div className="mt-3 rounded-xl bg-white p-4 shadow">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{items[i].title}</h3>
                  {items[i].caption && (
                    <p className="text-sm text-gray-700">{items[i].caption}</p>
                  )}
                </div>
                {items[i].tags?.length ? (
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    {items[i].tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-black/5 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MediaViewer({ media }) {
  if (media.kind === "before-after") {
    return (
      <div
        className="relative w-full"
        style={{ aspectRatio: media.aspect || "16/9" }}
      >
        <Image
          src={media.after}
          alt={`${media.title} - after`}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  // Default: image
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: media.aspect || "16/9" }}
    >
      <Image src={media.src} alt={media.title} fill className="object-contain" />
    </div>
  );
}


/* ------------------------------- Data ------------------------------- */
const MEDIA = [
  {
    id: "m1",
    kind: "image",
    title: "Precision Alignment – BMW 3 Series",
    caption: "Laser heads on all four corners; wheel centered.",
    src: "/images/g3.webp",
    tags: ["Alignment", "Sedan", "BMW"],
    aspect: "5/4",
  },
  // {
  //   id: "m2",
  //   kind: "before-after",
  //   title: "Before/After – Toe Correction",
  //   caption: "Factory spec achieved; tire wear normalized.",
  //   before: "/images/g2.webp",
  //   after: "/images/after-alignment.jpg",
  //   tags: ["Alignment", "Before/After"],
  //   aspect: "4/3",
  // },
  {
    id: "m3",
    kind: "image",
    title: "Brake Upgrade – Civic",
    caption: "Premium pads & rotors installed.",
    src: "/images/g1.webp",
    tags: ["Brakes", "Service"],
    aspect: "4/3",
  },
  {
    id: "m4",
    kind: "image",
    title: "New Tire Fitment – SUV",
    caption: "All-terrain set balanced and road-tested.",
    src: "/images/g3.webp",
    tags: ["Tires", "SUV", "Parts"],
    aspect: "4/3",
  },
  {
    id: "m5",
    kind: "image",
    title: "Battery Install – Corolla",
    caption: "AGM battery with vent kit.",
    src: "/images/g1.webp",
    tags: ["Battery", "Parts"],
    aspect: "4/3",
  },
];


/* ---------------------------- Utils/Helpers ---------------------------- */

function toggleTag(tag, active, setActive) {
  setActive(
    active.includes(tag) ? active.filter((t) => t !== tag) : [...active, tag]
  );
}
