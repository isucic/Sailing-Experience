import FlexiCard from "./FlexiCard";

export default function FlexiblePayment() {
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
    <div
      className="w-screen bg-bluecustom px-6 sm:px-16 lg:px-72 pt-24 pb-8 items-center justify-center flex-col"
      style={{
        backgroundImage: 'url("/Tekstura.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl py-4 text-center ">
        Flexible payment
      </h1>

      <div className="flex items-center justify-center w-full max-w-6xl mx-auto my-12">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-12 gap-y-10 w-full">
          {payments.map((item, index) => (
            <FlexiCard item={item} step={index + 1} key={index} />
          ))}
        </div>
      </div>

      <p className="text-white text-sm w-full">
        NOTE: Only applies to bookings made a minimum of 95 days before the
        trip. For bookings made within 95 days before the trip, see our
        <span className="text-bluecustom pl-1" style={{ color: "#2962D0" }}>
          Terms and conditions.
        </span>
      </p>
    </div>
  );
}
