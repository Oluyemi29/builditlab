"use client";

import HeroContent from "@/component/hero/HeroContent";
import Industries from "@/component/industries/Industries";

const page = () => {
  return (
    <div>
      <HeroContent
        bgImage={"https://images.unsplash.com/photo-1709715357510-b687304cee3a"}
        heading={"We Build Digital Solutions for Every Industry"}
        subHeading={
          "From startups to established businesses, we design and develop custom software tailored to your industries unique challenges, workflows, and growth opportunities."
        }
        leftButton="Start Your Journey"
        rightButton="Book a free Consultation"
      />
      <Industries />
    </div>
  );
};

export default page;
