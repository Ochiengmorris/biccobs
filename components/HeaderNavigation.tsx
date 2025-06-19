import Image from "next/image";
import React from "react";
import logo from "@/images/icons/logo.svg";
import Link from "next/link";
import { Input } from "./ui/input";
import { MenuIcon, SearchIcon, User2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-700 hover:text-primary transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

const HeaderNavigation = () => {
  return (
    <div className="max-w-7xl z-50 mx-auto px-4 py-2 flex sticky top-0 bg-background items-center justify-between mt-2">
      <Link
        href={"/"}
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Image src={logo} alt="logo" className="size-6" />
        <span>Biccobs</span>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 font-semibold text-sm">
          <NavLink href="/">Categories</NavLink>
          <NavLink href="/about">Deals</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </nav>

      <div className="flex items-center ">
        {/* Search Bar */}
        <form className="relative hidden sm:flex items-center">
          <label htmlFor="search" className="sr-only">
            SearchBar
          </label>
          <Input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 max-w-64 focus:outline-none focus:ring-none focus:ring-primary focus:border-primary focus:border-none"
            aria-label="Search"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary cursor-pointer"
          >
            <SearchIcon className="size-5" />
          </button>
        </form>

        <div className="items-center gap-4 hidden md:flex">
          {/* User Profile Icon */}
          <Link
            href="/profile"
            className={cn(
              "ml-4 text-gray-700 hover:text-primary flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1",
              buttonVariants({ variant: "ghost", size: "default" })
            )}
          >
            <User2Icon className="size-5" />{" "}
            <span className="text-sm">Account</span>
          </Link>

          <Button className="cursor-pointer">Login</Button>
        </div>

        <div>
          <Button variant={"outline"} className="md:hidden ml-4" size={"icon"}>
            <MenuIcon className="size-6 cursor-pointer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
