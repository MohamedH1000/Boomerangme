"use client";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const PersonalSettings = () => {
  return (
    <div
      className="  h-auto
items-center justify-center gap-5 bg-[#FFFFFF] rounded-md
border-[#D5D5DD] border-[1px]"
    >
      <form action="" className="p-4 w-full ">
        <div className="flex justify-center gap-2 items-start max-md:flex-col">
          <div
            className="flex flex-col w-[49%] items-start
          justify-center gap-3 max-md:w-[100%]"
          >
            <label htmlFor="firstname" className="font-semibold">
              First name
            </label>
            <Input type="name" name="firstname" required />
            <label htmlFor="lastname" className="font-semibold">
              Last name
            </label>
            <Input type="name" name="lastname" required />
            <label htmlFor="dateformat" className="font-semibold">
              Date format
            </label>
            <Select name="dateformat">
              <SelectTrigger>
                <SelectValue placeholder="Date format" />
              </SelectTrigger>
              <SelectContent className="h-[200px] overflow-auto bg-white ">
                <SelectItem value="DD.MM.YYYY" className="cursor-pointer">
                  DD.MM.YYYY
                </SelectItem>
                <SelectItem value="DD/MM/YYYY" className="cursor-pointer">
                  DD/MM/YYYY
                </SelectItem>
                <SelectItem value="MM/DD/YYYY" className="cursor-pointer">
                  MM/DD/YYYY
                </SelectItem>
                <SelectItem value="YYYY.MM.DD" className="cursor-pointer">
                  YYYY.MM.DD
                </SelectItem>
                <SelectItem value="DD-MM-YYYY" className="cursor-pointer">
                  DD-MM-YYYY
                </SelectItem>
                <SelectItem value="YYYY-MM-DD" className="cursor-pointer">
                  YYYY-MM-DD
                </SelectItem>
              </SelectContent>
            </Select>
            <label htmlFor="country" className="font-semibold">
              Country
            </label>
            <Select name="country">
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent className=" overflow-auto bg-white cursor-pointer">
                <SelectItem value="Saudi Arabia" className="cursor-pointer">
                  Saudi Arabia
                </SelectItem>
              </SelectContent>
            </Select>
            <label htmlFor="language" className="font-semibold">
              Language
            </label>
            <Select name="language">
              <SelectTrigger>
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="overflow-auto bg-white cursor-pointer">
                <SelectItem value="english" className="cursor-pointer">
                  English (US)
                </SelectItem>
                <SelectItem value="arabic" className="cursor-pointer">
                  Arabic
                </SelectItem>
              </SelectContent>
            </Select>
            <label htmlFor="timezone" className="font-semibold">
              Timezone
            </label>
            <Select name="timezone">
              <SelectTrigger>
                <SelectValue placeholder="Timezone" />
              </SelectTrigger>
              <SelectContent className="overflow-auto bg-white cursor-pointer">
                <SelectItem value="english" className="cursor-pointer">
                  (UTC+02:00) Cairo
                </SelectItem>
              </SelectContent>
            </Select>
            <label htmlFor="currency" className="font-semibold">
              Currency
            </label>
            <Select name="currency">
              <SelectTrigger>
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent className="overflow-auto bg-white cursor-pointer">
                <SelectItem value="dollar" className="cursor-pointer">
                  USdollar (USD)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div
            className="flex flex-col w-[49%] items-start
          justify-center gap-3 max-md:w-[100%]"
          >
            <label htmlFor="companyname" className="font-semibold">
              Company name
            </label>
            <Input type="name" name="companyname" />
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <Input type="email" name="email" required />
            <label htmlFor="phone" className="font-semibold">
              Phone
            </label>
            <Input type="number" name="phone" />
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <Input type="password" name="password" />
            <label htmlFor="repeatpassword" className="font-semibold">
              Repeat Password
            </label>
            <Input type="password" name="repeatpassword" />
          </div>
        </div>
        <Button
          className="bg-[#2e2e2e] text-white rounded-md 
        hover:opacity-85 duration-300 mt-5 w-[49%] ml-1 max-md:w-full max-md:ml-0"
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default PersonalSettings;
