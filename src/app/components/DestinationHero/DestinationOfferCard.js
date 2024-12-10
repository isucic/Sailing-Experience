import { IoIosStar } from "react-icons/io";
import { Button } from "@material-tailwind/react";
import { dmSans } from "@/app/fonts";
import Image from "next/image";

export default function DestinationOfferCard({ offer }) {
  const { title, rating, ratingNum, price, options } = offer;

  return (
    <div className="absolute bg-white z-30 -bottom-72 right-40 text-bluecustom py-8 px-16 rounded-xl shadow-md items-start">
      <p className="font-semibold text-2xl my-2">{title}</p>
      <div className="flex gap-2 items-center mb-10">
        <div className="bg-yellowcustom w-fit h-fit p-1 rounded-sm">
          <IoIosStar color="white" size="15" />
        </div>
        <p className={`${dmSans.className} font-semibold text-grey-500`}>
          {rating}
        </p>
        <p className="text-gray-500">rating of {ratingNum} reviews</p>
      </div>
      <div className="flex flex-col gap-5">
        {options.map((option, index) => {
          return (
            <div className="flex items-center" key={index}>
              <Image src={option.icon} height={32} width={32} alt="icon" />
              <p className="pl-4">{option.description}</p>
            </div>
          );
        })}
      </div>
      <Button className="my-8 py-4 bg-bluecustom shadow-lg" fullWidth>
        book now
      </Button>
      <p className="text-sm text-gray-500 w-full text-center">
        Prices from €{price} per person
      </p>
    </div>
  );
}
