import { dmSans } from "@/app/fonts";
import ButtonRoute from "../buttonRoute";
import PaymentCard from "./PaymentCard";
import FlexiblePayment from "./FlexiblePayment";
export default function Payment() {
  return (
    <div className="flex flex-col text-bluecustom items-center justify-center px-4 sm:px-10 lg:px-52 lg:my-44 my-24">
      <ButtonRoute bgcolor="lightgrey" fontcolor="bluecustom" label="payment" />

      <h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl mt-10 mb-6 px-6 sm:px-12 xl:40 xl:px-80">
        You don't have to break the bank{" "}
      </h1>
      <p
        className={`${dmSans.className} text-center text-base sm:text-lg lg:text-xl max-w-4xl px-6 sm:px-12 xl:px-24`}
      >
        See how lorem impsum dolor sit
      </p>
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-10 my-16 max-w-5xl w-full items-center justify-center mx-auto">
          <PaymentCard title="Sailweek experience" price="787" bg="#c6e4e9" />
          <PaymentCard title="Individual experience" bg="#FFFFF" />
        </div>
      </div>

      <FlexiblePayment />
    </div>
  );
}
