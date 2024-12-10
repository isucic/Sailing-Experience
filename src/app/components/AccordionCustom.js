import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Progress,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export function AccordionCustom({ items, id, open, setOpen }) {
  const { title, photo, list } = items;

  const handleToggle = () => {
    setOpen(open === id ? 0 : id);
  };

  return (
    <Accordion open={open === id} className="bg-lightgrey rounded-lg px-8">
      <AccordionHeader
        className="relative w-full border-b-0"
        onClick={handleToggle}
      >
        <p className="text-bluecustom font-poppins capitalize">
          {title}
          {" Route "}
        </p>
        <IoIosArrowDown
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
            open === id ? "rotate-180" : "rotate-0"
          }`}
        />
      </AccordionHeader>
      <AccordionBody className="grid grid-cols-2 gap-16 pb-20">
        <div className="relative w-[406px] h-[276px]">
          <Image
            src={photo}
            fill
            alt="photo"
            className="shadow-lg rounded-lg object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-12">
          {list.map((item, index) => (
            <div key={index}>
              <p className="text-bluecustom font-poppins text-base mb-2">
                {item.name}
              </p>
              <Progress value={item.percent} color="green" />
            </div>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
}
