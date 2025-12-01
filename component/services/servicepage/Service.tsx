"use client";

import { Card, Image } from "@heroui/react";

const Service = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 my-10 md:grid-cols-2 grid-cols-1 gap-5">
      <Card className="w-full p-5 flex flex-col justify-center items-center gap-5">
        <div className="w-max rounded-full p-3 bg-kleinBlue/20  mx-auto">
          <Image
            src={"/web-dev.png"}
            alt="Web Development"
            className="w-40 h-40"
          />
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-sm font-semibold text-black">
            Website & Web App Development
          </h1>
          <p className="text-sm text-black/70 text-center">
            We deliver custom, scalable, and high-performance websites and
            applications built around your goals. Each project is developed with
            clean design, modern tools, and efficient engineering practices. We
            ensure fast load times, secure architecture, and an experience your
            users will enjoy. Whether you need a simple platform or a full web
            application, we’ve got you covered. Our solutions help you grow,
            stay competitive, and succeed online.
          </p>
        </div>
      </Card>
      <Card className="w-full p-5 flex flex-col justify-center items-center gap-5">
        <div className="w-max rounded-full p-3 bg-kleinBlue/20  mx-auto">
          <Image
            src={"/mobile-app.png"}
            alt="Web Development"
            className="w-40 h-40"
          />
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-sm font-semibold text-black">
            Mobile App Development
          </h1>
          <p className="text-sm text-black/70 text-center">
            We create high-quality iOS and Android apps designed for speed,
            reliability, and smooth user experiences. With thoughtful design and
            efficient development, our apps perform flawlessly across devices.
            We build features that matter, interfaces that users understand, and
            systems that scale effortlessly. Whether youre targeting global
            users or a niche market, we build apps ready for real-world use.
            Your vision becomes a polished, high-performing mobile product.
          </p>
        </div>
      </Card>
      <Card className="w-full p-5 flex flex-col justify-center items-center gap-5">
        <div className="w-max rounded-full p-3 bg-kleinBlue/20  mx-auto">
          <Image
            src={"/product-design.png"}
            alt="Web Development"
            className="w-40 h-40"
          />
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-sm font-semibold text-black">
            Product Design (UI/UX)
          </h1>
          <p className="text-sm text-black/70 text-center">
            We design with your users at the center, ensuring your product
            converts, engages, and retains effectively. Our process emphasizes
            simplicity, usability, and visual clarity across every screen. By
            understanding user needs, we create experiences that feel natural
            and enjoyable to use. From onboarding to daily interactions, every
            detail is optimized for impact. Your product becomes easier to love
            and harder to leave.
          </p>
        </div>
      </Card>
      <Card className="w-full p-5 flex flex-col justify-center items-center gap-5">
        <div className="w-max rounded-full p-3 bg-kleinBlue/20  mx-auto">
          <Image
            src={"/mvp-startup.png"}
            alt="Web Development"
            className="w-40 h-40"
          />
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-sm font-semibold text-black">
            MVP Development for Startups
          </h1>
          <p className="text-sm text-black/70 text-center">
            Get to market quickly with a functional MVP that proves your idea in
            real-world conditions. We focus on essential features that deliver
            value from day one. Test your assumptions, learn from user behavior,
            and adjust with ease. Our process helps you reduce risk and move
            with confidence. Launch fast, learn fast, and scale smart.
          </p>
        </div>
      </Card>
      <Card className="w-full p-5 flex flex-col justify-center items-center gap-5 self-center">
        <div className="w-max rounded-full p-3 bg-kleinBlue/20  mx-auto">
          <Image
            src={"/creative.png"}
            alt="Web Development"
            className="w-40 h-40"
          />
        </div>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-sm font-semibold text-black">
            Branding & Creative Design
          </h1>
          <p className="text-sm text-black/70 text-center">
            From identity design to digital marketing materials, we craft brands
            that rise above the noise. We focus on clarity, consistency, and
            storytelling to shape a strong visual identity. Each brand element
            is created to connect emotionally and communicate your purpose. We
            ensure your presence looks polished across every platform. Your
            brand becomes recognizable, trusted, and built for growth.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Service;
