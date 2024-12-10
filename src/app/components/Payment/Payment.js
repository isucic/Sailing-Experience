import { dmSans } from "@/app/fonts";
import ButtonRoute from "../buttonRoute";
import PaymentCard from "./PaymentCard";
import FlexiblePayment from "./FlexiblePayment";
export default function Payment() {
  return (
    <div className="flex flex-col text-bluecustom items-center justify-center mt-56 mx-10 sm:mx-80 mb-36">
      <ButtonRoute bgcolor="lightgrey" fontcolor="bluecustom" label="payment" />

      <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-64">
        You don't have to break the bank{" "}
      </h1>
      <p
        className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-52 px-4`}
      >
        See how lorem impsum dolor sit
      </p>
      <div className="flex my-20 gap-12">
        <PaymentCard title="Sailweek experience" price="787" bg="#c6e4e9" />
        <PaymentCard title="Individual experience" bg="#FFFFF" />
      </div>

      <FlexiblePayment />
    </div>
  );
}
