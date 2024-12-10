import Image from "next/image";
export default function WelcomePhotoCard({ picture }) {
  const { photo, title } = picture;
  return (
    <div className="relative p-0">
      <Image
        src={photo}
        alt="photo"
        width={250}
        height={250}
        className="rounded-lg p-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-lg" />
      <div className="absolute top-3 left-5 text-white font-medium text-2xl capitalize">
        <p>{title}</p>
      </div>
    </div>
  );
}
