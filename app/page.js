import Blogs from "@/components/Home/Blogs";
import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Industries from "@/components/Home/Industries";
import Partnership from "@/components/Home/Partnership";
import PopularServices from "@/components/Home/PopularServices";
import ProcessFollow from "@/components/Home/ProcessFollow";
import Slider from "@/components/Home/Slider";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4JEVQXM0B7"
      ></Script>
      <Script>
        {`
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'G-4JEVQXM0B7');`}
      </Script>
      <Slider></Slider>
      <div className="bg-[#000212]">
        <PopularServices></PopularServices>
        <ProcessFollow></ProcessFollow>
      </div>
      <div className="bg-[#0A0D22]">
        <Industries></Industries>
        <Partnership></Partnership>
      </div>
      <div className="bg-[#000212] ">
        <CaseStudies></CaseStudies>
        <Blogs></Blogs>
      </div>
      <ContactForm></ContactForm>
    </>
  );
}
