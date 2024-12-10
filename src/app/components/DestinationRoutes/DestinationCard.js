import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";

export default function DestinationCard({ destination }) {
  const { photo, money, title, party, adventure } = destination;

  return (
    <div className="relative w-full">
      <div className="relative w-full h-48 sm:h-64 lg:h-80 xl:h-[350px] overflow-hidden rounded-lg">
        <Image
          src={photo}
          alt="photo"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text on the left */}
      <div className="absolute bottom-0 md:bottom-10 xl:bottom-14 left-0 sm:left-10 xl:left-14 text-white space-y-2 p-2 sm:p-0">
        <p className="text-sm sm:text-md lg:text-xl font-light">
          From €{money}/person
        </p>
        <p className="flex items-center font-bold text-sm xl:text-3xl capitalize">
          {title} Route <FaGreaterThan className="pl-3" />
        </p>
      </div>

      {/* Sliders in a table */}
      <div className="absolute bottom-0 md:bottom-10 xl:bottom-14 right-0 sm:right-10 xl:right-14 text-white space-y-2 p-2 sm:p-0">
        <table className="text-white">
          <tbody>
            <tr>
              <td className="text-xs md:text-sm lg:text-md lg:text-xl font-medium pr-4">
                Party
              </td>
              <td className="w-20 sm:w-32 xl:w-48">
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
              <td className="text-xs md:text-sm lg:text-md lg:text-xl font-medium pr-4">
                Adventure
              </td>
              <td className="w-20 sm:w-32 xl:w-72">
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
