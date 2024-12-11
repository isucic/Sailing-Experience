"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Progress,
} from "@material-tailwind/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FlexiCard({ item, step }) {
  const { icon, percent, text } = item;
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const checkStep = () => {
    if (step == "1") {
      return 20;
    } else if (step == "2") {
      return 50;
    } else return 100;
  };

  return (
    <Card
      className="w-full sm:w-60 md:w-72 lg:w-80 p-2 xl:p-8 rounded-md shadow-lg"
      style={{ backgroundColor: isHomepage ? "" : "#C5E5EA" }}
    >
      <CardBody>
        <div
          className="h-[56px] w-[56px] rounded-full p-2"
          style={{ backgroundColor: "#E8F9F1" }}
        >
          <div className="relative h-full w-full">
            <Image src={icon} alt="photo" fill className="object-contain" />
          </div>
        </div>
        <Typography
          variant="h2"
          color="black "
          className="mt-4 font-poppins text-2xl lg:text-3xl"
        >
          {percent}%
        </Typography>

        <p className="font-poppins text-sm" style={{ color: "656565" }}>
          {text}
        </p>
      </CardBody>

      <CardFooter className="pt-0 m-0">
        <Progress value={checkStep()} color="green" />
      </CardFooter>
    </Card>
  );
}
