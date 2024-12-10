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
      description:
        "Spend unforgetable 7 days of sea with your create your own pace",
    },
    {
      icon: "/board.png",
      title: "Active vacation",
      description:
        "Indulge yourself in dozen of parties and activities on your trip",
    },
    {
      icon: "/martini.png",
      title: "Bonding",
      description: "Meet people from all over the world, discover new friends",
    },
  ];
  return (
    <div className="flex flex-col text-bluecustom items-center justify-center mt-56 mx-10 sm:mx-80 mb-56">
      <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-64">
        Come live your best life{" "}
      </h1>
      <p
        className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-52 px-4`}
      >
        Lorem ipsum dolor amet, consectetue adupiscing elit. Faucibus in libero
        risus semper habitant arcu eget. Et integer facilisi eget diam.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-2 mt-28 mb-44">
        {grid.map((photo, index) => {
          return (
            <Image
              src={photo}
              alt="photo"
              height={265}
              width={265}
              className="object-cover rounded-lg"
              key={index}
            />
          );
        })}
      </div>

      <div className="flex gap-[70px]">
        {types.map((item, index) => (
          <div key={index} className="block">
            <div className="inline-flex items-center justify-center mb-4">
              <Image
                src={item.icon}
                width={26}
                height={26}
                alt="photo"
                className="mr-3"
              />
              <p className="text-2xl font-medium">{item.title}</p>
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
