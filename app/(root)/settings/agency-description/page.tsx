import React from "react";

const page = () => {
  return (
    <div className="pl-20 py-10 max-md:pl-5 max-md:py-5 pr-5">
      <h1 className="text-[26px]">About the agency</h1>
      <div
        className="border-[#D5D5DD] border-[1px] bg-[#FFFFFF] w-full
      flex max-sm:flex-col max-sm:items-start max-sm:justify-center 
      gap-5 px-5 py-5 justify-start items-start mt-5"
      >
        <div className="flex-col w-[48%]">
          <div>
            <p className="font-semibold">Company name</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Facebook</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Instagram</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Twitter</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Telegram</p>
            <p>-</p>
          </div>
        </div>
        <div className="flex-col w-[48%]">
          <div>
            <p className="font-semibold">Address</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Postal code</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">City</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">Country</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold">State</p>
            <p>-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
