import Image from "next/image";

import HeroSection from "./src/sections/contact/HeroSection";
import FeaturedProducts from "./src/sections/contact/FeaturedProducts";
import CategoriesSection from "./src/sections/CategoriesSection";






export default function Home() {
  return (   // ✅ return add kiya
    <div>
       <HeroSection/>
      <FeaturedProducts />
      <CategoriesSection />
      
      
    </div>
  );
}

