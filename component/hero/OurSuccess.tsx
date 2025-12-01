"use client";

import { BsBank } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdRealEstateAgent } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import Link from "next/link";

const OurSuccess = () => {
  return (
    <div className="w-full md:p-10 p-2 flex flex-col justify-start items-center">
      {/* our success  */}

      {/* <div className="md:flex hidden md:flex-row flex-col">
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
      </div> */}

      {/* our success pictures  */}
      {/* <div className="flex md:flex-row flex-col justify-between items-center gap-5 md:mt-10 mt-0 w-full">
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
      </div> */}

      <h1 className="text-3xl font-semibold mb-5">Industries We Serve</h1>
      <div className="overflow-x-auto flex w-full">
        <div className="flex flex-row justify-center items-center md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-3 py-4">
          {/* Fintech  */}
          <div className="flex w-full flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <BsBank className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">Fintech</h1>
                <p className="text-sm text-black/70 text-center">
                  Digital products that power secure, scalable financial
                  experiences
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We build user-friendly financial applications with strong
                  security standards, seamless transactions, and beautiful
                  interfaces.
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Savings & investment apps
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Payment processing systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Wallet & card applications
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Lending and credit platforms
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      KYC and onboarding systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E-Commerce & Retail  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <BsCurrencyExchange className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">E-Commerce & Retail</h1>
                <p className="text-sm text-black/70 text-center">
                  Sell smarter with robust digital storefronts and commerce
                  solutions.
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  Whether you’re building a startup marketplace or scaling an
                  online store, we create smooth, conversion-driven experiences
                  for your customers.
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">E-commerce websites</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Multi-vendor marketplaces
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Inventory management systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Order & delivery systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Customer loyalty platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EdTech (Education Technology)  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <IoSchool className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">
                  EdTech (Education Technology)
                </h1>
                <p className="text-sm text-black/70 text-center">
                  Learning experiences designed for engagement and simplicity
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We develop modern learning platforms that enhance teaching,
                  collaboration, and course delivery.
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Online learning platforms
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      School management systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Course creation tools
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Live classroom & tutoring apps
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Certification & assessment systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HealthTech  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <MdOutlineHealthAndSafety className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">HealthTech</h1>
                <p className="text-sm text-black/70 text-center">
                  Secure and reliable solutions for medical and wellness
                  services
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We help healthcare brands go digital with smooth, user-centric
                  tools built with data privacy in mind.
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Patient management systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">Telemedicine apps</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Appointment booking platforms
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Health monitoring dashboards
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">Wellness apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logistics & Transportation  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <RiMotorbikeFill className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">
                  Logistics & Transportation
                </h1>
                <p className="text-sm text-black/70 text-center">
                  Powering smarter delivery and mobility operations
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We build automation-driven systems that help logistics
                  companies manage fleet, track deliveries, and optimize
                  operations
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Delivery tracking systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Fleet management tools
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">Rider/driver apps</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Route optimization software
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">Dispatch platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate & Property  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <MdRealEstateAgent className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">
                  Real Estate & Property
                </h1>
                <p className="text-sm text-black/70 text-center">
                  Digital tools that help property businesses sell, manage, and
                  grow
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We create solutions that make renting, buying, and managing
                  properties easier for users and agents
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Property listing platforms
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Virtual tour solutions
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Agent management dashboards
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Tenant & rent management systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality & Travel  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <MdHotel className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">Hospitality & Travel</h1>
                <p className="text-sm text-black/70 text-center">
                  Create delightful digital experiences for guests and travelers
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We transform booking, management, and experience delivery for
                  hotels, restaurants, and travel agencies
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Hotel booking systems
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Restaurant ordering platforms
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Travel planning apps
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Reservation & ticketing systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality & Travel  */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-kleinBlue/20 flex flex-col justify-center items-center border-2 border-kleinBlue border-dotted">
              <MdHotel className="text-kleinBlue" size={30} />
            </div>
            <div className="flex flex-col justify-center gap-5 items-center w-screen">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold text-center">
                  Startups (General Emerging Markets)
                </h1>
                <p className="text-sm text-black/70 text-center">
                  Perfect for early-stage teams building from zero to one
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <p className="text-sm text-black/70">
                  We help startups validate ideas, build MVPs, and scale quickly
                  without heavy overhead
                </p>
                <p className="text-sm">Solutions we build:</p>
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">MVP development</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Prototype & UI/UX design
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Market-ready web/mobile apps
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start">
                    <IoMdCheckmark className="text-kleinBlue" />
                    <p className="text-sm text-black/70">
                      Iteration & product improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center mt-5 items-center">
        <Link
          href={"/service"}
          className=" text-kleinBlue hover:scale-105 transition-all duration-500 ease-in-out underline underline-offset-2 hover:no-underline"
        >
          More Services
        </Link>
      </div>
    </div>
  );
};

export default OurSuccess;
