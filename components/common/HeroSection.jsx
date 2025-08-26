// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Container from "../layout/Container";
// import CustomUnderline from "./CustomUnderline";

// const HeroSection = ({ title, colorTitle, description }) => {
//   return (
//     <section className="relative h-[40vh] flex items-center justify-center text-white bg-black">
//       <Container>
//         <Image
//           src="/images/slider3.jpg"
//           alt="Car Accessories"
//           fill
//           className="object-cover opacity-15"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl  uppercase tracking-wider">
//             {title}
//             <span className="text-[var(--color-primary)] font-extrabold"> {colorTitle} </span>
//           </h1>

//           <p className="mt-3 text-lg text-gray-200">{description}</p>

//           <CustomUnderline />
//         </motion.div>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

export default function HeroSection({
  title,
  colorTitle,
  description,
  bgSrc = "/images/g3.webp",
  cta,
}) {
  return (
    <section className="relative h-[40vh] md:h-[45vh] overflow-hidden bg-black text-white">
      {/* Parallax layers */}
      <div className="absolute inset-0 z-0">
        {/* Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/slider3.jpg"
            alt="Background"
            fill
            priority
            className="object-cover opacity-40"
          />
        </motion.div>

        {/* Vignette + gradient wash */}
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent_90%)]"
          style={{ backgroundImage: "url('/images/texture2.png')", opacity: 1 }}
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl pt-20 md:pt-28 text-center">
          <motion.p
            {...fadeIn(0.05)}
            className="mx-auto w-max rounded-full border border-blue-500/15 bg-blue-500/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur"
          >
            Featured <span className="text-blue-500 animate-pulse">•</span>  Automotive
          </motion.p>

          <motion.h1
            {...fadeIn(0.12)}
            className="mt-4 font-extrabold leading-[0.95] tracking-tight text-xl sm:text-3xl md:text-5xl"
          >
            <span className="inline-block">{title}</span>{" "}
            {colorTitle && (
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--color-primary)] via-white to-[var(--color-primary)] bg-clip-text text-transparent">
                  {colorTitle}
                </span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-3 blur-md bg-[var(--color-primary)]/30" />
              </span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              {...fadeIn(0.2)}
              className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/85"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
            className="mx-auto mt-5 h-[3px] rounded-full bg-gradient-to-r from-[var(--color-primary)] via-white to-[var(--color-primary)]"
          />

          {cta && (
            <motion.a
              href={cta.href}
              {...fadeIn(0.32)}
              className="group mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              {cta.label}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5 10h10M10 5l5 5-5 5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          )}
        </div>
      </Container>
    </section>
  );
}
