"use client";

import { Image } from "@heroui/react";
import { GoDotFill } from "react-icons/go";

const Industries = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <h1 className="text-2xl text-black font-semibold">
          Industries We Serve
        </h1>
        <p className="text-sm text-black/70 md:w-[70%] w-full text-center">
          At BuilditLab, we understand that every industry operates differently.
          Thats why we combine deep technical expertise with domain
          understanding to build solutions that fit your business perfectly,
          whether youre in fintech, e-commerce, healthcare, education, or
          beyond.
        </p>
      </div>
      <div className="my-5">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl text-black">Fintech</h1>
          <div className="w-full flex md:flex-row flex-col gap-5">
            <div className="w-full fle flex-col justify-center items-center gap-4">
              <Image
                src={"/fintech.png"}
                alt="Fintech"
                className="w-48 h-48 mx-auto"
              />
              <p className="text-sm text-center">
                Digital products that power secure, scalable financial
                experiences.
              </p>
            </div>
            <div>
              <h1>
                We build user-friendly financial applications with strong
                security standards, seamless transactions, and beautiful
                interfaces
              </h1>
              <div className="flex flex-row justify-start items-center">
                <GoDotFill className="text-kleinBlue" />
                <p>Savings & investment apps</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <GoDotFill className="text-kleinBlue" />
                <p>Payment processing systems</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <GoDotFill className="text-kleinBlue" />
                <p>Wallet & card applications</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <GoDotFill className="text-kleinBlue" />
                <p>Lending and credit platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
