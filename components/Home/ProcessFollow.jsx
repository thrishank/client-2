import Image from "next/image";
import React from "react";

function ProcessFollow() {
  return (
    <>
      {/* <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 relative">
        <div className=" absolute top-0"> </div>
        <div className=" w-fit pr-5 relative">
          <div className="">
            <h2 className="  text-3xl md:text-5xl font-semibold leading-none tracking-tight text-white md:mx-auto font-newfont">
              Process we <span className="text-[#0085F2]">Follow</span>
            </h2>
            <Image
              src={"/element1.png"}
              alt="top notch developers"
              width={195}
              height={74}
              className=" absolute -z-10 -top-2  -right-5 w-[141px]  md:w-[195px] md:h-[74px]"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  ">
          <div className="flex flex-col  gap-5">
            <p className="text-white text-lg md:text-xl font-normal leading-9 mt-4 mb-6 md:w-3/4 font-newfont">
              Our team of top-notch developers make sure to follow a process
              that guarantee success of your mobile app development project.{" "}
            </p>
            <div className="flex gap-4 ">
              <div className="w-[60px] h-[60px] bg-[#E5F2FD] rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="35"
                  viewBox="0 0 30 35"
                  fill="none"
                  aria-label="Requirement Analysis"
                >
                  <path
                    d="M18.603 0H7.15498C5.25737 0 3.43747 0.753827 2.09565 2.09565C0.753827 3.43747 0 5.25737 0 7.15498V27.1889C0 28.1285 0.185069 29.059 0.544641 29.927C0.904212 30.7951 1.43124 31.5839 2.09565 32.2483C3.43747 33.5901 5.25737 34.3439 7.15498 34.3439H10.2746C9.98843 33.5544 9.9436 32.6977 10.1458 31.8826L11.4766 26.5021C11.6623 25.7431 12.0534 25.05 12.6071 24.4987L20.6922 16.3992C21.3576 15.7348 22.1476 15.2083 23.0169 14.8498C23.8862 14.4913 24.8176 14.3078 25.7579 14.31V7.15498C25.7579 5.25737 25.0041 3.43747 23.6623 2.09565C22.3205 0.753827 20.5006 0 18.603 0ZM12.879 18.603H7.15498C6.77546 18.603 6.41148 18.4522 6.14312 18.1838C5.87475 17.9155 5.72399 17.5515 5.72399 17.172C5.72399 16.7924 5.87475 16.4285 6.14312 16.1601C6.41148 15.8917 6.77546 15.741 7.15498 15.741H12.879C13.2585 15.741 13.6225 15.8917 13.8908 16.1601C14.1592 16.4285 14.31 16.7924 14.31 17.172C14.31 17.5515 14.1592 17.9155 13.8908 18.1838C13.6225 18.4522 13.2585 18.603 12.879 18.603ZM18.603 12.879H7.15498C6.77546 12.879 6.41148 12.7282 6.14312 12.4598C5.87475 12.1915 5.72399 11.8275 5.72399 11.448C5.72399 11.0685 5.87475 10.7045 6.14312 10.4361C6.41148 10.1677 6.77546 10.017 7.15498 10.017H18.603C18.9825 10.017 19.3465 10.1677 19.6148 10.4361C19.8832 10.7045 20.034 11.0685 20.034 11.448C20.034 11.8275 19.8832 12.1915 19.6148 12.4598C19.3465 12.7282 18.9825 12.879 18.603 12.879ZM18.603 7.15498H7.15498C6.77546 7.15498 6.41148 7.00422 6.14312 6.73586C5.87475 6.46749 5.72399 6.10351 5.72399 5.72399C5.72399 5.34446 5.87475 4.98048 6.14312 4.71212C6.41148 4.44376 6.77546 4.29299 7.15498 4.29299H18.603C18.9825 4.29299 19.3465 4.44376 19.6148 4.71212C19.8832 4.98048 20.034 5.34446 20.034 5.72399C20.034 6.10351 19.8832 6.46749 19.6148 6.73586C19.3465 7.00422 18.9825 7.15498 18.603 7.15498Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M29.9997 21.465C30.014 22.5961 29.5797 23.6869 28.7919 24.4987L27.7902 25.5147C27.7902 25.5147 21.7085 19.4473 21.7228 19.4473L22.7245 18.4313C23.3178 17.8238 24.0798 17.4084 24.9118 17.2389C25.7438 17.0693 26.6075 17.1534 27.3912 17.4802C28.1749 17.807 28.8425 18.3615 29.3076 19.0719C29.7726 19.7823 30.0137 20.616 29.9997 21.465Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M25.7576 27.5467L20.6919 32.5981C20.5134 32.7836 20.2846 32.9129 20.0337 32.9702L14.6531 34.301C14.4137 34.3625 14.1624 34.3605 13.924 34.2953C13.6856 34.2301 13.4683 34.1038 13.2935 33.9291C13.1187 33.7543 12.9925 33.537 12.9273 33.2986C12.8621 33.0602 12.8601 32.8089 12.9216 32.5695L14.2524 27.1889C14.3096 26.9379 14.439 26.7091 14.6245 26.5307L19.6902 21.4792C19.6902 21.4792 25.7576 27.5324 25.7576 27.5467Z"
                    fill="#0082EF"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className=" text-white text-2xl font-medium font-newfont ">
                  Requirement Analysis
                </div>
                <div className="w-full md:w-[350px]  text-white text-base font-normal mt-4 font-newfont">
                  Our top-notch team have transparent approach for requirement
                  analysis.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] bg-[#E5F2FD] rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  aria-label="Design & Development"
                >
                  <path
                    d="M31 3.96512V5.76744H0V3.96512C0 1.77349 1.77349 0 3.96512 0H27.0349C29.2265 0 31 1.77349 31 3.96512ZM31 7.93023V27.0349C31 29.2265 29.2265 31 27.0349 31H3.96512C1.77349 31 0 29.2265 0 27.0349V7.93023H31ZM8.13209 18.3837L10.9726 15.5433C11.4051 15.1251 11.4051 14.433 10.9726 14.0149C10.5544 13.5967 9.87674 13.5967 9.44419 14.0149L5.83954 17.6195C5.4214 18.0377 5.4214 18.7298 5.83954 19.1479L9.44419 22.7526C9.66047 22.9688 9.93442 23.0698 10.2084 23.0698C10.4823 23.0698 10.7707 22.9688 10.9726 22.7526C11.4051 22.3344 11.4051 21.6423 10.9726 21.2242L8.13209 18.3837ZM17.5763 11.5781C16.9995 11.4051 16.4084 11.7367 16.2353 12.2991L12.7028 23.834C12.5298 24.4107 12.847 25.0163 13.4237 25.1893C13.5247 25.2181 13.6256 25.2326 13.7409 25.2326C14.2023 25.2326 14.6349 24.9298 14.7647 24.4684L18.2972 12.9335C18.4702 12.3567 18.153 11.7512 17.5763 11.5781ZM25.1605 17.6195L21.5558 14.0149C21.1233 13.5967 20.4456 13.5967 20.0274 14.0149C19.5949 14.433 19.5949 15.1251 20.0274 15.5433L22.8679 18.3837L20.0274 21.2242C19.5949 21.6423 19.5949 22.3344 20.0274 22.7526C20.2293 22.9688 20.5033 23.0698 20.7916 23.0698C21.08 23.0698 21.3395 22.9688 21.5558 22.7526L25.1605 19.1479C25.5786 18.7298 25.5786 18.0377 25.1605 17.6195Z"
                    fill="#0082EF"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-start items-start font-newfont">
                <div className=" text-white text-2xl font-medium  ">
                  Design & development
                </div>
                <div className="w-full md:w-[350px]  text-white text-base font-normal mt-4">
                  Our team of UI/UX designer and developers can create miracle
                  for your app.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] bg-[#E5F2FD] rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  aria-label="Deploy and maintaince"
                >
                  <path
                    d="M20.5126 7.84687C20.158 7.63778 19.758 7.52869 19.358 7.52869C19.1671 7.52869 18.9807 7.55141 18.7898 7.60141C17.5762 7.9105 16.8398 9.15141 17.1489 10.365C17.458 11.5787 18.6944 12.3151 19.9126 12.006C20.4989 11.856 20.9944 11.4832 21.3035 10.965C21.6126 10.4423 21.6989 9.83323 21.5489 9.24232C21.3989 8.65141 21.0353 8.15596 20.5126 7.84687Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M26.0671 0.0195982C24.5125 0.210507 22.9898 0.569598 21.5216 1.07869C23.7489 3.05142 25.8443 5.18323 27.7671 7.43778C28.308 5.97414 28.6943 4.42869 28.8989 2.80142C29.0989 1.17869 27.6898 -0.180402 26.0671 0.0195982Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M20.558 1.44238C16.4989 3.06966 12.9671 5.89693 10.6989 9.74238C9.81254 11.2424 8.808 13.0651 8.858 14.8515C8.88527 15.7878 9.87163 16.6287 10.458 17.2924C11.1898 18.1197 11.9944 18.8742 12.8807 19.5333C13.4944 19.9878 14.2807 20.1697 15.0171 19.9742C17.0307 19.4378 19.1989 18.4378 20.7035 17.1833C23.6307 14.7378 25.9444 11.8015 27.3898 8.40147C25.3035 5.91511 23.0125 3.58329 20.558 1.44238ZM22.0898 11.4242C21.658 12.156 20.9625 12.6742 20.1398 12.8833C19.8762 12.9515 19.6125 12.9833 19.3534 12.9833C17.9353 12.9833 16.6398 12.0242 16.2716 10.5878C15.8398 8.88784 16.8671 7.15147 18.5671 6.71965C19.3898 6.51056 20.2444 6.63329 20.9762 7.06511C21.708 7.49693 22.2262 8.19238 22.4353 9.01511C22.6489 9.83784 22.5262 10.6924 22.0898 11.4242Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M7.97164 14.2423C8.11255 12.465 9.03527 10.7605 9.91255 9.27412C10.2807 8.65139 10.6807 8.05139 11.1216 7.47412C6.36709 8.08321 3.38982 9.97867 0.776184 12.6741C3.16709 12.6014 5.97164 12.8968 7.97164 14.2423Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M15.2489 20.8469C15.2171 20.856 15.1853 20.8651 15.1489 20.8696C15.9171 23.0605 15.8444 24.856 16.0217 26.9923C19.3717 23.8332 21.4898 21.2832 21.9307 17.3151C21.7171 17.5014 21.5035 17.6878 21.2807 17.8742C19.7853 19.1242 17.5307 20.2332 15.2489 20.8469Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M6.79891 18.8924C6.74436 18.8196 6.658 18.7651 6.56709 18.7515C6.43527 18.7287 6.21254 18.6969 3.13073 21.0015C0.0489068 23.3105 0.0216342 23.5333 0.00345239 23.6651C-0.010184 23.756 0.0170887 23.856 0.0761797 23.9287C0.139816 24.006 0.189816 24.0742 0.298907 24.0742C0.594361 24.0742 1.308 23.6287 3.73527 21.8105C7.08982 19.2969 7.01254 19.1878 6.79891 18.8924Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M7.2671 22.056C7.98073 21.1878 7.95801 20.9333 7.94892 20.8515C7.93982 20.7606 7.88528 20.656 7.8171 20.5969C7.53528 20.3651 7.22164 20.656 7.07164 20.7924C6.89892 20.9469 6.69437 21.1696 6.48982 21.4151C5.62619 22.4651 5.74437 22.7106 5.93982 22.8742C6.00346 22.9242 6.07164 22.9651 6.16255 22.9651C6.36255 22.9696 6.67619 22.7742 7.2671 22.056Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M9.658 21.4332C9.28982 21.2468 9.28981 21.2514 7.78072 23.8741L7.53072 24.3059C5.99436 26.9787 5.99436 26.9787 6.33982 27.2014C6.39436 27.2377 6.46709 27.2559 6.53527 27.2559C6.56254 27.2559 6.58982 27.2514 6.61254 27.2468C7.04891 27.1423 8.36709 24.8696 8.51254 24.615C8.57163 24.5105 9.96709 22.0832 9.83527 21.6468C9.808 21.5559 9.73982 21.4741 9.658 21.4332Z"
                    fill="#0082EF"
                  />
                  <path
                    d="M9.77615 17.8923C9.67615 17.7832 9.56706 17.665 9.45343 17.5423C9.08979 17.1605 8.68525 16.7241 8.3807 16.2241C8.12615 17.3741 8.16706 18.6059 8.94434 19.5423C9.68979 20.4423 11.0943 20.4468 12.308 20.2423C11.4216 19.5741 10.5671 18.7832 9.77615 17.8923Z"
                    fill="#0082EF"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-start items-start font-newfont">
                <div className=" text-white text-2xl font-medium  ">
                  Deployment & Maintenance
                </div>
                <div className="w-full md:w-[350px]  text-white  text-base font-normal mt-4">
                  Our delivery manager makes sure your satisfaction comes first
                  at this stage.
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full md:block">
            <Image
              src={"/home1.png"}
              width={500}
              height={500}
              layout="responsive"
              quality={100}
              className="w-full"
              alt="A group of individuals engaged in computer work while one person holds a clipboard for documentation purposes."
            ></Image>
          </div>
        </div>
      </div> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-newfont">
        <h1 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-white md:mx-auto">
          Process we follow
        </h1>
        <p className="text-gray-200 text-center p-2 pb-14 text-base md:text-lg">
          Our team of top-notch developers make sure to follow a process that
          guarantee success of your mobile app development project.
        </p>
        <div className="border-[#00C2FF] text-gray-200 md:flex items-center justify-center border-[3px] mx-4 md:mx-8 px-4 py-2 rounded-2xl bg-[#001927] mb-8">
          <div className="">
            <h1 className="text-white text-xl font-bold py-4">
              Stunning visuals and user-friendly layouts
            </h1>
            <p className="leading-7 pb-9">
              Crafted with innovation in mind, Stratus boasts a sleek and
              futuristic design that captivates your visitors from the moment
              they land on your site. Impress with stunning visuals and
              user-friendly layouts that scream modernity and sophistication.
            </p>
          </div>
          <img
            src="processtestimage.png"
            width="539px"
            height="285.93"
            className=""
          ></img>
        </div>
        <div className="border-[#7DD666]  text-gray-200 flex flex-col-reverse md:flex-row items-center justify-center border-[3px] mx-4 md:mx-8 px-4 py-2 rounded-2xl bg-[#1C3223] my-8">
          <img src="processtestimage.png" width="539px" height="285.93"></img>
          <div className="">
            <h1 className="text-white text-xl font-bold py-4">
              Stunning visuals and user-friendly layouts
            </h1>
            <p className="leading-7 pb-9">
              Crafted with innovation in mind, Stratus boasts a sleek and
              futuristic design that captivates your visitors from the moment
              they land on your site. Impress with stunning visuals and
              user-friendly layouts that scream modernity and sophistication.
            </p>
          </div>
        </div>
        <div className="border-[#FFB489]  text-gray-200 md:flex items-center justify-center border-[3px] mx-4 md:mx-8 px-4 py-2 rounded-2xl bg-[#39292A] mt-8">
          <div className="">
            <h1 className="text-white text-xl font-bold py-4">
              Stunning visuals and user-friendly layouts
            </h1>
            <p className="leading-7 pb-9">
              Crafted with innovation in mind, Stratus boasts a sleek and
              futuristic design that captivates your visitors from the moment
              they land on your site. Impress with stunning visuals and
              user-friendly layouts that scream modernity and sophistication.
            </p>
          </div>
          <img src="processtestimage.png" width="539px" height="285.93"></img>
        </div>
      </div>
    </>
  );
}

export default ProcessFollow;
