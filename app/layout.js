import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import NavBottom from "@/components/navbar/NavBottom";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT GURA",
  description: "Generated by IT GURA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col w-full justify-center items-center">
          <NavBar />
        </div>
        <div>
          <NavBottom />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="md:w-[85%]">{children}</div>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
