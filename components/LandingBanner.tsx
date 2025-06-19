import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import bannerImage from "@/images/placeholder-img1.png";

const LandingBanner = () => {
  return (
    <div className="bg-primary/10 rounded-xl overflow-hidden md:h-[250px]">
      <div className="flex md:flex-row flex-col items-center justify-center h-full">
        <div className="flex-1 h-full md:hidden">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="flex-1 h-full">
          <div className="flex flex-col justify-center h-full md:px-16 px-10 py-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Grab Upto 50% Off On Quality Furniture
            </h1>
            <Button className="cursor-pointer w-fit mt-4">Buy Now</Button>
          </div>
        </div>

        <div className="flex-1 h-full hidden md:block">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
