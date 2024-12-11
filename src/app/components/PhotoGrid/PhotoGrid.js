import { dmSans, inter } from "@/app/fonts";
import Image from "next/image";

export default function PhotoGrid() {
  const grid = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
  ];

  const types = [
    {
      icon: "/boat.png",
      title: "A trip like no other",
      description: "Spend unforgettable 7 days at sea and create your own pace",
    },
    {
      icon: "/board.png",
      title: "Active vacation",
      description:
        "Indulge yourself in dozens of parties and activities on your trip",
    },
    {
      icon: "/martini.png",
      title: "Bonding",
      description: "Meet people from all over the world, discover new friends",
    },
  ];

  return (
    <div className="flex flex-col text-bluecustom items-center justify-center px-4 sm:px-10 lg:px-52">
      <h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl mt-16 mb-8 px-4 sm:px-8 lg:px-20">
        Come live your best life
      </h1>
      <p
        className={`${dmSans.className} text-center text-base sm:text-lg lg:text-xl max-w-4xl px-6 sm:px-12 xl:px-24 mb-12`}
      >
        Lorem ipsum dolor amet, consectetue adipiscing elit. Faucibus in libero
        risus semper habitant arcu eget. Et integer facilisi eget diam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
        {grid.map((photo, index) => (
          <div key={index} className="relative h-60 sm:h-72 lg:h-80 w-full">
            <Image
              src={photo}
              alt="photo"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-20 mb-16">
        {types.map((item, index) => (
          <div key={index} className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <Image
                src={item.icon}
                width={30}
                height={30}
                alt="icon"
                className="mr-3"
              />
              <p className="text-lg sm:text-xl font-medium">{item.title}</p>
            </div>
            <p className="text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
