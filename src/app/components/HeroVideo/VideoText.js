export default function VideoText() {
  const items = ["adventure", "relax", "explore", "fun", "dance"];
  return (
    <div className="absolute z-10 top-0 h-full w-full flex flex-col items-center justify-center">
      <div className="mt-10 flex flex-col justify-center items-center">
        <p className="text-xl sm:text-2xl lg:text-3xl text-center">
          Sail your way with
        </p>
        <h1 className="uppercase font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center">
          Charterag
        </h1>
        <div className="flex justify-center mt-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-lg leading-relaxed mx-2"
            >
              <p className="mx-1">{item}</p>
              <img
                src="/softstar.png"
                className="w-5 h-5 mx-1"
                alt="Softstar"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
