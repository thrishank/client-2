// import { Inter } from "next/font/google";
// import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { TransparentHeader } from "@/components/TransparentHeader";
 
 

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata = {
  title: "Custom Android, iOS & Hybrid App Development Services",
  description:
    "Elevate your business with our professional mobile app development services. Expert Android, iOS & Hybrid app development tailored to your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      //  className={`${poppins.variable}`}
    >
      <body>
        <TransparentHeader></TransparentHeader>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
