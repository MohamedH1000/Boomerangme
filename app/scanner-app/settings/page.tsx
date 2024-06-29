import ScannerNav from "@/components/Scanner/ScannerNav";
import React from "react";
import Switch from "@mui/material/Switch";

const page = () => {
  return (
    <>
      <ScannerNav />
      <div className="mt-[30px] flex flex-col justify-center items-center">
        <h1 className="mb-8">Settings</h1>
        <div className="flex flex-col justify-center items-center w-[600px] max-sm:w-[300px]">
          <div className="flex justify-start w-full  border-b-[1px] border-[gray]">
            <p
              className="uppercase opacity-60
                 pl-5 "
            >
              When scanning a qr code
            </p>
          </div>
          <div
            className="flex justify-between items-center w-full  
          border-b-[1px] border-[gray] py-3"
          >
            <p
              className=" 
                pl-5 "
            >
              Vibration
            </p>
            <Switch />
          </div>
          <div
            className="flex justify-between items-center w-full  
          border-b-[1px] border-[gray] py-3"
          >
            <p
              className=" 
                pl-5 "
            >
              Beep
            </p>
            <Switch />
          </div>
          <div
            className="flex justify-between items-center w-full  
          border-b-[1px] border-[gray] py-3"
          >
            <p
              className=" 
                pl-5 "
            >
              Show result
            </p>
            <Switch />
          </div>
          <div
            className="flex justify-between items-center w-full  
          border-b-[1px] border-[gray] py-3"
          >
            <p
              className=" 
                pl-5 "
            >
              Copy to clipboard
            </p>
            <Switch />
          </div>
          <div
            className="flex justify-between items-center w-full  
          border-b-[1px] border-[gray] py-3"
          >
            <p
              className=" 
                pl-5 "
            >
              Debug Mode
            </p>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
