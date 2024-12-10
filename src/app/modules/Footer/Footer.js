"use client";
import Image from "next/image";

export default function Footer() {
  const LINKS = [
    {
      title: "Programs",
      items: ["Program 1", "Program 2", "Program 3", "Program 4"],
    },
    { title: "Find out more", items: ["Link 1", "Link 2", "Link 3"] },
    { title: "Charterag", items: ["Link 1", "Link 2", "Link 3"] },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-bluecustom px-6 sm:px-12 md:px-24 lg:px-44 py-16 mt-20">
      <div className="flex items-center justify-between mb-16">
        <Image
          src="/charterag_white.svg"
          alt="logo"
          width={216}
          height={50}
          className="w-36 sm:w-48 md:w-56 lg:w-72"
        />
        <button onClick={scrollToTop}>
          <Image
            src="/scroll.svg"
            width={30}
            height={30}
            alt="scroll"
            className="w-8 sm:w-10 md:w-12 lg:w-14"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 text-white font-poppins">
        {LINKS.map(({ title, items }) => (
          <ul key={title}>
            <p className="pb-4 text-lg sm:text-xl font-semibold">{title}</p>
            {items.map((link) => (
              <li key={link}>
                <p
                  className="font-poppins py-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {link}
                </p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
