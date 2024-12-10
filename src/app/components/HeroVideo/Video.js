import VideoText from "./VideoText";
export default function Video() {
  return (
    <div className="top-0 h-screen sm:h-[90vh] md:h-screen relative">
      <video
        src="/homepagevideo.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-bluecustom to-transparent"></div>
      <VideoText />
    </div>
  );
}
