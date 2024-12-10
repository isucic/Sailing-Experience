import WelcomePhotoCard from "./WelcomePhotoCard";
import ButtonRoute from "../buttonRoute";
import { dmSans, inter } from "@/app/fonts";
import { IoStar } from "react-icons/io5";
import { FaFacebook, FaGoogle } from "react-icons/fa";
export default function Welcome() {
  const photos = [
    { title: "sail", photo: "/sail.png" },
    { title: "party", photo: "/party.png" },
    { title: "explore", photo: "/explore.png" },
    { title: "relax", photo: "/relax.png" },
  ];

  const ratings = [
    { icon: <IoStar className="w-11 h-11" />, rating: "4.8", number: "325" },
    {
      icon: <FaFacebook className="w-11 h-11" />,
      rating: "4.8",
      number: "325",
    },
    { icon: <FaGoogle className="w-11 h-11" />, rating: "4.8", number: "325" },
  ];
  return (
    <div className="bg-bluecustom pt-20 pb-20">
      <div className="ratingsbox flex flex-wrap justify-around mt-20 mx-10 sm:mx-44">
        {ratings.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center my-4 sm:my-0"
          >
            {item.icon}
            <div className={`${inter.className} inline pl-4 sm:pl-6`}>
              <p className="font-bold">{item.rating}/5</p>
              <p className="text-sm">Based on {item.number} reviews</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-56 mx-10 sm:mx-44">
        <ButtonRoute bgcolor="lightblue" fontcolor="white" label="welcome" />
        <h1 className="font-semibold text-5xl sm:text-3xl lg:text-5xl py-4 text-center">
          What is a Charterag experience
        </h1>
        <p
          className={`${dmSans.className} font-normal text-center text-lg leading-tight sm:px-8 px-4`}
        >
          Join us for a week of sailing, unique adventures and exclusive parties
          in stunning locations. Explore new places daily. Dive into local
          culture. Dance the nights away. Leave with new friends and lifelong
          memories.
        </p>

        {/* Photo grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mt-28 mb-44">
          {photos.map((photo, index) => {
            return <WelcomePhotoCard picture={photo} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
