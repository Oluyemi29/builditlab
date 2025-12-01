"use client";

import CaseStudies from "@/component/casestudies/CaseStudies";
import HeroContent from "@/component/hero/HeroContent";

const page = () => {
  return (
    <div className="w-full">
      <HeroContent
        bgImage="https://images.unsplash.com/photo-1675434301763-594b4d0c5819"
        heading="Case Studies"
        subHeading="Explore our case studies to see how we transform ideas into real digital products. Each project highlights the challenges, our strategic approach, and the results delivered."
      />
      <CaseStudies />
    </div>
  );
};

export default page;
