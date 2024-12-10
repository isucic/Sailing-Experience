"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import YellowButton from "@/app/components/yellowButton";

const Navbar = ({ isHomepage, isOpen, setIsOpen }) => {
  const menuItems = [
    { title: "destinations", link: "destinations" },
    { title: "how it works", link: "howitworks" },
    { title: "about", link: "about" },
    { title: "blog", link: "blog" },
    { title: "FAQ", link: "faq" },
  ];

  const pathname = usePathname();
  const isActive = (name) => pathname.includes(name);

  const createItems = () => {
    return menuItems.map((item) => {
      const itemLink = `/${item.link}`;
      const textColor = isHomepage ? "text-white" : "text-bluecustom";
      const underline =
        isActive(itemLink) &&
        (isHomepage ? "decoration-white" : "decoration-bluecustom");

      return (
        <Link href={itemLink} key={item.title}>
          <p
            className={`lg:text-lg px-4 py-2 capitalize font-light ${textColor} ${
              underline
                ? `${underline} underline decoration-2 underline-offset-8`
                : ""
            }`}
          >
            {item.title}
          </p>
        </Link>
      );
    });
  };

  return (
    <>
      {/* Navbar for large screens */}
      <nav className="hidden md:flex items-center">{createItems()}</nav>

      {/* Hamburger menu for small screens */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-bluecustom shadow-md p-4 z-40 md:hidden">
          <div className="flex flex-col items-start space-y-4">
            {createItems()}
            <button className="font-bold text-bluecustom">Log in</button>
            <YellowButton label="book now" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
