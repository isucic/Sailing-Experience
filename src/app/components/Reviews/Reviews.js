import CarouselNew from "./Carousel";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/guests.svg"
        alt="photo"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <CarouselNew />
    </div>
  );
}
