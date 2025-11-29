"use client";

import { Button, Divider, Image } from "@heroui/react";

const OurSuccess = () => {
  return (
    <div className="w-full md:p-10 p-2 md:mt-10 mt-2 flex flex-col justify-center items-center">
      {/* our success  */}
      <div className="md:flex hidden md:flex-row flex-col">
        <div className="text-center w-full">
          <h1 className="text-darkBlue font-semibold">
            Our success is built on the success of our clients.We grow when our
            clients succeed.
          </h1>
        </div>
        <div>
          <Divider orientation="vertical" className="text-black w-0.5 mx-3" />
        </div>
        <div className="text-center w-full md:flex hidden">
          <p className="text-darkBlue/70">
            Our commitment goes beyond delivering services. We partner with our
            clients to achieve meaningful results. When they rise, we rise with
            them.
          </p>
        </div>
      </div>

      {/* our success pictures  */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-5 md:mt-10 mt-0 w-full">
        <div className="w-full hover:scale-105 transition-all duration-500 ease-in-out">
          <Image
            src={"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"}
            alt="Success1"
            className="w-full"
          />
        </div>
        <div className="w-full hover:scale-105 transition-all duration-500 ease-in-out">
          <Image
            src={"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"}
            alt="Success2"
            className="w-full"
          />
        </div>
        <div className="w-full hover:scale-105 transition-all duration-500 ease-in-out">
          <Image
            src={"https://images.unsplash.com/photo-1600880292203-757bb62b4baf"}
            alt="Success3"
            className="w-full"
          />
        </div>
        <div className="w-full hover:scale-105 transition-all duration-500 ease-in-out">
          <Image
            src={"https://images.unsplash.com/photo-1681949287382-052ea3954a51"}
            alt="Success4"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col w-full justify-center mt-5 items-center">
        <Button className="bg-kleinBlue text-plainWhite hover:scale-105">
          More Services
        </Button>
      </div>
    </div>
  );
};

export default OurSuccess;
