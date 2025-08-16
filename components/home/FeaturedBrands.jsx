"use client";

import BrandCard from "../common/BrandCard";
import Container from "@/components/layout/Container";

const brands = [
  {
    name: "Asanti",
    bgImage: "/images/brand_back_18.webp",
    logo: "/images/Asanti-Logo-scaled.webp",
  },
  {
    name: "Black Rhino",
    bgImage: "/images/brand_back_13.webp",
    logo: "/images/black-rhino-modifed.png",
  },
  {
    name: "Niche",
    bgImage: "/images/brand_back_15.webp",
    logo: "/images/fast.png",
  },
  {
    name: "Asanti",
    bgImage: "/images/brand_back_18.webp",
    logo: "/images/Asanti-Logo-scaled.webp",
  },
  {
    name: "Black Rhino",
    bgImage: "/images/brand_back_13.webp",
    logo: "/images/black-rhino-modifed.png",
  },
  {
    name: "Niche",
    bgImage: "/images/brand_back_15.webp",
    logo: "/images/fast.png",
  },
  {
    name: "Asanti",
    bgImage: "/images/brand_back_18.webp",
    logo: "/images/Asanti-Logo-scaled.webp",
  },
  {
    name: "Black Rhino",
    bgImage: "/images/brand_back_13.webp",
    logo: "/images/black-rhino-modifed.png",
  },
  {
    name: "Niche",
    bgImage: "/images/brand_back_15.webp",
    logo: "/images/fast.png",
  },
  {
    name: "Asanti",
    bgImage: "/images/brand_back_18.webp",
    logo: "/images/Asanti-Logo-scaled.webp",
  },
  {
    name: "Black Rhino",
    bgImage: "/images/brand_back_13.webp",
    logo: "/images/black-rhino-modifed.png",
  },
  {
    name: "Niche",
    bgImage: "/images/brand_back_15.webp",
    logo: "/images/fast.png",
  },
];

function FeaturedBrands() {
  return (
    <div className="bg-gray-50">
      <Container>
        <section className="w-full mx-auto px-4 py-12">
          <h2 className="text-2xl text-gray-800 mb-8 text-center underline under underline-red-600">
            Featured Brands
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {brands.map((brand, idx) => (
              <BrandCard
                key={idx}
                name={brand.name}
                logo={brand.logo}
                bgImage={brand.bgImage}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default FeaturedBrands;
