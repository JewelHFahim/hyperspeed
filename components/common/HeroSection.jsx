import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({title, colorTitle, description }) => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-black text-white">
      {/* <Image
              src="/images/slider3.jpg"
              alt="Car Accessories"
              fill
              className="object-cover opacity-40"
            /> */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
         <h1 className="text-4xl md:text-6xl  uppercase tracking-wider">
            {title} <span className="text-[#e60023] font-extrabold"> {colorTitle} </span>
         </h1>
         
        <p className="mt-3 text-lg text-gray-200">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
