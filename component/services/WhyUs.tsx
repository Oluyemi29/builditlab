"use client";
import { Image } from "@heroui/react";
import React from "react";
import { RiUserCommunityFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";

const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center mt-7 items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-darkBlue underline underline-offset-2">
          Why Us
        </h1>
        <p className="text-darkBlue/60 md:w-1/2 w-full text-center">
          We merge creativity, engineering, and strategy to build products that
          win.Our team combines product design, engineering, and business
          insight to help you not just build, but succeed.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <Image
            src={"/Building.png"}
            alt="Building"
            className="md:w-[55%] md:h-[55%] w-full h-full rounded-md mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-col gap-0.5">
            <h1 className="font-semibold">
              We Build With You, Not Just For You
            </h1>
            <p className="text-[0.8rem] text-black/70">
              5 Compelling Reasons to Choose Us
            </p>
          </div>
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <RiUserCommunityFill className="text-plainWhite" />
            </div>
            <div className="w-full">
              <p className="text-[0.8rem]">
                Clear communication and transparency
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <TbTruckDelivery className="text-plainWhite" />
            </div>
            <div className="w-full">
              <p className="text-[0.8rem]">Fast delivery cycles</p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <GiModernCity className="text-plainWhite" />
            </div>
            <div className="w-full">
              <p className="text-[0.8rem]">Modern, scalable technologies</p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <GiTakeMyMoney className="text-plainWhite" />
            </div>
            <div className="w-full">
              <p className="text-[0.8rem]">
                Flexible pricing for early-stage startups
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-4 items-center">
            <div className="w-max p-1 rounded-full bg-kleinBlue">
              <MdManageAccounts className="text-plainWhite" />
            </div>
            <div className="w-full">
              <p className="text-[0.8rem]">Zero-stress project management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
