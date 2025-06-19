import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { products } from "@/products";
import ProductCard from "./Product-card";

const Products = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-4">
          <Button
            className="rounded-full text-xs text-gray-500 font-semibold cursor-pointer"
            size={"sm"}
            variant={"outline"}
          >
            Platform{" "}
            <span>
              <ChevronDown className="size-4" />
            </span>
          </Button>
          <Button
            className="rounded-full text-xs font-semibold text-gray-500 cursor-pointer"
            size={"sm"}
            variant={"outline"}
          >
            Reviews{" "}
            <span>
              <ChevronDown className="size-4" />
            </span>
          </Button>
          <Button
            className="hidden sm:flex rounded-full text-xs font-semibold text-gray-500 cursor-pointer"
            size={"sm"}
            variant={"outline"}
          >
            Offer{" "}
            <span>
              <ChevronDown className="size-4" />
            </span>
          </Button>
        </ul>
        <Button
          className="rounded-full text-xs font-semibold text-gray-500 cursor-pointer"
          size={"sm"}
          variant={"outline"}
        >
          Sort by{" "}
          <span>
            <ChevronDown className="size-4" />
          </span>
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-8">Products For You!</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card Placeholder */}
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              starsCount={item.starsCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
