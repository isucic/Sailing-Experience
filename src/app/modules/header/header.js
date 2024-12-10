"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import YellowButton from "@/app/components/yellowButton";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for opening and closing the hamburger menu
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <div
      className={`absolute z-50 top-0 left-0 right-0 flex sm:px-14 justify-between items-center w-full mt-12 pr-10 pl-10`}
    >
      <Link href="/">
        <div className="relative p-0">
          <Image
            src="/Charterag.svg"
            alt="logo"
            width={126}
            height={29.18}
            className={`p-0 ${isHomepage ? "invert" : "text-bluecustom"}`}
          />
        </div>
      </Link>

      <Navbar isHomepage={isHomepage} isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Buttons on large screens */}
      <div className="flex justify-between md:flex hidden">
        <button
          className={`pr-8 font-bold ${
            isHomepage ? "text-white" : "text-bluecustom"
          }`}
        >
          Log in
        </button>
        <YellowButton label="book now" />
      </div>

      {/* Hamburger Menu Button for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white"
        >
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
