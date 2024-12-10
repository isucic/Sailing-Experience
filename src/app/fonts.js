import { Poppins, Inter, DM_Sans } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "600", "900"],
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["200", "400", "600"],
  display: "swap",
});
