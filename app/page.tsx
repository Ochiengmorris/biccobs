import Products from "@/components/all-products/Products";
import Footer from "@/components/Footer";
import LandingBanner from "@/components/LandingBanner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2 ">
      <div className="p-4 rounded-lg flex items-center gap-4">
        <h2 className="text-2xl">
          Welcome Back, <b>Mike!</b>
        </h2>

        <Button
          variant={"outline"}
          size={"sm"}
          className="rounded-full text-accent-foreground/40 cursor-pointer"
        >
          What's New
        </Button>
      </div>

      {/* Banner */}
      <div>
        <LandingBanner />
      </div>

      {/* All Products */}
      <div className="my-8">
        <Products />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
