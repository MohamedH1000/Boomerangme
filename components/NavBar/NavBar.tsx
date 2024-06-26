import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const myuser = { id: 1, username: "mohamed" };
  const currentLanguage = { lang: "en" };
  return (
    <nav
      className="bg-[#1F1E1F] w-[100%] fixed top-0 h-[64px] 
    flex justify-between"
    >
      <div className="flex justify-center gap-10">
        <Link href={"/"}>
          <Image
            src={"/assets/logotype-light.svg"}
            alt="Boomerang"
            width={150}
            height={50}
            className="ml-4 mt-5"
          />
        </Link>
        <div className="flex justify-center max-md:hidden">
          <div
            className="p-2 flex justify-between text-white
          hover:bg-[#2E2E2E] duration-500
          cursor-pointer w-[180px] text-[14px] items-center"
          >
            <p>
              Hi, <br /> <span className="font-bold">{myuser?.username}</span>
            </p>
            <div className="flex justify-center items-center h-[20px] w-[20px] bg-[#2E2E2E] rounded-full pl-[5px]">
              <svg viewBox="0 0 8 4" className="fill-white h-[5px] mr-[5px] ">
                <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
              </svg>
            </div>
          </div>
          <div
            className="p-2 flex justify-between text-white
          hover:bg-[#2E2E2E] duration-500 cursor-pointer
          w-[180px] text-[14px] items-center"
          >
            <div>implementation</div>
            <div className="flex justify-center items-center h-[20px] w-[20px] bg-[#2E2E2E] rounded-full pl-[5px]">
              <svg viewBox="0 0 8 4" className="fill-white h-[5px] mr-[5px] ">
                <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mr-5 flex justify-center 
      w-[250px] items-center h-[100%] max-md:hidden"
      >
        <div
          className="hover:bg-[#2E2E2E] duration-300 
        w-full h-[100%] flex justify-center items-center cursor-pointer"
        >
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#FFFFFF]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.9995 24C11.715 24 13.215 22.9109 13.7718 21.3333H15.8961C16.3625 21.3333 16.8237 21.2355 17.2499 21.046C18.9322 20.2984 19.6899 18.3285 18.9422 16.6462L17.9995 14.5252V10.6667C17.9995 7.18342 15.7733 4.22011 12.6662 3.12188V2.66667C12.6662 1.19391 11.4723 0 9.9995 0C8.52674 0 7.33283 1.19391 7.33283 2.66667V3.12188C4.22565 4.22011 1.9995 7.18342 1.9995 10.6667V14.5252L1.05683 16.6462C0.867405 17.0724 0.769531 17.5336 0.769531 18C0.769531 19.841 2.26192 21.3333 4.10286 21.3333H6.22714C6.78232 22.9069 8.28029 24 9.9995 24ZM7.69141 21.3333H12.3125C11.8467 22.1394 10.9763 22.6667 10.002 22.6667C9.02584 22.6667 8.15635 22.1378 7.69141 21.3333ZM11.332 2.77728V2.66667C11.332 1.93029 10.7351 1.33333 9.9987 1.33333C9.26232 1.33333 8.66536 1.93029 8.66536 2.66667V2.77728C9.09898 2.70453 9.54442 2.66667 9.9987 2.66667C10.453 2.66667 10.8984 2.70453 11.332 2.77728ZM3.33283 10.6667C3.33283 6.98477 6.3176 4 9.9995 4C13.6814 4 16.6662 6.98477 16.6662 10.6667V14.6667L16.7236 14.9374L17.7238 17.1877C18.1724 18.1971 17.7178 19.379 16.7084 19.8276C16.4527 19.9413 16.176 20 15.8961 20H4.10286C2.9983 20 2.10286 19.1046 2.10286 18C2.10286 17.7202 2.16159 17.4434 2.27524 17.1877L3.27537 14.9374L3.33283 14.6667V10.6667Z"
            ></path>
          </svg>
        </div>
        <div
          className="hover:bg-[#2E2E2E] duration-300 
        w-full h-[100%] flex 
        justify-center items-center cursor-pointer"
        >
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#FFFFFF]"
          >
            <path d="m13.2 16.8h1.8c.3314 0 .6.2686.6.6s-.2686.6-.6.6h-4.8c-.33137 0-.6-.2686-.6-.6s.26863-.6.6-.6h1.8v-6h-1.8c-.33137 0-.6-.2686-.6-.6 0-.33137.26863-.6.6-.6h2.4c.3314 0 .6.26863.6.6zm-1.2 7.2c-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12zm0-1.2c5.9647 0 10.8-4.8353 10.8-10.8 0-5.96468-4.8353-10.8-10.8-10.8-5.96468 0-10.8 4.83532-10.8 10.8 0 5.9647 4.83532 10.8 10.8 10.8zm-.6-16.8h1.2c.3314 0 .6.26863.6.6v1.2c0 .33137-.2686.6-.6.6h-1.2c-.3314 0-.6-.26863-.6-.6v-1.2c0-.33137.2686-.6.6-.6z"></path>
          </svg>
        </div>
        <div
          className="hover:bg-[#2E2E2E] duration-300 w-full 
        h-[100%] flex justify-center items-center"
        >
          <div
            className="border rounded-full border-color-[white] 
          h-[30px] w-[30px] flex justify-center 
          items-center text-white cursor-pointer"
          >
            {currentLanguage.lang}
          </div>
        </div>
        <div
          className="hover:bg-[#2E2E2E] duration-300 
        w-full h-[100%] flex justify-center 
        items-center cursor-pointer"
        >
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#FFFFFF]"
          >
            <path d="m19.842 17.4144-4.1484-1.8852c1.404-1.098 2.3064-2.808 2.3064-4.7292 0-3.3132-2.6856-6-6-6-3.3132 0-6 2.6868-6 6 0 1.9212.9024 3.6312 2.3076 4.7292l-4.1484 1.8852c-.3948.18-.7416.4404-1.02.7608-1.2228-1.7508-1.9392-3.8796-1.9392-6.1752 0-5.964 4.836-10.8 10.8-10.8 5.9652 0 10.8 4.836 10.8 10.8 0 2.2956-.7164 4.4244-1.938 6.1752-.2784-.3204-.6252-.5808-1.02-.7608zm-12.642-6.6144c0-2.6508 2.1492-4.8 4.8-4.8s4.8 2.1492 4.8 4.8-2.1492 4.8-4.8 4.8-4.8-2.1492-4.8-4.8zm4.8 12c-3.2244 0-6.1176-1.4124-8.0976-3.6528.1848-.2772.444-.5004.7536-.6396l4.8984-2.2272c.7464.3336 1.5744.5196 2.4456.5196s1.6992-.186 2.4468-.5196l4.8984 2.2272c.3084.1392.5676.3624.7524.6396-1.9788 2.2404-4.8732 3.6528-8.0976 3.6528zm0-22.8c-6.6276 0-12 5.3724-12 12s5.3724 12 12 12 12-5.3724 12-12-5.3724-12-12-12z"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden max-md:static mr-4">
        <Image
          src={"/icons/hamburger.svg"}
          alt="hamburger"
          height={36}
          width={36}
          className="invert-0"
        />
      </div>
    </nav>
  );
};

export default NavBar;
