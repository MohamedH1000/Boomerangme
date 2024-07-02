import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DeleteUser = () => {
  return (
    <div
      className=" bg-[#FFFFFF] rounded-md
border-[#D5D5DD] border-[1px] w-full"
    >
      <div className="p-4">
        <h1 className="font-semibold text-[20px]">Delete User</h1>
        <p className="w-[49%] max-md:w-[100%]">
          We’re sorry to see you leave.
          <br />
          Before you delete your account, it would be much appreciated if you
          could provide us <br />
          with any feedback and/or explain why this service hasn’t helped to
          increase customer loyalty for your business.
        </p>
        <div className="w-[49%] max-sm:w-[100%] flex items-center gap-3 mt-3">
          <Checkbox
            className={`border-[1px] border-[#D5D5DD] 
          bg-[#ebebeb] w-[24px] h-[24px]`}
          />
          <p className="text-[18px] font-medium">
            Struggling to use the service
          </p>
        </div>
        <div className="w-[49%] max-sm:w-[100%] flex items-center gap-3 mt-3">
          <Checkbox className="border-[1px] border-[#D5D5DD] bg-[#ebebeb] w-[24px] h-[24px]" />
          <p className="text-[18px] font-medium">
            Customers dont't need digital cards
          </p>
        </div>
        <div className="w-[49%] max-sm:w-[100%] flex items-center gap-3 mt-3">
          <Checkbox className="border-[1px] border-[#D5D5DD] bg-[#ebebeb] w-[24px] h-[24px]" />
          <p className="text-[18px] font-medium">
            Service does not provide the features I need
          </p>
        </div>
        <textarea
          name="other"
          id=""
          placeholder="Other"
          className="mt-5 border-[1px] border-[#D5D5DD] w-full p-4
          rounded-md"
        ></textarea>
        <div className="mt-10">
          <h1 className="font-medium text-[18px]">Confirmation</h1>
          <p className="opacity-60">
            Please fill your password to delete your account and data
          </p>
          <Input
            className="w-full mt-3 mb-3 border-[1px] border-[#D5D5DD]"
            type="password"
            placeholder="Password"
          />
          <p className="opacity-60">
            If you delete your account all of personal information and customers
            data will be lost
          </p>
          <Button
            className="bg-[#2e2e2e] text-white rounded-md 
        hover:opacity-85 duration-300 mt-5 w-[20%] max-sm:w-full"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
