"use client";
import { Image } from "@heroui/react";
import { IoMdAnalytics } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";

const OurProcess = () => {
  return (
    <div className="w-full flex flex-col mt-7 gap-5 justify-center items-center">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-2xl font-semibold">Our Process</h1>
        <p className="text-black/70 text-center">
          Discover how we deliver exceptional result through our proven
          methodology
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-5 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={"/steps.png"}
            alt="Our Process"
            className="md:w-[60%] md:h-[60%] rounded-md w-1/2 h-1/2 hover:scale-105 transition-all duration-500 ease-in-out mx-auto"
          />
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-5">
          <h1 className="text-2xl font-semibold">
            A Simple, Transparent Workflow
          </h1>

          {/* <Divider orientation="vertical" className="h-60 top-20 left-2.5 bg-kleinBlue/50 border-2 border-spacing-y-16 border-kleinBlue border-dotted absolute" /> */}
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <IoMdAnalytics className="text-plainWhite" />
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <h1 className="text-[0.8rem] font-semibold">
                Discovery & Planning
              </h1>
              <p className="text-[0.8rem] text-black/70">
                We understand your needs, goals, and product vision
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <MdDesignServices className="text-plainWhite" />
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <h1 className="text-[0.8rem] font-semibold">
                Design & Prototyping
              </h1>
              <p className="text-[0.8rem] text-black/70">
                We create stunning UI/UX and user flows that define your
                product.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <MdDeveloperMode className="text-plainWhite" />
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <h1 className="text-[0.8rem] font-semibold">
                Development & Testing
              </h1>
              <p className="text-[0.8rem] text-black/70">
                We build fast, test thoroughly, and iterate based on feedback.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <HiRocketLaunch className="text-plainWhite" />
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <h1 className="text-[0.8rem] font-semibold">Launch & Scale</h1>
              <p className="text-[0.8rem] text-black/70">
                We support you through deployment, optimization, and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
