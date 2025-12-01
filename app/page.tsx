"use client";
// import AboutUs from "@/component/about/AboutUs";
import OurProjects from "@/component/features/OurProjects";
import HeroContent from "@/component/hero/HeroContent";
import OurSuccess from "@/component/hero/OurSuccess";
import OurProcess from "@/component/services/OurProcess";
import OurServices from "@/component/services/OurServices";
import WhyUs from "@/component/services/WhyUs";
import OurTestimonial from "@/component/testimonial/OurTestimonial";
export default function Home() {
  return (
    <div>
      <HeroContent
        bgImage={"https://images.unsplash.com/photo-1709715357510-b687304cee3a"}
        heading={"Build Fast. Launch Smart. Scale Confidently"}
        subHeading={
          "We help startups and growing businesses turn ideas into market-ready digital products — with world-class engineering, rapid prototyping, and next-gen design."
        }
        leftButton="Start Your Journey"
        rightButton="Book a free Consultation"
      />
      {/* <AboutUs /> */}
      <OurSuccess />
      <OurServices />
      <WhyUs />
      <OurProjects />
      <OurProcess />
      <OurTestimonial />
    </div>
  );
}
