"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    type: "video",
    src: "https://hyperspeedwinnipeg.ca/wp-content/uploads/Vossen-Wheels-_-Luxury-Performance-Forged-Wheels-_-Hybrid-Forged.mp4",
    title: "Experience the Power",
    subtitle: "Feel the adrenaline with our latest wheels & tires.",
  },
  {
    type: "image",
    src: "https://hyperspeedwinnipeg.ca/wp-content/uploads/CANADAWHEELS_BANNER_11.png",
    title: "Luxury Meets Performance",
    subtitle: "Upgrade your ride with premium services.",
  },
  {
    type: "image",
    src: "https://hyperspeedwinnipeg.ca/wp-content/uploads/Fitmentlowest_price.jpg",
    title: "Precision & Care",
    subtitle: "Expert technicians for your car's best care.",
  },
];

export default function HeroSlider() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      style={{ height: "calc(100vh - 96px)" }} // adjust if nav height changes
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        onSlideChange={() => setIsHovered(false)}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full group overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Media */}
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-105" : ""
                  }`}
                />
              ) : (
                <motion.img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.7 }}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text */}
              <motion.div
                className="absolute bottom-20 left-10 text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
                  {slide.subtitle}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="custom-prev absolute top-1/2 left-5 z-20 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full cursor-pointer hover:scale-110 transition-transform">
          ❮
        </div>
        <div className="custom-next absolute top-1/2 right-5 z-20 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full cursor-pointer hover:scale-110 transition-transform">
          ❯
        </div>

        {/* Pagination */}
        <div className="custom-pagination absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20"></div>
      </Swiper>

      {/* Custom bullet styles */}
      <style jsx>{`
        .custom-bullet {
          width: 14px;
          height: 14px;
          background: white;
          opacity: 0.5;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }
        .custom-bullet.swiper-pagination-bullet-active {
          opacity: 1;
          background: #8b0000;
        }
        .custom-bullet.swiper-pagination-bullet-active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background: white;
          animation: progress 5s linear forwards;
        }
        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
