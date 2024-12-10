import ButtonRoute from "../../buttonRoute";
import { dmSans } from "@/app/fonts";
import PhotoSlideshow from "../../photoSlideshow";

export default function Step2() {
  const different_trips = [
    {
      title: "Solo, Cabin or Group of Friends",
      description:
        "Solo, with a friend or with the whole crew, we got it all covered! Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.",
      subtitle: "Solo",
      sub_desc:
        "Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you. ",
      bottun_text: "compare cabins",
      photos: ["/imageslide1.svg", "/imageslide2.svg", "/imageslide3.svg"],
    },
    {
      title: "Catamaran or Monohull",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.",
      subtitle: "Catamaran",
      sub_desc: "Twin hulled boat - for those who travel in style",
      bottun_text: "compare yacths",
      photos: ["/imageslide2.svg", "/imageslide3.svg", "/imageslide1.svg"],
    },
    {
      title: "Skipper and Host",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.",
      subtitle: "Skipper",
      sub_desc: "Lorem ipsum dolor ait amet consectetur",
      bottun_text: "About us",
      photos: ["/imageslide3.svg", "/imageslide2.svg", "/imageslide1.svg"],
    },
  ];

  return (
    <div className="flex flex-col text-bluecustom items-center justify-center w-full">
      <ButtonRoute bgcolor="bluecustom" fontcolor="white" label="step 2." />
      <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center mx-4 lg:mx-10 px-64">
        Choose your crew{" "}
      </h1>
      <p
        className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-52 px-4`}
      >
        Lorem ipsum dolor sit amet
      </p>

      {different_trips.map((trip, index) => (
        <PhotoSlideshow trip={trip} key={index} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}
