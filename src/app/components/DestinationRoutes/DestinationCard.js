import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";

export default function DestinationCard({ destination }) {
  const { photo, money, title, party, adventure } = destination;

  return (
    <div className="relative p-2">
      <Image
        src={photo}
        alt="photo"
        width={1103}
        height={404}
        className="rounded-lg p-0"
      />
      {/* Text on the left */}
      <div className="absolute bottom-12 left-14 text-left text-white">
        <p className="font-thin text-xl pb-1">From €{money}/person</p>
        <p className="flex font-semibold text-3xl capitalize items-center">
          {title} Route <FaGreaterThan className="pl-3" />
        </p>
      </div>
      {/* Sliders in a table */}
      <div className="absolute bottom-12 right-14 space-y-6">
        <table className="text-white">
          <tbody>
            <tr>
              <td className="pr-4 text-sm sm:text-base font-medium">Party</td>
              <td className="w-48">
                <div className="relative w-full h-2 bg-white rounded-full overflow-hidden">
                  <div
                    className="absolute h-full rounded-full bg-babyblue"
                    style={{
                      width: `${party}%`,
                    }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="pr-4 text-sm sm:text-base font-medium">
                Adventure
              </td>
              <td className="w-48">
                <div className="relative w-full h-2 bg-white rounded-full overflow-hidden">
                  <div
                    className="absolute h-full rounded-full bg-babyblue"
                    style={{
                      width: `${adventure}%`,
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
