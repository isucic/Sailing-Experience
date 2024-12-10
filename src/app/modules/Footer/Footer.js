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
    <div className="bg-bluecustom mt-auto px-44 py-16">
      <div className="flex items-center justify-between mb-16">
        <Image src="/charterag_white.svg" alt="logo" width={216} height={50} />
        {/* Strelica za skrolanje na vrh */}
        <button onClick={scrollToTop}>
          <Image src="/scroll.svg" width={50} height={50} alt="scroll" />
        </button>
      </div>
      <div className="grid grid-cols-6 justify-between gap-4 text-white font-poppins">
        {LINKS.map(({ title, items }) => (
          <ul key={title}>
            <p className="pb-4">{title}</p>
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
