"use client";
import AboutUsPage from "@/component/about/aboutuspage/AboutUs";
import HeroContent from "@/component/hero/HeroContent";

const page = () => {
  return (
    <div className="w-full">
      <HeroContent
        bgImage="https://plus.unsplash.com/premium_photo-1661541133839-b9c6ad9ec492"
        heading="About Us"
        subHeading="BuilditLab is a software development studio helping startups and companies build modern digital products. From MVPs to full-scale applications, we bring your ideas to life with clean design, efficient development, and reliable execution"
      />
      <AboutUsPage />
    </div>
  );
};

export default page;
