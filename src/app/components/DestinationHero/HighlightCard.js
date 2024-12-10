"use client";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import Image from "next/image";

export default function HighlightCard({ item }) {
  const { title, photo, description } = item;
  return (
    <Card
      className="max-w-[28rem] overflow-hidden p-0"
      color="transparent"
      shadow={false}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none"
      >
        <Image
          width={500}
          height={300}
          src={photo}
          alt="highlights"
          className="p-0 m-0 rounded-xl"
        />
      </CardHeader>

      <CardBody className="p-0">
        <p className="text-2xl capitalize text-black-900 font-medium ">
          {title}
        </p>
        <p className="text-base mt-3 font-normal text-bluecustom">
          {description}
        </p>
      </CardBody>
    </Card>
  );
}
