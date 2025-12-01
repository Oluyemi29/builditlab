"use client";
import { Card } from "@heroui/react";
import React from "react";
import { HiRocketLaunch } from "react-icons/hi2";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";

const AboutUsPage = () => {
  return (
    <div className="w-full flex flex-col gap-5 my-10">
      <div className="w-full flex md:flex-row flex-col gap-10 justify-center items-center px-8">
        <div className="w-full flex flex-col justify-start items-start">
          <h1 className="font-semibold text-start text-2xl text-black">
            <span className="text-kleinBlue">We merge creativity,</span>{" "}
            engineering, and strategy to build products that win.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <p className="text-sm text-black/70 text-start">
            BuilditLab is a software development studio that helps startups and
            businesses create modern digital products. From MVPs to complete
            applications, we turn your ideas into reality with sleek design,
            fast development, and dependable delivery.
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <p className="text-sm text-black/70 text-start">
            We builds modern digital products for startups and established
            brands. From early-stage MVPs to robust, fully developed
            applications, we provide thoughtful design, efficient engineering,
            and consistent execution.
          </p>
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-5 justify-center items-center mt-10">
        <Card className="p-5 w-full">
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
        </Card>
        <Card className="p-5 w-full">
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
        </Card>
        <Card className="p-5 w-full">
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
        </Card>
      </div>
    </div>
  );
};

export default AboutUsPage;
