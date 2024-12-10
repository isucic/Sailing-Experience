import Image from "next/image";
export default function WelcomePhotoCard({ picture }) {
  const { photo, title } = picture;
  return (
    <div className="relative p-0">
      <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[270px] lg:h-[370px] rounded-lg overflow-hidden">
        <Image
          src={photo}
          alt="photo"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-lg" />
      <div className="absolute top-3 left-5 text-white font-medium text-lg sm:text-xl lg:text-2xl capitalize">
        <p>{title}</p>
      </div>
    </div>
  );
}
