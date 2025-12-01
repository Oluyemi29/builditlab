"use client";

import { Divider } from "@heroui/react";
// import Link from "next/link";
// import { FaLink } from "react-icons/fa6";

const OurProjects = () => {
  // const dummyData = [
  //   {
  //     id: "1",
  //     name: "Architecture Design",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamoptio debitis dolores nihil ut eos itaque fuga, iusto nisi. Dolore.",
  //     image:
  //       "https://i.pinimg.com/736x/e0/16/a1/e016a17a8fae8942b4d9d6986eefe663.jpg",
  //     link: "/",
  //   },
  //   {
  //     id: "2",
  //     name: "Interior Design",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamoptio debitis dolores nihil ut eos itaque fuga, iusto nisi. Dolore.",
  //     image:
  //       "https://i.pinimg.com/736x/8b/9d/c2/8b9dc228c637b55b1b5efba4ec54f9db.jpg",
  //     link: "/",
  //   },
  //   {
  //     id: "3",
  //     name: "Hospitality Design",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamoptio debitis dolores nihil ut eos itaque fuga, iusto nisi. Dolore.",
  //     image:
  //       "https://i.pinimg.com/736x/19/cd/bc/19cdbc183b1d4a5cdbc8b69cb996228c.jpg",
  //     link: "/",
  //   },
  // ];
  return (
    <div className="w-full h-auto flex flex-col mt-5 gap-5 bg-gray-100 px-5 py-3">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-2xl font-semibold">Featured Projects</h1>
        <p className="text-black/70">
          Showcasing Our Expertise - Featured Projects That Deliver Results
        </p>
      </div>

      {/* <div className="w-full h-40 flex flex-col justify-center items-center">
        <Image
          src={"/coming-soon.png"}
          alt="Coming"
          className="w-2/4 mx-auto"
        />
      </div> */}

      {/* <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {dummyData.map((eachData, index) => {
          return (
            <Card key={index} className="p-3 w-full relative">
              <h1 className="font-semibold text-[0.8rem]">{eachData.name}</h1>
              <p className="text-[0.8rem] text-black/70">
                {eachData.description}
              </p>
              <Image src={eachData.image} alt="Project Image" />
              <div className="absolute bottom-6 right-6 bg-kleinBlue flex flex-col justify-center items-center rounded-md z-10 w-8 h-8">
                <Link href={eachData.link} className="w-max h-max">
                  <FaLink className=" text-plainWhite ounded-md cursor-pointer" />
                </Link>
              </div>
            </Card>
          );
        })}
      </div> */}

      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="md:w-2/4 w-full flex flex-col gap-3 justify-center items-center bg-kleinBlue/20">
          <Divider className="h-1 bg-stripe-gradient-primary" />
          <h1 className="font-semibold text-2xl text-kleinBlue">COMING SOON</h1>
          <Divider className="h-1 bg-stripe-gradient-primary" />
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
