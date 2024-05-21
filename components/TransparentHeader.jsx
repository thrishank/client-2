"use client";
import React, { useEffect, useState } from "react";
import WhiteButton from "./ui/WhiteButton";
import "animate.css";

export const TransparentHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const [mobileDropDown1, setMobileDropDown1] = useState(false);
  const [mobileDropDown2, setMobileDropDown2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menuData = [
    {
      label: "Services",
      number: 5,
      link: "/services",
      submenu: [
        {
          label: "Android App",
          link: "/services/android-app",
        },
        {
          label: "iOS App",
          link: "/services/ios-app",
        },
        {
          label: "Hybrid App",
          link: "/services/hybrid-app",
        },
        {
          label: "Flutter App",
          link: "/services/flutter-app",
        },
        {
          label: "React Native App",
          link: "/services/react-native-app",
        },
      ],
    },
    {
      label: "Solutions",
      number: 15,
      link: "/solutions",
      submenu: [
        {
          label: "Food App",
          link: "/solutions/food-app",
        },
        {
          label: "Tourism App",
          link: "/solutions/tourism-app",
        },
        {
          label: "Ecommerce App",
          link: "/solutions/ecommerce-app",
        },

        {
          label: "Logistic App",
          link: "/solutions/logistics-app",
        },

        {
          label: "Sports App",
          link: "/solutions/sports-app",
        },

        {
          label: "Health Care App",
          link: "/solutions/health-care-app",
        },

        {
          label: "Fitness App",
          link: "/solutions/fitness-app",
        },

        {
          label: "Dating App",
          link: "/solutions/dating-app",
        },
        {
          label: "Marketplace App",
          link: "/solutions/marketplace-app",
        },

        {
          label: "Education App",
          link: "/solutions/education-app",
        },

        {
          label: "Real Estate App",
          link: "/solutions/real-estate-app",
        },
        {
          label: "Entertainment App",
          link: "/solutions/entertainment-app",
        },
      ],
    },
    {
      label: "Case Studies",
      link: "/case-studies",
    },
    {
      label: "About us",
      link: "/about-us",
    },
    {
      label: "Blogs",
      link: "/blogs",
    },
  ];

  const handleService = () => {
    setMobileDropDown1(!mobileDropDown1);
    setMobileDropDown2(false);
  };

  const handleSolution = () => {
    setMobileDropDown2(!mobileDropDown2);
    setMobileDropDown1(false);
  };

  return (
    <div
      className={`${
        isFixed
          ? "fixed top-0 left-0 w-full shadow-xl animate__animated animate__fadeInDown "
          : ""
      }    z-20 `}
    >
      <header className=" absolute top-0 left-0 w-full z-50">
        <div className={`${isFixed ? "bg-[#000212]" : "bg-transparent"}`}>
          <div class="px-4 pt-3 pb-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between font-newfont">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center"
              >
                <img
                  src="\mainlogo.png"
                  className="md:w-[180px] w-[150px]"
                  alt="logo"
                />
              </a>
              {/* <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  class=" tracking-wide text-center text-white text-lg font-normal transition-colors duration-200 "
                >
                  Product
                </a>
              </li>
            </ul> */}
              <div className=" flex gap-8">
                <ul className="flex items-center hidden space-x-12 lg:flex SMN_effect-1">
                  {menuData.map((menuItem, index) => (
                    <div className="  ">
                      <li
                        key={index}
                        className="relative group"
                        onMouseEnter={() =>
                          setDropdownVisibility({
                            ...dropdownVisibility,
                            [index]: true,
                          })
                        }
                        onMouseLeave={() =>
                          setDropdownVisibility({
                            ...dropdownVisibility,
                            [index]: false,
                          })
                        }
                      >
                        <div className="  pb-2">
                          <a
                            href={menuItem.link}
                            aria-label={menuItem.label}
                            title={menuItem.label}
                            className="  tracking-wide text-center text-white text-lg font-normal transition-colors hover:font-semibold duration-200 "
                          >
                            {menuItem.label}
                          </a>
                        </div>
                        {menuItem.submenu &&
                          dropdownVisibility[index] &&
                          menuItem.number < 7 && (
                            <ul
                              onMouseLeave={() =>
                                setDropdownVisibility({
                                  ...dropdownVisibility,
                                  [index]: false,
                                })
                              }
                              className="absolute pt-4  w-[180px] rounded-lg shadow-md   bg-white text-black p-2 space-y-2 SMN_effect-2"
                            >
                              {menuItem.submenu.map((subItem, subIndex) => (
                                <li className=" pl-2" key={subIndex}>
                                  <a href={subItem.link}>{subItem.label}</a>
                                </li>
                              ))}
                            </ul>
                          )}

                        {menuItem.submenu &&
                          dropdownVisibility[index] &&
                          menuItem.number > 7 && (
                            <ul
                              onMouseLeave={() =>
                                setDropdownVisibility({
                                  ...dropdownVisibility,
                                  [index]: false,
                                })
                              }
                              className="absolute pt-4 grid grid-cols-3 gap-4  w-[530px] rounded-lg shadow-md   bg-white text-black p-2  SMN_effect-2"
                            >
                              {menuItem.submenu.map((subItem, subIndex) => (
                                <li className=" pl-2" key={subIndex}>
                                  <a href={subItem.link}>{subItem.label}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    </div>
                  ))}
                </ul>

                <ul class="flex items-center hidden space-x-8 lg:flex">
                  <li>
                    <WhiteButton
                      text={"Contact us"}
                      link="/contact-us"
                    ></WhiteButton>
                  </li>
                </ul>
              </div>
              <div class="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg class="w-5 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div class="absolute top-0 left-0 w-full">
                    <div class="p-5 bg-white border rounded shadow-sm">
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul class="space-y-4">
                          <li className="border-b pb-2">
                            <a
                              href="/about-us"
                              aria-label="Our product"
                              title="Our product"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 "
                            >
                              About
                            </a>
                          </li>
                          <li className=" font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b pb-2">
                            <ul className="flex justify-between">
                              <li className="">
                                {" "}
                                <a href="/services">Services</a>
                              </li>
                              <li className="" onClick={handleService}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </li>
                            </ul>

                            <ul
                              className={` ${
                                mobileDropDown1 ? " block" : "hidden"
                              } ml-2 space-y-2 border-l pl-4`}
                            >
                              <li className="border-b pb-2">
                                <a
                                  href="/services/android-app"
                                  aria-label="Android App"
                                  title="Android App"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Android App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/services/ios-app"
                                  aria-label="iOS App"
                                  title="iOS App"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  iOS App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/services/hybrid-app"
                                  aria-label="Hybrid App"
                                  title="Hybrid App"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Hybrid App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/services/flutter-app"
                                  aria-label="Flutter App"
                                  title="Flutter App"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Flutter App
                                </a>
                              </li>
                              <li className="">
                                <a
                                  href="/services/react-native-app"
                                  aria-label="React Native App"
                                  title="React Native App"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  React Native App
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b pb-2">
                            <ul className="flex justify-between">
                              <li>
                                {" "}
                                <a href="/solutions">Solutions</a>
                              </li>
                              <li onClick={handleSolution}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <ul
                              className={` ${
                                mobileDropDown2 ? " block" : "hidden"
                              } ml-2 space-y-2 border-l pl-4`}
                            >
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/food-app"
                                  aria-label="Food"
                                  title="Foods"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Food App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/tourism-app"
                                  aria-label="Tourism"
                                  title="Tourism"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Tourism App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/ecommerce-app"
                                  aria-label="Ecommerce"
                                  title="Ecommerce"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Ecommerce App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/logistics-app"
                                  aria-label="Logistic"
                                  title="Logistic"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Logistic App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/sports-app"
                                  aria-label="Sports"
                                  title="Sports"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Sports App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/health-care-app"
                                  aria-label="Health Care"
                                  title="Health Care"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Health Care App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/fitness-app"
                                  aria-label="Fitness"
                                  title="Fitness"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Fitness App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/dating-app"
                                  aria-label="Dating"
                                  title="Dating"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Dating App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/marketplace-app"
                                  aria-label="Marketplace"
                                  title="Marketplace"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Marketplace App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/education-app"
                                  aria-label="Education"
                                  title="Education"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Education App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/real-estate-app"
                                  aria-label="Real Estate"
                                  title="Real Estate"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Real Estate App
                                </a>
                              </li>
                              <li className="border-b pb-2">
                                <a
                                  href="/solutions/entertainment-app"
                                  aria-label="Entertainment"
                                  title="Entertainment"
                                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Entertainment App
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="border-b pb-2">
                            <a
                              href="/case-studies"
                              aria-label="About us"
                              title="About us"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Case Studies
                            </a>
                          </li>

                          <li className="border-b pb-2">
                            <a
                              href="/blogs"
                              aria-label="About us"
                              title="About us"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Blogs
                            </a>
                          </li>

                          <li className="border-b pb-2">
                            <a
                              href="/contact-us"
                              aria-label="About us"
                              title="About us"
                              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
