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
      className="w-screen bg-bluecustom px-72 pt-24"
      style={{
        backgroundImage: 'url("/Tekstura.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-64">
        Flexible payment{" "}
      </h1>
      <div className="flex gap-12 items-center justify-center my-28">
        {payments.map((item, index) => {
          return <FlexiCard item={item} step={index + 1} key={index} />;
        })}
      </div>

      <p
        className="text-white py-8"
        style={{ color: "#A7A7A7", fontSize: "13px" }}
      >
        NOTE: Only applies to bookings made a minimum of 95 days before the
        trip. For bookings made within 95 days before the trip, see our
        <span className="text-bluecustom pl-1" style={{ color: "#2962D0" }}>
          Terms and conditions.
        </span>
      </p>
    </div>
  );
}
