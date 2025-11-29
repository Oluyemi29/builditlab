import { Image } from "@heroui/react";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <div
      className="w-full h-auto bg-center bg-cover relative flex flex-col justify-center items-center py-5"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1681949287382-052ea3954a51")`,
      }}
    >
      <div className="absolute w-full h-full bg-kleinBlue opacity-50" />
      <div className="relative w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-white text-2xl font-semibold">What We Do</h1>
        <div className="w-full grid lg:grid-cols-4 mt-8 md:grid-cols-3 grid-cols-1 justify-center items-center gap-10 px-5">
          {/* web app  */}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-max h-max border-2 border-plainWhite p-0.5 rounded-full">
              <div className="rounded-full w-40 h-40 bg-plainWhite flex justify-center items-center hover:scale-105 transition-all duration-500 ease-in-out">
                <Image
                  src={"/web-dev.png"}
                  alt="Web development"
                  className="w-3/4 h-3/4 rounded-full mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h1 className="text-plainWhite font-semibold text-center text-[0.8rem]">
                Website & Web App Development
              </h1>
              <p className="text-plainWhite/70 text-[0.8rem] text-center">
                Custom, scalable, high-performance websites and web applications
                that power your business.
              </p>
            </div>
          </div>

          {/* mobile app  */}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-max h-max border-2 border-plainWhite p-0.5 rounded-full">
              <div className="rounded-full w-40 h-40 bg-plainWhite flex justify-center items-center hover:scale-105 transition-all duration-500 ease-in-out">
                <Image
                  src={"/mobile-app.png"}
                  alt="Mobile App"
                  className="w-3/4 h-3/4 rounded-full mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h1 className="text-plainWhite font-semibold text-center text-[0.8rem]">
                Mobile App Development
              </h1>
              <p className="text-plainWhite/70 text-[0.8rem] text-center">
                iOS and Android apps built for speed, reliability, and seamless
                user experiences.
              </p>
            </div>
          </div>

          {/* product design  */}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-max h-max border-2 border-plainWhite p-0.5 rounded-full">
              <div className="rounded-full w-40 h-40 bg-plainWhite flex justify-center items-center hover:scale-105 transition-all duration-500 ease-in-out">
                <Image
                  src={"/product-design.png"}
                  alt="Product Design"
                  className="w-3/4 h-3/4 rounded-full mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h1 className="text-plainWhite font-semibold text-center text-[0.8rem]">
                Product Design (UI/UX)
              </h1>
              <p className="text-plainWhite/70 text-[0.8rem] text-center">
                User-centric design that helps your product convert, engage, and
                retain users.
              </p>
            </div>
          </div>

          {/* MVP development for start up  */}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-max h-max border-2 border-plainWhite p-0.5 rounded-full">
              <div className="rounded-full w-40 h-40 bg-plainWhite flex justify-center items-center hover:scale-105 transition-all duration-500 ease-in-out">
                <Image
                  src={"/mvp-startup.png"}
                  alt="MVP development for start up"
                  className="w-3/4 h-3/4 rounded-full mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h1 className="text-plainWhite font-semibold text-center text-[0.8rem]">
                MVP development for start up
              </h1>
              <p className="text-plainWhite/70 text-[0.8rem] text-center">
                Launch quickly with a functional MVP that tests your idea in the
                real world.
              </p>
            </div>
          </div>

          {/* Branding & Creative Design  */}
          {/* <div className="w-full flex flex-col justify-center items-center">
            <div className="w-max h-max border-2 border-plainWhite p-0.5 rounded-full">
              <div className="rounded-full w-40 h-40 bg-plainWhite flex justify-center items-center hover:scale-105 transition-all duration-500 ease-in-out">
                <Image
                  src={"/creative.png"}
                  alt="Branding & Creative Design"
                  className="w-3/4 h-3/4 rounded-full mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h1 className="text-plainWhite font-semibold text-center text-[0.8rem]">
                Branding & Creative Design
              </h1>
              <p className="text-plainWhite/70 text-[0.8rem] text-center">
                From identity design to digital marketing materials — we build
                brands that stand out.
              </p>
            </div>
          </div> */}
        </div>
        <Link
          href={"/services"}
          className="underline underline-offset-4 italic text-plainWhite mt-8 transition-all duration-1000 ease-in-out hover:no-underline"
        >
          See all our Services
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
