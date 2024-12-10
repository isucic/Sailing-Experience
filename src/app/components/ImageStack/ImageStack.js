"use client";
import Image from "next/image";
import { dmSans } from "@/app/fonts";
import YellowButton from "../yellowButton";
import { FaInstagram } from "react-icons/fa";
export default function ImageStack() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 sm:mx-80 mb-56 text-bluecustom">
      <div className="relative w-full h-[500px] mb-10">
        <div className="absolute left-10 top-0 z-10">
          <Image
            src="/left.svg"
            alt="left"
            width={400}
            height={900}
            quality={100}
          />
        </div>

        <div className="absolute left-[52%] -bottom-10 transform -translate-x-1/2 z-20 w-[500px]">
          <Image src="/centar.svg" width={800} height={600} alt="center" />
        </div>

        <div className="absolute right-10 top-0 z-10">
          <Image
            src="/right.svg"
            width={400}
            height={400}
            alt="right"
            quality={100}
          />
        </div>
      </div>

      <h1 className="font-semibold sm:text-2xl lg:text-4xl py-4 text-center mx-4 lg:mx-10 px-64">
        Check Charterag off your bucket list{" "}
      </h1>
      <p
        className={`${dmSans.className} text-center text-base leading-tight sm:px-80 px-4 mx-10`}
      >
        Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
        amet
      </p>

      <div className="flex gap-3 mt-14">
        <YellowButton label="explore" />
        <button className="bg-white text-blue font-medium uppercase py-2 px-6 rounded-full min-w-40">
          <div className="flex items-center justify-center gap-2">
            follow us
            <FaInstagram />
          </div>
        </button>
      </div>
    </div>
  );
}
