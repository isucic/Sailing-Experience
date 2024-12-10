import ButtonRoute from "../../buttonRoute";
import { dmSans } from "@/app/fonts";
import FlexiCard from "../../Payment/FlexiCard";
export default function Step3() {
  const payments = [
    { icon: "/dollarbill1.svg", percent: "10", text: "pay when booking" },
    {
      icon: "/dollarbill2.svg",
      percent: "40",
      text: "pay 30 days after booking",
    },
    {
      icon: "/dollarbill3.svg",
      percent: "50",
      text: "pay 60 days before trip",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-screen px-72 pt-24">
      <ButtonRoute bgcolor="bluecustom" fontcolor="white" label="step 2." />
      <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-64">
        Pay and sail{" "}
      </h1>
      <p
        className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-52 px-4`}
      >
        We make it easy to split the cost between your crew and pay in
        instalments.
      </p>
      <div className="flex gap-12 items-center justify-center my-28">
        {payments.map((item, index) => {
          return <FlexiCard item={item} step={index + 1} key={index} />;
        })}
      </div>
    </div>
  );
}
