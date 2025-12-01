"use client";

// import { Image } from "@heroui/react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-5 bg-gray-50">
      <h1 className="text-3xl underline underline-offset-2 font-semibold">
        About Us
      </h1>
      <div className="w-full flex md:flex-row flex-col gap-5 justify-center items-center">
        {/* <div className="w-full flex flex-col justify-center items-center">
          <div className="md:w-1/2 px-3 py-2 flex flex-col justify-center items-center bg-kleinBlue rounded-md">
            <Image
              src={"/builditlab.png"}
              alt="BuildItLab"
              className="w-full h-1/2 mx-auto"
            />
          </div>
        </div> */}
        <div className="w-full flex flex-col justify-start gap-3 px-5">
          <h1 className="s w-full text-center">
            BuilditLab is a software development studio helping startups and
            companies build modern digital products. From MVPs to full-scale
            applications, we bring your ideas to life with clean design,
            efficient development, and reliable execution. We combine
            creativity, technical expertise, and industry best practices to
            deliver solutions that are both beautiful and powerful. Our team
            works closely with you at every stage—from strategy and prototyping
            to development, launch, and ongoing refinement. Whether youre
            validating a new idea or scaling an existing product, we create
            digital experiences that are fast, intuitive, and built to last. At
            BuilditLab, your success is our priority, and we’re committed to
            helping you grow through smart, high-quality technology.
          </h1>
          <Link
            href={"/about"}
            className="text-sm text-kleinBlue italic underline underline-offset-2"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
