import React from "react";
import CreateCardNav from "./CreateCardNav";

const page = () => {
  return (
    <>
      <CreateCardNav />
      <div className="pl-[100px] mt-10 w-full flex justify-between items-start pt-[100px]">
        <div className="w-[65%]">
          <h1 className="text-[30px] max-md:text-[25px]">Card type</h1>
          <hr className="border-[1px] border-gray mt-5" />
          <div className="grid grid-cols-3"></div>
        </div>
      </div>
    </>
  );
};

export default page;
