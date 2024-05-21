import "./globals.css";
import { Footer } from "@/components/Footer";
import { TransparentHeader } from "@/components/TransparentHeader";

export const metadata = {
  title: "Custom Android, iOS & Hybrid App Development Services",
  description:
    "Elevate your business with our professional mobile app development services. Expert Android, iOS & Hybrid app development tailored to your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransparentHeader></TransparentHeader>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
