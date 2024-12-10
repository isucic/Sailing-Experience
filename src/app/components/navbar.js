"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
    const isHomepage = pathname === "/";
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
    <nav className="py-5 h-20 items-center md:flex hidden">{createItems()}</nav>
  );
};

export default Navbar;
