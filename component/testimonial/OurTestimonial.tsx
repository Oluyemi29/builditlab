"use client";

import { Card, Image } from "@heroui/react";
import { IoIosStar } from "react-icons/io";

const OurTestimonial = () => {
  const dummyData = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Moditemporibus, delectus vero fugit veniam officiis, doloremque, voluptatibus debitis cumque autem commodi quasi ratione illum laboriosam maxime tempora id asperiores non ex beatae natus dolorem.Consectetur recusandae quas repellat, magni incidunt blanditiiscorrupti earum deleniti, ad inventore, aliquid expedita veniam quisab reiciendis consequuntur! Reprehenderit doloremque, minima isteodio sit maiores!",
      name: " John Doe",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/1200x/46/4b/8a/464b8ac1969f591a2316c8fa1d534027.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Moditemporibus, delectus vero fugit veniam officiis, doloremque, voluptatibus debitis cumque autem commodi quasi ratione illum laboriosam maxime tempora id asperiores non ex beatae natus dolorem.Consectetur recusandae quas repellat, magni incidunt blanditiiscorrupti earum deleniti, ad inventore, aliquid expedita veniam quisab reiciendis consequuntur! Reprehenderit doloremque, minima isteodio sit maiores!",
      name: "Kenneth Smith",
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/736x/05/6c/85/056c85d23f30445c4ad7889967e6d9a1.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Moditemporibus, delectus vero fugit veniam officiis, doloremque, voluptatibus debitis cumque autem commodi quasi ratione illum laboriosam maxime tempora id asperiores non ex beatae natus dolorem.Consectetur recusandae quas repellat, magni incidunt blanditiiscorrupti earum deleniti, ad inventore, aliquid expedita veniam quisab reiciendis consequuntur! Reprehenderit doloremque, minima isteodio sit maiores!",
      name: "Loveth",
    },
  ];
  return (
    <div className="w-full flex flex-col  justify-center items-center gap-5 my-5">
      <h1 className="text-2xl font-semibold underline underline-offset-2">
        Testimonial
      </h1>
      <div className="overflow-x-auto flex relative w-full">
        <div className="flex flex-row justify-center items-center gap-5 md:px-1 py-5">
          {dummyData.map((eachData, index) => {
            return (
              <Card
                key={index}
                className="md:w-full w-screen flex flex-col gap-1 justify-center items-center p-3"
              >
                <Image
                  src={eachData.image}
                  alt="User"
                  className="w-1/4 rounded-full mx-auto"
                />
                <h1 className="text-[0.8rem] text-center">
                  {eachData.message}
                </h1>
                <div className="flex flex-row justify-center items-center">
                  <IoIosStar className="text-amber-500" size={15} />
                  <IoIosStar className="text-amber-500" size={15} />
                  <IoIosStar className="text-amber-500" size={15} />
                  <IoIosStar className="text-amber-500" size={15} />
                  <IoIosStar className="text-amber-500" size={15} />
                </div>
                <div className="w-max px-2 py-1 bg-darkBlue rounded-md">
                  <h1 className="text-plainWhite font-semibold text-sm">
                    {eachData.name}
                  </h1>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTestimonial;
