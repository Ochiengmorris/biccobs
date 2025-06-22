import React from "react";
import image1 from "@/images/placeholder-img1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[250px] bg-gray-900/90 relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full text-white">
        <span className="text-4xl lg:text-5xl font-bold italic text-center">
          "Let's Shop Beyond Boundaries"
        </span>
      </div>

      <div className="absolute inset-0 ">
        <Image
          src={image1}
          alt="let's shop beyond boundaries"
          className="h-full w-full object-cover opacity-10"
        />
      </div>
    </div>
  );
};

export default Footer;
