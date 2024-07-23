"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { editUser } from "@/lib/action/user.action";
import { usePathname } from "next/navigation";
import { useToast } from "../ui/use-toast";

const PersonalSettings = ({ currentUser }: any) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [personalData, setPersonalData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    company: currentUser?.company || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    image: "",
    language: "",
    dateFormat: "",
    password: "",
    repeatPassword: "",
    country: "",
    timeZone: "",
    currency: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await editUser(personalData);
      toast({
        title: "User Edited Successfully",
        className: "bg-white",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error occur during the edit of user",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className="  h-auto
items-center justify-center gap-5 bg-[#FFFFFF] rounded-md
border-[#D5D5DD] border-[1px]"
    >
      <form action="" className="p-4 w-full " onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 items-start max-md:flex-col">
          <div
            className="flex flex-col w-[49%] items-start
          justify-center gap-3 max-md:w-[100%]"
          >
            <label htmlFor="firstname" className="font-semibold">
              First name
            </label>
            <Input
              type="name"
              name="firstname"
              required
              onChange={(e) =>
                setPersonalData({ ...personalData, firstName: e.target.value })
              }
              value={personalData.firstName}
            />
            <label htmlFor="lastname" className="font-semibold">
              Last name
            </label>
            <Input
              type="name"
              name="lastname"
              required
              value={personalData.lastName}
              onChange={(e) =>
                setPersonalData({ ...personalData, lastName: e.target.value })
              }
            />
            <label htmlFor="dateformat" className="font-semibold">
              Date format
            </label>
            <Select
              name="dateformat"
              value={personalData.dateFormat}
              onValueChange={(value) =>
                setPersonalData((prev) => ({
                  ...prev,
                  dateFormat: value,
                }))
              }
            >
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
            <Select
              name="country"
              value={personalData.country}
              onValueChange={(value) =>
                setPersonalData((prev) => ({
                  ...prev,
                  country: value,
                }))
              }
            >
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
            <Select
              name="language"
              value={personalData.language}
              onValueChange={(value) =>
                setPersonalData((prev) => ({
                  ...prev,
                  language: value,
                }))
              }
            >
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
            <Select
              name="timezone"
              value={personalData.timeZone}
              onValueChange={(value) =>
                setPersonalData((prev) => ({
                  ...prev,
                  timeZone: value,
                }))
              }
            >
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
            <Select
              name="currency"
              value={personalData.currency}
              onValueChange={(value) =>
                setPersonalData((prev) => ({
                  ...prev,
                  currency: value,
                }))
              }
            >
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
            <Input
              type="name"
              name="companyname"
              value={personalData.company}
              onChange={(e) =>
                setPersonalData({ ...personalData, company: e.target.value })
              }
            />
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <Input
              type="email"
              name="email"
              required
              value={personalData.email}
              onChange={(e) =>
                setPersonalData({ ...personalData, email: e.target.value })
              }
            />
            <label htmlFor="phone" className="font-semibold">
              Phone
            </label>
            <Input
              type="string"
              name="phone"
              value={personalData.phone}
              onChange={(e) =>
                setPersonalData({ ...personalData, phone: e.target.value })
              }
            />
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <Input
              type="password"
              name="password"
              onChange={(e) =>
                setPersonalData({ ...personalData, password: e.target.value })
              }
            />
            <label htmlFor="repeatpassword" className="font-semibold">
              Repeat Password
            </label>
            <Input
              type="password"
              name="repeatpassword"
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  repeatPassword: e.target.value,
                })
              }
            />
          </div>
        </div>
        <Button
          className="bg-[#2e2e2e] text-white rounded-md 
        hover:opacity-85 duration-300 mt-5 w-[49%] ml-1 max-md:w-full max-md:ml-0"
          type="submit"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Loading" : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default PersonalSettings;
