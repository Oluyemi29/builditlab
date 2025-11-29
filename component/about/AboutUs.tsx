"use client";

import { Image } from "@heroui/react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 mt-5">
      <h1 className="text-2xl underline underline-offset-2 font-semibold">
        About Us
      </h1>
      <div className="w-full flex md:flex-row flex-col gap-5 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="md:w-1/2 px-3 py-2 flex flex-col justify-center items-center bg-kleinBlue rounded-md">
            <Image
              src={"/builditlab.png"}
              alt="BuildItLab"
              className="w-full h-1/2 mx-auto"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start gap-3">
          <h1 className="text-sm md:w-[70%] w-full text-start">
            BuilditLab is a software development studio helping startups and
            companies build modern digital products. From MVPs to full-scale
            applications, we bring your ideas to life with clean design,
            efficient development, and reliable execution.
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
