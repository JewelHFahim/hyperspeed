import { Oxygen } from "next/font/google";
import TopNav from "@/components/layout/TopNav";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Hyper Speed Performance",
  description: "The Best Place for Wheels, Tires & Car Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={oxygen.className}>
      <body>
        <TopNav />
        <MainNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
