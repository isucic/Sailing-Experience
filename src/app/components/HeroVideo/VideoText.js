export default function VideoText() {
  const items = ["adventure", "relax", "explore", "fun", "dance"];
  return (
    <div className="absolute z-10 top-0 h-full w-full flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="mt-4 sm:mt-10 flex flex-col justify-center items-center">
        <p className="text-base sm:text-xl lg:text-2xl text-center leading-snug sm:leading-relaxed">
          Sail your way with
        </p>
        <h1 className="uppercase font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          Charterag
        </h1>
        <div className="flex flex-wrap justify-center mt-4 space-x-2 sm:space-x-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-sm sm:text-lg mx-1 sm:mx-2"
            >
              <p className="mx-1">{item}</p>
              <img
                src="/softstar.png"
                className="w-4 h-4 sm:w-5 sm:h-5 mx-1"
                alt="Softstar"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

