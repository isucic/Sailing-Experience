"use client";
import { Typography, Avatar, Rating } from "@material-tailwind/react";

export function RatingWithComment({ comment }) {
  const { photo, name, rating, title, description } = comment;
  return (
    <div
      className={`w-[500px] bg-white text-bluecustom rounded-lg shadow-lg p-11 space-y-4`}
    >
      <Avatar src={photo} alt="image" size="md" />
      <Typography variant="h6" className="mt-2">
        {name}
      </Typography>
      <Rating
        value={rating}
        readonly
        className="pointer-events-none space-x-2 mt-2"
      />
      <Typography variant="h4" className="mt-2">
        {title}
      </Typography>
      <Typography variant="h7" className="mt-2 font-regular pr-8">
        {description}
      </Typography>
    </div>
  );
}
