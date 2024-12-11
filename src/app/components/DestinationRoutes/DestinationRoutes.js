import ButtonRoute from "../buttonRoute";
import { dmSans } from "../../fonts";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    title: "party",
    photo: "/partyi.png",
    money: "710",
    party: "70",
    adventure: "40",
  },
  {
    title: "ultra",
    photo: "/ultra.png",
    money: "792",
    party: "90",
    adventure: "30",
  },
  {
    title: "greece",
    photo: "/greece.png",
    money: "710",
    party: "40",
    adventure: "80",
  },
  {
    title: "adventure",
    photo: "/adventure.png",
    money: "792",
    party: "10",
    adventure: "90",
  },
];

export default function DestinationRoutes() {
  return (
    <div className="flex flex-col items-center text-bluecustom px-4 sm:px-10 lg:px-52 lg:my-44 my-24">
      <ButtonRoute
        bgcolor="bluecustom"
        fontcolor="white"
        label="destinations"
      />
      <h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl mt-10 mb-6 px-6 sm:px-12 xl:40 xl:px-80">
        Whether it's a bash or bliss — the choice is yours{" "}
      </h1>
      <p
        className={`${dmSans.className} text-center text-base sm:text-lg lg:text-xl max-w-4xl px-6 sm:px-12 xl:px-24`}
      >
        On our customized sailing adventures, embracing the thrill of our party
        routes or unwinding on our relaxing voyages — crafting your perfect
        journey at sea has never been easier.
      </p>

      <div className="grid grid-cols-1 gap-14 pt-16 w-full">
        {destinations.map((destination, index) => (
          <DestinationCard destination={destination} key={index} />
        ))}
      </div>
    </div>
  );
}
