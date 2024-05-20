import Link from "next/link";

export const Footer = () => {
  const services = [
    { name: "Android App", link: "/services/android-app" },
    { name: "iOS App", link: "/services/ios-app" },
    { name: "Hybrid App", link: "/services/hybrid-app" },
    { name: "Flutter App", link: "/services/flutter-app" },
    { name: "React Native App", link: "/services/react-native-app" },
  ];

  const menuData = [
    {
      label: "About us",
      link: "/about-us",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Solutions",
      link: "/solutions",
    },
    {
      label: "Case Studies",
      link: "/case-studies",
    },
    {
      label: "Blogs",
      link: "/blogs",
    },
  ];

  return (
    <div className="bg-[#000212] font-newfont">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-8">
          <div className="md:max-w-md lg:col-span-3">
            <Link
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="/logo.png" className=" w-[200px]" alt="" />
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-[#959EAD] mb-8">
                501, Shapath 1, SG Hwy, Highway, Bodakdev, Ahmedabad, Gujarat
                380054
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2 text-[#959EAD]">
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5.47388L9.4735 9.10357L18.947 5.47388V12C18.947 14.2091 17.1561 16 14.947 16H4C1.79086 16 0 14.2091 0 12V5.47388Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H14.947C17.1561 0 18.947 1.79086 18.947 4V4.36355L9.4735 7.99984L0 4.36355V4Z"
                      fill="#959EAD"
                    />
                  </svg>

                  <Link
                    href="mailto:sales@overninja.com"
                    className="text-[#959EAD] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    sales@overninja.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.00225 0H8.99775C4.03538 0 0 4.0365 0 9C0 10.9688 0.6345 12.7935 1.71337 14.2751L0.59175 17.6186L4.05113 16.5128C5.47425 17.4555 7.17188 18 9.00225 18C13.9646 18 18 13.9624 18 9C18 4.03763 13.9646 0 9.00225 0ZM14.2391 12.7091C14.022 13.3223 13.1602 13.8307 12.4729 13.9792C12.0026 14.0794 11.3884 14.1593 9.32063 13.302C6.67575 12.2063 4.9725 9.51862 4.83975 9.34425C4.71263 9.16988 3.771 7.92112 3.771 6.62963C3.771 5.33813 4.42688 4.70925 4.69125 4.43925C4.90838 4.21763 5.26725 4.11637 5.6115 4.11637C5.72288 4.11637 5.823 4.122 5.913 4.1265C6.17737 4.13775 6.31012 4.1535 6.4845 4.57088C6.70162 5.094 7.23037 6.3855 7.29338 6.51825C7.3575 6.651 7.42163 6.831 7.33162 7.00538C7.24725 7.18538 7.173 7.26525 7.04025 7.41825C6.9075 7.57125 6.7815 7.68825 6.64875 7.8525C6.52725 7.99538 6.39 8.14838 6.543 8.41275C6.696 8.6715 7.22475 9.53437 8.00325 10.2274C9.00787 11.1217 9.82237 11.4075 10.1137 11.529C10.3309 11.619 10.5896 11.5976 10.7483 11.4289C10.9496 11.2118 11.1982 10.8518 11.4514 10.4974C11.6314 10.2431 11.8586 10.2116 12.0971 10.3016C12.3401 10.386 13.626 11.0216 13.8904 11.1532C14.1547 11.286 14.3291 11.349 14.3932 11.4604C14.4562 11.5718 14.4562 12.0949 14.2391 12.7091Z"
                      fill="#959EAD"
                    />
                  </svg>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=919998847740&text&type=phone_number&app_absent=0"
                    className="text-[#959EAD] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    +91 9998847740
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_691_9031)">
                      <path
                        d="M17.3629 10.5125C17.4557 10.0067 17.5045 9.48915 17.5045 8.97169C17.5045 7.82431 17.2799 6.71126 16.8361 5.6633C16.4079 4.65105 15.7953 3.74207 15.0143 2.96163C14.2344 2.18106 13.3247 1.56857 12.313 1.14038C11.2655 0.697081 10.1523 0.472411 9.00506 0.472411C8.46426 0.472411 7.92264 0.523223 7.39557 0.624434C7.39447 0.624709 7.39296 0.624709 7.39159 0.624984C6.66841 0.240463 5.85515 0.0351562 5.03187 0.0351562C3.68783 0.0351562 2.42413 0.558516 1.47381 1.50924C0.523635 2.45956 0 3.72326 0 5.0673C0 5.92272 0.220138 6.76372 0.633086 7.50681C0.549315 7.98828 0.505095 8.48033 0.505095 8.97169C0.505095 10.1194 0.729765 11.2323 1.17361 12.2804C1.60112 13.2929 2.21402 14.2013 2.99432 14.9819C3.77531 15.7623 4.68374 16.3758 5.69654 16.8029C6.74422 17.247 7.85768 17.4718 9.00493 17.4718C9.50439 17.4718 10.005 17.4262 10.4936 17.3396C11.2464 17.7654 12.0987 17.9917 12.9691 17.9917C14.3128 17.9917 15.5758 17.4693 16.5263 16.5183C17.4769 15.5686 18 14.3046 18 12.9605C18 12.1022 17.7787 11.2585 17.3629 10.5125Z"
                        fill="#959EAD"
                      />
                      <path
                        d="M9.03846 14.1769C6.01887 14.1769 4.66797 12.6923 4.66797 11.5797C4.66797 11.0091 5.08929 10.6091 5.66992 10.6091C6.96218 10.6091 6.62751 12.4645 9.03846 12.4645C10.2728 12.4645 10.9543 11.7943 10.9543 11.1085C10.9543 10.696 10.7508 10.2388 9.9381 10.0385L7.25236 9.36801C5.08929 8.82557 4.69681 7.65621 4.69681 6.55703C4.69681 4.2749 6.84559 3.41797 8.8635 3.41797C10.7224 3.41797 12.9136 4.44533 12.9136 5.81449C12.9136 6.40116 12.4056 6.74229 11.8251 6.74229C10.7224 6.74229 10.9252 5.21588 8.70379 5.21588C7.60145 5.21588 6.99089 5.71507 6.99089 6.42932C6.99089 7.14233 7.86155 7.37002 8.61741 7.54223L10.6054 7.98347C12.783 8.46865 13.3351 9.74004 13.3351 10.9375C13.3352 12.792 11.9117 14.1769 9.03846 14.1769Z"
                        fill="#0D2436"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_691_9031">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <Link
                    href="https://join.skype.com/invite/qdGdJjdkYUqH"
                    className="text-[#959EAD] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    overninja.tech
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-between row-gap-8 lg:col-span-5 md:grid-cols-3 gap-y-5 ">
            <div>
              <p className="font-semibold tracking-wide text-white">SERVICES</p>
              <ul className="mt-2 space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`${service.link}`}
                      className="text-[#959EAD] transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">COMPANY</p>
              <ul className="mt-2 space-y-2">
                {menuData.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={`${menu.link}`}
                      className="text-[#959EAD] transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                FOLLOW US
              </p>
              <div className="flex flex-col  mt-2 space-y-2">
                {" "}
                <p className=" text-[#959EAD]">
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/overninja-technologies-pvt-ltd/"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className=" text-[#959EAD]">
                  {" "}
                  <a
                    target="_blank"
                    href=" https://www.facebook.com/overninjatech"
                  >
                    {" "}
                    Facebook
                  </a>
                </p>
                <p className=" text-[#959EAD]">
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.instagram.com/over_ninja_tech/"
                  >
                    Instagram
                  </a>
                </p>
                <p className=" text-[#959EAD]">
                  {" "}
                  <a target="_blank" href="https://twitter.com/OverNinjaTech">
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10  gap-5 ">
          <div className="flex items-center flex-col md:flex-row gap-3  mt-4 space-x-4 sm:mt-0 text-[#959EAD] md:mr-">
            <p>
              <Link href="/terms-of-use">Terms of Use</Link>
            </p>
            <p>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
          <p className="text-sm text-[#959EAD] text-center">
            © 2024 Overninja Technologies | All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
