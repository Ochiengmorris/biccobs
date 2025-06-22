"use client";

import React from "react";
import { Card } from "../ui/card";
import image1 from "@/images/Amazon-Logo.png";
import image2 from "@/images/pngwing.com (1).png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { BookmarkIcon, Forward, PlusCircle, Share2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const ProductCard = ({
  image,
  title,
  description,
  starsCount,
}: {
  image?: StaticImageData;
  title: string;
  description: string;
  starsCount: number;
}) => {
  const router = useRouter();

  // Stop propagation to prevent triggering the card click
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Button inside card clicked!");
  };
  return (
    <Card
      className="p-0 bg-transparent shadow-none border-none gap-0 relative group cursor-pointer"
      onClick={() =>
        router.push(`/product/${title.toLowerCase().replace(/\s+/g, "-")}`)
      }
      role="button"
    >
      <div className="aspect-square bg-accent/10 hover:bg-accent/20 transition-all duration-300 shadow-lg border rounded-lg overflow-hidden relative">
        {image && (
          <Image
            src={image}
            alt={title || "Product Image"}
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
            priority
          />
        )}
        {/* hover state clickables */}
        <div className="absolute inset-0 bg-accent h-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <Button
              onClick={handleButtonClick}
              variant={"outline"}
              className={"text-xs font-semibold border-r flex-1 cursor-pointer"}
            >
              <BookmarkIcon className="inline" />
              Save
            </Button>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-xs font-semibold border-r flex-1"
              )}
            >
              <PlusCircle className="inline" />
              Add to a kit
            </Link>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-xs font-semibold flex-1"
              )}
            >
              <Forward className="inline" />
              Share
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold mt-2">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-3">
          {description}
        </p>
        <div className="flex items-center mt-1">
          {[...Array(starsCount)].map((_, index) => (
            <span key={index} className="text-primary">
              ★
            </span>
          ))}
          {[...Array(5 - starsCount)].map((_, index) => (
            <span key={index} className="text-gray-300">
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <span className="text-[10px] font-semibold">BUY IT ON:</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Link
            href={"https://amazon.com"}
            target="_blank"
            className={cn(
              "w-full flex flex-1 items-center justify-center mt-1",
              buttonVariants({ variant: "outline" })
            )}
          >
            <Image
              src={image1}
              alt="amazon link"
              className="w-12 mt-1"
              priority
            />
          </Link>
          <Link
            href={"https://walmart.com"}
            target="_blank"
            className={cn(
              "w-full flex flex-1 items-center justify-center mt-1",
              buttonVariants({ variant: "outline" })
            )}
          >
            <Image src={image2} alt="walmart link" className="w-18" priority />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
