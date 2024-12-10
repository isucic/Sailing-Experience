import { dmSans } from "@/app/fonts";
import ButtonRoute from "../../buttonRoute";
import { AccordionCustom } from "../../AccordionCustom";
import { useState } from "react";

export default function Step1() {
  const [open, setOpen] = useState(0);

  const destinations = [
    {
      title: "ultra",
      photo: "/ultra.png",
      money: "792",
      party: "90",
      adventure: "30",
      list: [
        { name: "Organised parties", percent: "100" },
        { name: "Wine tasting", percent: "0" },
        { name: "Sailweek Regatta", percent: "100" },
        { name: "Island hopping", percent: "10" },
        { name: "Swim Stops", percent: "70" },
        { name: "Exploring cities", percent: "10" },
        { name: "Sightseeing", percent: "30" },
        { name: "Cliff jumping", percent: "70" },
        { name: "Local cuisine", percent: "0" },
      ],
    },
    {
      title: "party",
      photo: "/partyi.png",
      money: "710",
      party: "70",
      adventure: "40",
      list: [
        { name: "Organised parties", percent: "100" },
        { name: "Wine tasting", percent: "0" },
        { name: "Sailweek Regatta", percent: "100" },
        { name: "Island hopping", percent: "10" },
        { name: "Swim Stops", percent: "70" },
        { name: "Exploring cities", percent: "10" },
        { name: "Sightseeing", percent: "30" },
        { name: "Cliff jumping", percent: "70" },
        { name: "Local cuisine", percent: "0" },
      ],
    },
    {
      title: "greece",
      photo: "/greece.png",
      money: "710",
      party: "40",
      adventure: "80",
      list: [
        { name: "Organised parties", percent: "100" },
        { name: "Wine tasting", percent: "0" },
        { name: "Sailweek Regatta", percent: "100" },
        { name: "Island hopping", percent: "10" },
        { name: "Swim Stops", percent: "70" },
        { name: "Exploring cities", percent: "10" },
        { name: "Sightseeing", percent: "30" },
        { name: "Cliff jumping", percent: "70" },
        { name: "Local cuisine", percent: "0" },
      ],
    },
    {
      title: "adventure",
      photo: "/adventure.png",
      money: "792",
      party: "10",
      adventure: "90",
      list: [
        { name: "Organised parties", percent: "100" },
        { name: "Wine tasting", percent: "0" },
        { name: "Sailweek Regatta", percent: "100" },
        { name: "Island hopping", percent: "10" },
        { name: "Swim Stops", percent: "70" },
        { name: "Exploring cities", percent: "10" },
        { name: "Sightseeing", percent: "30" },
        { name: "Cliff jumping", percent: "70" },
        { name: "Local cuisine", percent: "0" },
      ],
    },
  ];

  return (
    <div className="flex flex-col text-bluecustom items-center justify-center w-full">
      <ButtonRoute bgcolor="bluecustom" fontcolor="white" label="step 1." />
      <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-64">
        Choose your route{" "}
      </h1>
      <p
        className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-52 px-4`}
      >
        Explore what you can get for in each route
      </p>

      <div className="grid gap-6 mt-32 mb-60 w-full">
        {destinations.map((items, index) => {
          return (
            <AccordionCustom
              key={index}
              items={items}
              id={index + 1}
              open={open}
              setOpen={setOpen}
            />
          );
        })}
      </div>
    </div>
  );
}
