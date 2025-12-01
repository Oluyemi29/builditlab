"use client";

import HeroContent from "@/component/hero/HeroContent";
import Service from "@/component/services/servicepage/Service";

const page = () => {
  return (
    <div className="w-full">
      <HeroContent
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        heading="Our Services"
        subHeading="We help startups and growing businesses turn ideas into market-ready digital products with world-class engineering, rapid prototyping, and next-gen design."
      />
      <Service />
    </div>
  );
};

export default page;
