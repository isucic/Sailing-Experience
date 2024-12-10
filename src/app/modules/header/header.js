"use client";
import Link from "next/link";
import Image from "next/image";
import YellowButton from "@/app/components/yellowButton";
import { usePathname } from "next/navigation";

const { default: Navbar } = require("@/app/components/navbar");

const Header = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <div
      className={`absolute z-50 top-0 flex sm:px-14 justify-between items-center w-full mt-12 mr-10 ml-10`}
    >
      <Link href="/">
        <div className="relative p-0">
          <Image
            src="/Charterag.svg"
            alt="logo"
            width={126}
            height={29.18}
            className="p-0"
          />
        </div>
      </Link>
      <Navbar />
      <div className="flex justify-between">
        <button
          className={`pr-8 font-bold ${
            isHomepage ? "text-white" : "text-bluecustom"
          }`}
        >
          Log in
        </button>
        <YellowButton label="book now" />
      </div>{" "}
    </div>
  );
};

export default Header;
