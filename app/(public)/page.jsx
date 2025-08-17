import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import PartsSelector from "@/components/home/PartsSelector";
import CategorySection from "@/components/home/CategorySection";
import FeaturedBrands from "@/components/home/FeaturedBrands";
import NewsletterFooter from "@/components/home/NewsletterFooter"



const Home = () => {
  return (
    <div>
      <HeroSlider />

      <PartsSelector title="Select Your Parts" description=""/>

      <CategorySection
        title="Wheels"
        icon="/images/wheel.png"
        filters={[
          "Wheels by Brand",
          "Wheels by Vehicle",
          "Wheels by Size",
          "Winter Wheels",
          "Visualizer",
          "Accessories",
        ]}
        products={[
          { image: "/images/w1.png", logo: "FAST", name: "Fast Wheels" },
          { image: "/images/w1.png", logo: "RUFFINO", name: "Ruffino" },
          {
            image: "/images/w1.png",
            logo: "American Racing",
            name: "American Racing",
          },
          { image: "/images/w1.png", logo: "REPLIKA", name: "Replika" },
          { image: "/images/w1.png", logo: "RIDLER", name: "Ridler" },
          { image: "/images/w1.png", logo: "RTX", name: "RTX" },
          { image: "/images/w1.png", logo: "CALI", name: "Cali Off-Road" },
          { image: "/images/w1.png", logo: "Fuel", name: "Fuel" },
          { image: "/images/w1.png", logo: "NICHE", name: "Niche" },
          { image: "/images/w1.png", logo: "REPLIKA", name: "Replika" },
        ]}
        seeMoreHref="/wheels"
      />

      <CategorySection
        title="Wheels"
        icon="/images/icon-tires.png"
        filters={[
          "Wheels by Brand",
          "Wheels by Vehicle",
          "Wheels by Size",
          "Winter Wheels",
          "Visualizer",
          "Accessories",
        ]}
        products={[
          { image: "/images/tire.webp", logo: "FAST", name: "Fast Wheels" },
          { image: "/images/tire.webp", logo: "RUFFINO", name: "Ruffino" },
          {
            image: "/images/tire.webp",
            logo: "American Racing",
            name: "American Racing",
          },
          { image: "/images/tire.webp", logo: "REPLIKA", name: "Replika" },
          { image: "/images/tire.webp", logo: "RIDLER", name: "Ridler" },
          { image: "/images/tire.webp", logo: "RTX", name: "RTX" },
          { image: "/images/tire.webp", logo: "CALI", name: "Cali Off-Road" },
          { image: "/images/tire.webp", logo: "Fuel", name: "Fuel" },
          { image: "/images/tire.webp", logo: "NICHE", name: "Niche" },
          { image: "/images/tire.webp", logo: "REPLIKA", name: "Replika" },
        ]}
        seeMoreHref="/wheels"
      />

      <CategorySection
        title="Accessories
"
        icon="/images/auto-repair-parts_icon.png"
        filters={[
          "Wheels by Brand",
          "Wheels by Vehicle",
          "Wheels by Size",
          "Winter Wheels",
          "Visualizer",
          "Accessories",
        ]}
        products={[
          { image: "/images/Accessories.png", logo: "FAST", name: "Fast Wheels" },
          { image: "/images/Accessories.png", logo: "RUFFINO", name: "Ruffino" },
          {
            image: "/images/Accessories.png",
            logo: "American Racing",
            name: "American Racing",
          },
          { image: "/images/Accessories.png", logo: "REPLIKA", name: "Replika" },
          { image: "/images/Accessories.png", logo: "RIDLER", name: "Ridler" },
          { image: "/images/Accessories.png", logo: "RTX", name: "RTX" },
          { image: "/images/Accessories.png", logo: "CALI", name: "Cali Off-Road" },
          { image: "/images/Accessories.png", logo: "Fuel", name: "Fuel" },
          { image: "/images/Accessories.png", logo: "NICHE", name: "Niche" },
          { image: "/images/Accessories.png", logo: "REPLIKA", name: "Replika" },
        ]}
        seeMoreHref="/wheels"
      />

      <FeaturedBrands/>
      {/* <NewsletterFooter/> */}
    </div>
  );
};

export default Home;
