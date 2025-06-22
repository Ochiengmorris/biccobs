"use client";

import { BookmarkIcon, ChevronRight, Forward, PlusCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { products } from "@/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/images/Amazon-Logo.png";
import image2 from "@/images/pngwing.com (1).png";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const ProductPage = () => {
  const { slug } = useParams();
  const [productItem, setProductItem] = useState(products[0]);

  useEffect(() => {
    if (!slug) return;

    // Convert slug to string and normalize
    const slugString =
      typeof slug === "string"
        ? slug
        : Array.isArray(slug)
        ? slug.join("-")
        : "";

    // Find product by matching the slugified title
    const foundProduct = products.find(
      (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slugString
    );

    if (foundProduct) {
      setProductItem(foundProduct);
    }
  }, [slug]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <h3 className="text-sm flex items-center mt-4 font-semibold text-muted-foreground">
        Clothes and shoes <ChevronRight className="size-3 mx-2" />
        {productItem?.title}
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          {productItem?.image && (
            <Image
              src={productItem.image}
              alt={productItem.title}
              className="w-full h-auto aspect-square object-contain rounded-xl"
              priority
            />
          )}

          <div className="bg-accent h-fit flex items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <Button
                // onClick={handleButtonClick}
                variant={"outline"}
                className={
                  "text-xs font-semibold border-r flex-1 cursor-pointer"
                }
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
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl font-semibold ">{productItem.title}</h3>
          <div className="flex items-center space-x-2">
            <div className="bg-accent/80 shadow-lg border p-2 w-fit rounded-full overflow-hidden mb-2 ">
              <Image
                src={productItem.image}
                alt={productItem.title || "Product Title"}
                className="w-6 h-6 object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-xs">Beauty & Fashion Trends</p>
              <p className="text-[10px] text-muted-foreground">
                From <b>Biccobs</b>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center ">
              {[...Array(productItem.starsCount)].map((_, index) => (
                <span key={index} className="text-primary">
                  ★
                </span>
              ))}
              {[...Array(5 - productItem.starsCount)].map((_, index) => (
                <span key={index} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
            {/* fix this */}
            <p className="text-sm text-muted-foreground">
              {productItem.starsCount} reviews
            </p>
          </div>

          {/* Description */}
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              {productItem.description}
            </p>
          </div>

          {/* Buy it on */}
          <div className="w-full flex flex-col mt-16 items-center justify-center">
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
                <Image
                  src={image2}
                  alt="walmart link"
                  className="w-18"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Similar Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {products
            .filter((item) => item.title !== productItem.title)
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto aspect-square object-contain rounded-md mb-2"
                  priority
                />
                <h4 className="text-sm font-semibold line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
