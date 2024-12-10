"use client";
import Image from "next/image";
import DestinationOfferCard from "../components/DestinationHero/DestinationOfferCard";
import HighlightCard from "../components/DestinationHero/HighlightCard";
import Steps from "../components/DestinationHero/Steps";
import { dmSans } from "../fonts";
import { IoIosArrowBack } from "react-icons/io";

export default function Destinations() {
  const booktrip = {
    title: "Dubrovnik party route",
    rating: "4.9",
    ratingNum: "461",
    price: "1136",
    options: [
      { icon: "/boat.svg", description: "Party vibe" },
      { icon: "/people.svg", description: "Up to 40 people" },
      { icon: "/age.svg", description: "20 - 40 age range" },
      { icon: "/wifi.svg", description: "Free WiFi" },
      { icon: "/date.svg", description: "July | August" },
    ],
  };

  const highlights = [
    {
      title: "fjord like bays",
      photo: "/highlight1.svg",
      description:
        "Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.",
    },
    {
      title: "fjord like bays",
      photo: "/highlight2.svg",
      description:
        "Perast, Kotor, Tivat, Budva, Sveti Stefan…Montenegro is full of traditional Mediterranean coastal towns where locals still live with the nature. Sustainable tourism, local way of life and world famous Montenegrin hospitality.",
    },
    {
      title: "fjord like bays",
      photo: "/highlight3.svg",
      description:
        "Summer Vibes at it’s best. The most amazing Montenegrin beaches, cocktails and live DJs. Dance the night away.",
    },
    {
      title: "fjord like bays",
      photo: "/highlight4.svg",
      description:
        "Relax and enjoy swimming pool area, gym, yoga, massages and saunas in the freshly opened, chic, Lazure Marina. This traditional marina has everything you wish for, from fine dining restaurants to burger bars, cocktails and freshly squeezed fruit stands. Celebrate traditional Montenegrin hospitality and freshness of local produce.",
    },
    {
      title: "fjord like bays",
      photo: "/highlight5.svg",
      description:
        "Is there anything better than sailing and having fun with your mates? Get behind the helm, pull ropes, switch sides and most important, have fun. On SailWeek there are no losers. Everybody wins!!!",
    },
    {
      title: "fjord like bays",
      photo: "/highlight6.svg",
      description:
        "Hike the peak of Lovcen mountain or catch a taxi to the top, for the most spectacular view of the surrounding mountains, postcard perfect cliffs and romantic bays.",
    },
  ];

  return (
    <div className="top-0">
      <div
        className="pt-64 pb-40"
        style={{
          backgroundImage: 'url("/Tekstura1.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full h-[510px]">
          <Image src="/destinationphoto.svg" alt="photo" fill />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-bluecustom"></div>
          <div className="absolute z-10 left-24 bottom-20">
            <p className="font-bold tracking-wide uppercase py-3">
              party route
            </p>
            <p className="font-bold text-5xl">
              The best stories are yet to be told
            </p>
          </div>
          <DestinationOfferCard offer={booktrip} />
        </div>
        <div className="text-bluecustom text-lg m-24 w-[34%] flex flex-col gap-6 leading-7">
          <p>
            From mountains and canyons to fjord-like bays, nostalgic old towns
            to most stunning beaches. Get to now Croatia’s twin sister –
            Montenegro
          </p>
          <p>
            Walk the medieval streets of Kotor, dine the most amazing seafood in
            the Fishermans village. Feel like a millionaire in Porto Montenegro,
            the most luxurious marina in this part of the World. Visit nostalgic
            old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor.
            Get wild in Budva and Tivat. Relax in freshly opened, chic Lazure
            marina.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mx-24">
        <h1 className="text-black text-4xl mb-20">Route Highlights</h1>
        <div className="grid grid-cols-3 gap-16">
          {highlights.map((item, index) => {
            return <HighlightCard item={item} key={index} />;
          })}
        </div>
      </div>

      <Steps />

      <div className="relative w-full h-screen mb-32">
        <Image
          src="/guests.svg"
          alt="photo"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute top-[20%] right-20 flex flex-col max-w-[500px] pr-32">
          <p className="font-semibold font-poppins text-bluecustom text-4xl mb-6">
            Ready to go?
          </p>
          <p
            className={`${dmSans.className} font-dm-sans text-bluecustom pb-12`}
          >
            Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
            amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
          </p>
          <button className="bg-white flex w-fit justify-center items-center gap-3 rounded-full px-5 py-3">
            <p className="capitalize font-poppins font-medium text-bluecustom">
              Explore our destinations
            </p>
            <div className="rounded-full bg-lightgrey p-1">
              <IoIosArrowBack className="text-md text-bluecustom font-light rotate-180" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
