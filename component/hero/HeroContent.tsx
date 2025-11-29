"use client";

import { Button } from "@heroui/react";

type HeroContentProps = {
  bgImage: string;
  heading: string;
  subHeading: string;
  leftButton?: string;
  rightButton?: string;
};

const HeroContent = ({
  bgImage,
  heading,
  subHeading,
  leftButton,
  rightButton,
}: HeroContentProps) => {
  return (
    <div
      className="w-full h-120 bg-center bg-cover relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-50" />
      {/* <div>
        <h1>Heelo</h1>
      </div> */}
      <div className="relative md:w-1/2 w-full h-auto">
        <div className="text-center w-full flex flex-col gap-4">
          <h1 className="text-plainWhite text-3xl font-bold">{heading}</h1>
          <p className="text-plainWhite/70  w-[75%] text-center mx-auto">
            {subHeading}
          </p>
          <div className="mt-5 flex flex-row gap-4 w-full justify-center items-center transition-all duration-500 ease-in-out">
            {leftButton && (
              <Button className="bg-kleinBlue text-plainWhite hover:scale-105">
                {leftButton}
              </Button>
            )}
            {rightButton && (
              <Button className="bg-plainWhite text-kleinBlue hover:scale-105">
                {rightButton}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
