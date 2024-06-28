import React from "react";

const LanguageDropdown = () => {
  const currentLanguage = { lang: "en" };
  return (
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
  );
};

export default LanguageDropdown;
