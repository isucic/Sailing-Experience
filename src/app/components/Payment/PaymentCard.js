"use client";
import { HiBadgeCheck } from "react-icons/hi";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

export default function PaymentCard({ title, price, bg }) {
  const list = [
    "experience",
    "lorem ipsum dolor",
    "dolor sit et",
    "lorem ipsum dolor",
    "et santi dolot sum",
    "ipsum lorem dolor sit et",
  ];

  return (
    <div
      className="rounded-xl bg-white p-6 sm:p-8 lg:p-10 relative drop-shadow-lg w-full"
      style={{ backgroundColor: bg }}
    >
      <div className="flex justify-between items-start mb-14">
        <h1 className="text-2xl sm:text-3xl max-w-[70%]">{title}</h1>
        {price && (
          <div className="absolute bg-bluecustom rounded-md p-2 right-4">
            <p className="text-white text-base">from {price}€</p>
          </div>
        )}
      </div>

      <Card className="shadow-none bg-inherit pr-28">
        <List className="flex flex-col items-start p-0">
          {list.map((item, index) => {
            return (
              <ListItem
                key={index}
                className="flex items-center cursor-default pointer-events-none py-1 px-0"
              >
                <ListItemPrefix>
                  <HiBadgeCheck className="text-bluecustom" />
                </ListItemPrefix>
                <span className=" text-bluecustom">{item}</span>
              </ListItem>
            );
          })}
        </List>
      </Card>
    </div>
  );
}
