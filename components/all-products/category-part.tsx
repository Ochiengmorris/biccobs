import { LockKeyholeOpenIcon } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { categories } from "@/products";
import Image from "next/image";

const CategoriyPart = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-8">What Are You Looking For!</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="gap-0 p-4 bg-transparent hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
          >
            <h3 className="flex justify-between items-center text-lg font-semibold mb-4">
              {category.name}{" "}
              <LockKeyholeOpenIcon className="size-4 text-primary" />{" "}
            </h3>
            <p className="text-gray-600 text-xs">99+ Products</p>

            <div>
              <Image
                src={category.image}
                alt={category.name || "category Image"}
                className="w-full h-40 object-contain"
                priority
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoriyPart;
