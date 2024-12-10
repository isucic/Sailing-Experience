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
    <div className="flex flex-col text-bluecustom items-center justify-center mt-56 mx-10 sm:mx-80 mb-56">
      <ButtonRoute
        bgcolor="bluecustom"
        fontcolor="white"
        label="destinations"
      />
      <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-40">
        Whether it's a bash or bliss — the choice is yours{" "}
      </h1>
      <p
        className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-52 px-4`}
      >
        On our customized sailing adventures, embracing the thrill of our party
        routes or unwinding on our relaxing voyages — crafting your perfect
        journey at sea has never been easier.
      </p>

      <div className="grid grid-cols-1 gap-4 mt-20 mb-28">
        {destinations.map((destination, index) => {
          return <DestinationCard destination={destination} key={index} />;
        })}
      </div>
    </div>
  );
}
