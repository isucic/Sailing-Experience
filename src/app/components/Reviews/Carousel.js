"use client";
import { Carousel } from "@material-tailwind/react";
import { RatingWithComment } from "./RatingWithComment";

const g_experience = [
  {
    photo: "/Avatar.png",
    name: "Courtney Henry",
    rating: 2,
    title: "Amazing Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla. ",
  },
  {
    photo: "/Avatar.png",
    name: "John Doe",
    rating: 3,
    title: "Good Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla. ",
  },
  {
    photo: "/Avatar.png",
    name: "John Doe",
    rating: 3,
    title: "Good Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla. ",
  },
];

export default function CarouselNew() {
  return (
    <div className="absolute top-[10%] left-[60%] flex items-center pr-10">
      <div className="p-6 rounded-lg">
        <h1 className="text-bluecustom text-4xl py-14">Our guests loved it!</h1>
        <div className="relative w-[40%] overflow-visible">
          <Carousel
            prevArrow={() => <div style={{ display: "none" }}></div>}
            nextArrow={() => <div style={{ display: "none" }}></div>}
            className="overflow-visible"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute -bottom-10 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-3 rounded-sm cursor-pointer transition-all ${
                      activeIndex === i ? "w-10 bg-white" : "w-6 bg-white/75"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {g_experience.map((experience, index) => (
              <div key={index}>
                <RatingWithComment comment={experience} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
