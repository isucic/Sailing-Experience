import { Carousel, IconButton } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";

export default function PhotoSlideshow({ trip, reverse }) {
  const { title, subtitle, photos, description, sub_desc, bottun_text } = trip;
  return (
    <div className={`grid grid-cols-2 my-24 w-full gap-x-24 gap-y-6`}>
      {/* First column */}
      <div
        className={`${reverse ? "order-2" : "order-1"} flex flex-col gap-y-2`}
      >
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="filled"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full items-center justify-center"
            >
              <IoIosArrowBack className="text-3xl text-gray-500 font-light" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="filled"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full items-center justify-center"
            >
              <IoIosArrowBack className="text-3xl text-gray-500 font-light rotate-180" />
            </IconButton>
          )}
          navigation={() => <div style={{ display: "none" }}></div>}
        >
          {photos.map((photo, photoIndex) => (
            <div key={photoIndex} className="relative rounded-lg">
              <img
                src={photo}
                alt="photo"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Carousel>
        <p className="text-2xl font-medium font-poppins text-bluecustom">
          {subtitle}
        </p>
        <p className="text-base font-regular font-poppins text-bluecustom">
          {sub_desc}
        </p>
      </div>

      {/* Second column */}
      <div className={`pt-24 pr-40 ${reverse ? "order1" : "order-2"}`}>
        <p className="font-semibold font-poppins font-bluecustom text-4xl mb-6">
          {title}
        </p>
        <p className="pb-12">{description}</p>
        <button className="bg-white flex justify-center items-center gap-3 rounded-full px-4 py-2">
          <p className="capitalize font-poppins font-medium">{bottun_text}</p>
          <div className="rounded-full bg-lightgrey p-1">
            <IoIosArrowBack className="text-md text-bluecustom font-light rotate-180" />
          </div>
        </button>
      </div>
    </div>
  );
}
