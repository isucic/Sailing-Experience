import "./globals.css";
import Header from "./modules/header/header";
import Footer from "./modules/Footer/Footer";

import { poppins } from "./fonts";

export const metadata = {
  title: "Charterag",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
