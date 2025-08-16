import React from "react";
import Image from "next/image";
import Container from "../layout/Container";

const CategorySection = ({ title, icon, filters, products, seeMoreHref }) => {
  return (
    <section className="bg-white py-12">
      <Container>
        <section className="w-full bg-white">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2 py-2 border-b border-gray-200">
            <Image src={icon} width={35} height={35} alt=""/>
            <h2 className="text-2xl text-gray-700">{title}</h2>
          </div>

          {/* Filters */}
          <div className="hidden md:flex flex-wrap gap-2 mb-6">
            {filters.map((filter, i) => (
              <button
                key={i}
                className="px-4 py-1 border border-gray-300 hover:border-[var(--color-primary)] text-gray-400 rounded-sm text-sm transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] cursor-pointer"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 borde border-gray-200 border-collapse">
            {products.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center border border-gray-200 p-4"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <div className="mt-2 text-center">
                  <div className="font-bold text-lg">{p.logo}</div>
                  <div className="text-sm text-gray-700">{p.name}</div>
                </div>
              </div>
            ))}

  
          </div>
        </section>
      </Container>
    </section>
  );
};

export default CategorySection;
