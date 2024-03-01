import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import NavBottom from "@/components/navbar/NavBottom";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "IT GURA",
  description: "Generated by IT GURA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-full justify-center items-center">
          <NavBar />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <NavBottom />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="md:w-[80%]">{children}</div>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
