"use client";
import React, { useEffect, useState } from "react";

function ContactForm() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  // const [ip, setIp] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch client's IP address using ipify API
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      const ip = data.ip;

      const formData = {
        name,
        email,
        company,
        phone,
        whatsapp,
        budget,
        message,
        ip,
      };

      await fetch(`${NEXT_PUBLIC_BACKEND_URL}/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // alert("Form submitted successfully");
      window.location.href = "/thank-you";
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className=" pb-10 md:pb-0 bg-white font-newfont">
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  relative md:-mb-10 ">
        <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
          <h2 className="max-w-lg text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-black md:mx-auto">
            Get in Touch
          </h2>

          {/* <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className=" flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                >
                  <g id="Mail">
                    <g id="Icon">
                      <g id="Group 13">
                        <path
                          id="Rectangle 74"
                          d="M0 9.5791L16.5789 15.9312L33.1579 9.5791V18.0002C33.1579 23.523 28.6807 28.0002 23.1579 28.0002H10C4.47715 28.0002 0 23.523 0 18.0002V9.5791Z"
                          fill="#242331"
                        />
                        <path
                          id="Rectangle 75"
                          d="M0 7.63636C0 3.41892 3.41892 0 7.63636 0H25.5215C29.739 0 33.1579 3.41892 33.1579 7.63636L16.5789 14L0 7.63636Z"
                          fill="#242331"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-zinc-800 text-xl font-normal leading-[33.30px]">
                sales@overninja.com
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M13.5034 0H13.4966C6.05306 0 0 6.05475 0 13.5C0 16.4531 0.95175 19.1903 2.57006 21.4127L0.887625 26.4279L6.07669 24.7691C8.21138 26.1833 10.7578 27 13.5034 27C20.9469 27 27 20.9436 27 13.5C27 6.05644 20.9469 0 13.5034 0ZM21.3587 19.0637C21.033 19.9834 19.7404 20.7461 18.7093 20.9689C18.0039 21.1191 17.0826 21.2389 13.9809 19.953C10.0136 18.3094 7.45875 14.2779 7.25962 14.0164C7.06894 13.7548 5.6565 11.8817 5.6565 9.94444C5.6565 8.00719 6.64031 7.06388 7.03688 6.65887C7.36256 6.32644 7.90088 6.17456 8.41725 6.17456C8.58431 6.17456 8.7345 6.183 8.8695 6.18975C9.26606 6.20662 9.46519 6.23025 9.72675 6.85631C10.0524 7.641 10.8456 9.57825 10.9401 9.77738C11.0363 9.9765 11.1324 10.2465 10.9974 10.5081C10.8709 10.7781 10.7595 10.8979 10.5604 11.1274C10.3612 11.3569 10.1722 11.5324 9.97312 11.7788C9.79087 11.9931 9.585 12.2226 9.8145 12.6191C10.044 13.0072 10.8371 14.3016 12.0049 15.3411C13.5118 16.6826 14.7336 17.1112 15.1706 17.2935C15.4963 17.4285 15.8844 17.3964 16.1224 17.1433C16.4244 16.8176 16.7974 16.2776 17.1771 15.7461C17.4471 15.3647 17.7879 15.3174 18.1457 15.4524C18.5102 15.579 20.439 16.5324 20.8356 16.7299C21.2321 16.929 21.4937 17.0235 21.5899 17.1906C21.6844 17.3576 21.6844 18.1423 21.3587 19.0637Z"
                    fill="#242331"
                  />
                </svg>
              </span>
              <span className="text-zinc-800 text-xl font-normal leading-[33.30px]">
                +91 9998847740
              </span>
            </div>
          </div> */}
        </div>
      </div>

      <div className=" ">
        <div className="">
          <div className="   py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  pb-6 ">
            <div className=" pb-10">
              {" "}
              <div className="px-5 md:px-44  ">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Name *"
                          type="text"
                          required
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Email *"
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="company">
                          Company Name
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Company name *"
                          type="text"
                          id="company"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Phone Number *"
                          type="tel"
                          id="phone"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="whatsapp">
                          WhatsApp Number
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="WhatsApp Number"
                          type="tel"
                          id="whatsapp"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="budget">
                          Budget
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Budget"
                          type="text"
                          id="budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>

                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Message"
                        rows="4"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <div className=" flex items-center justify-center py-10 mb-20">
                      <button
                        type="submit"
                        className="inline-block w-full rounded-full bg-[#242331] px-5 py-3 font-medium text-white sm:w-auto hover:bg-[#FF5948] hover:text-white transition-all duration-200 hover:scale-95 hover:font-normal"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
