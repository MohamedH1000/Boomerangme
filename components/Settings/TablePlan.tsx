import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const TablePlan = () => {
  return (
    <div
      className="mt-10 flex flex-col 
    items-start w-full mb-10"
    >
      <h1 className="font-semibold text-[20px]">Compare Plans</h1>
      <Table className="mt-10 border-[1px] border-[#D5D5DD] mb-10 max-lg:hidden">
        <TableHeader className="bg-[#ffffff] ">
          <TableRow className="border-b-[1px] border-[#D5D5DD]">
            <TableHead
              className="w-[40%] text-[#656565] uppercase font-semibold
            border-r-[1px] border-[#D5D5DD]"
            >
              Features
            </TableHead>
            <TableHead
              className="w-[20%] text-[#656565] uppercase font-semibold
            border-r-[1px] border-[#D5D5DD] text-center"
            >
              Status
            </TableHead>
            <TableHead
              className="w-[20%] text-[#656565] uppercase font-semibold
            border-r-[1px] border-[#D5D5DD] text-center"
            >
              Method
            </TableHead>
            <TableHead
              className="w-[20%] text-[#656565] uppercase font-semibold
            border-r-[1px] border-[#D5D5DD] text-center"
            >
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[#F7F7F8]">
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Cost per month</p>
              <p className=" text-[14px]">for annual plan</p>
              <p className=" text-[14px]">/ for quarterly plan</p>
              <p className=" text-[14px]">/ for monthly plan</p>
            </TableCell>
            <TableCell className="text-center">
              <p className="font-bold text-[14px]">$9</p>
              <p className=" text-[14px]">/ $99</p>
              <p className=" text-[14px]">/ $139</p>
            </TableCell>
            <TableCell className="text-center">
              <p className="font-bold text-[14px]">$99</p>
              <p className=" text-[14px]">/ $149</p>
              <p className=" text-[14px]">/ $199</p>
            </TableCell>
            <TableCell className="text-center ">
              <p className="font-bold text-[14px]">$129</p>
              <p className=" text-[14px]">/ $199</p>
              <p className=" text-[14px]">/ $259</p>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Promotions available</p>
              <p className=" text-[14px]">
                You can use one of 8 card types for your promotions
              </p>
            </TableCell>
            <TableCell className="text-center">
              <p className=" text-[14px]">1</p>
            </TableCell>
            <TableCell className="text-center">
              <p className=" text-[14px]">3</p>
            </TableCell>
            <TableCell className="text-center ">
              <p className=" text-[14px]">10</p>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Stamp cards</p>
              <p className=" text-[14px]">
                Unlimited digital cards - save on issuing plastic cards
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Multipass cards</p>
              <p className=" text-[14px]">Unlimited multipass cards</p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Cashback cards</p>
              <p className=" text-[14px]">
                Unlimited cashback cards with custom saving tools.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Discount cards</p>
              <p className=" text-[14px]">
                Unlimited classical discount digital cards.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Gift card</p>
              <p className=" text-[14px]">
                Unlimited prepaid certificate digital cards.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Coupon cards</p>
              <p className=" text-[14px]">
                Unlimited coupon digital cards with a discount for the first
                visit.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Membership cards</p>
              <p className=" text-[14px]">
                Unlimited membership digital cards.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Reward cards</p>
              <p className=" text-[14px]">Unlimited reward digital cards.</p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Card templates</p>
              <p className=" text-[14px]">
                111 ready to use card templates for different types of business.
                Choose the right one or create your own card with an individual
                design in a few minutes.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Custom card design</p>
              <p className=" text-[14px]">
                Create your own card with a unique design in 5 minutes.
                Customize colors, logo, stamp images, as well as card
                description. Take full advantage of our custom card builder.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">CRM</p>
              <p className=" text-[14px]">
                Built-in CRM. The ability to segment your customers for targeted
                mailing and increase sales up to 220%.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Free PUSH</p>
              <p className=" text-[14px]">
                Complete replacement of SMS. Clients with cards can receive
                unlimited PUSH notifications free of charge. PUSH doesn’t remain
                in the history of the phone and doesn’t annoy the client. Save
                on SMS.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Geo PUSH</p>
              <p className=" text-[14px]">
                Send messages to your clients when they come within 100 meters
                (330 feet) of your point of sale. Are your customers nearby?
                Remind them about your promotions and invite them to your store.
              </p>
            </TableCell>
            <TableCell>
              <div className="text-center">
                <p>
                  1 <br />
                  geolocation
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-center">
                <p>
                  2 <br />
                  geolocation
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-center">
                <p>
                  3 <br />
                  geolocation
                </p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Autopush designer</p>
              <p className=" text-[14px]">
                Create your own automated push script. Create an unlimited
                number of automated messages for free.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">PWA Scanner App</p>
              <p className=" text-[14px]">
                Install the free scanner app to award points and awards to your
                customers without additional hardware.
              </p>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Referral program</p>
              <p className=" text-[14px]">
                Your customers can get points and rewards for inviting friends
                to your promotion. Grow your customer base without advertising
                costs.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Duplicate control</p>
              <p className=" text-[14px]">
                Your customers will not be able to issue themselves several
                loyalty cards for one promotion and get extra benefits. Your
                customer base contains only unique customer records.
              </p>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Analytics</p>
              <p className=" text-[14px]">
                Built-in statistics and analytics system — judge the
                effectiveness of your loyalty program online.
              </p>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Manager seats</p>
              <p className=" text-[14px]">
                If you have several points of sale and a number of salespeople
                or cashiers work in them, then this feature is for you. Separate
                accounting for each manager and point of sale. Reward the most
                effective managers within the company!
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <p className="text-[14px]">10 seats</p>
            </TableCell>
            <TableCell className="text-center ">
              <p className="text-[14px]">50 seats</p>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">API</p>
              <p className="text-[14px]">
                Integration with your software for automatic accrual of stamps,
                points and awards.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Custom fields</p>
              <p className=" text-[14px]">
                Design your own cards with custom content without using the
                template. Add additional links to cards.
              </p>
            </TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#ff0030] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>-</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex justify-center items-center">
                <div
                  className=" flex justify-center items-center rounded-full
                    bg-[#1dcd27] text-white
                    w-[35px] h-[35px] text-[20px]"
                >
                  <p>+</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#bcbccd]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Cost per month</p>
              <p className=" text-[14px]">for annual plan</p>
              <p className=" text-[14px]">/ for quarterly plan</p>
              <p className=" text-[14px]">/ for monthly plan</p>
            </TableCell>
            <TableCell className="text-center">
              <p className="font-bold text-[14px]">$9</p>
              <p className=" text-[14px]">/ $99</p>
              <p className=" text-[14px]">/ $139</p>
            </TableCell>
            <TableCell className="text-center">
              <p className="font-bold text-[14px]">$99</p>
              <p className=" text-[14px]">/ $149</p>
              <p className=" text-[14px]">/ $199</p>
            </TableCell>
            <TableCell className="text-center">
              <p className="font-bold text-[14px]">$129</p>
              <p className=" text-[14px]">/ $199</p>
              <p className=" text-[14px]">/ $259</p>
            </TableCell>
          </TableRow>
          <TableRow className="border-b-[1px] border-[#D5D5DD] hover:bg-[#ebebf2]">
            <TableCell className="flex flex-col">
              <p className="font-semibold text-[20px]">Payment period</p>
            </TableCell>
            <TableCell>
              <div
                className="flex justify-center 
              items-center flex-col gap-3"
              >
                <Select>
                  <SelectTrigger className="w-[144px] border-[#D5D5DD] border-[1px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white cursor-pointer">
                    <SelectGroup>
                      <SelectItem value="year">Year</SelectItem>
                      <SelectItem value="quarter">Quarter</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button className="bg-[#1F1E1F] w-[144px] text-white">
                  Buy
                </Button>
              </div>
            </TableCell>
            <TableCell>
              <div
                className="flex justify-center 
              items-center flex-col gap-3"
              >
                <Select>
                  <SelectTrigger className="w-[144px] border-[#D5D5DD] border-[1px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white cursor-pointer">
                    <SelectGroup>
                      <SelectItem value="year">Year</SelectItem>
                      <SelectItem value="quarter">Quarter</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button className="bg-[#1F1E1F] w-[144px] text-white">
                  Buy
                </Button>
              </div>
            </TableCell>
            <TableCell>
              <div
                className="flex justify-center 
              items-center flex-col gap-3"
              >
                <Select>
                  <SelectTrigger className="w-[144px] border-[#D5D5DD] border-[1px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white cursor-pointer">
                    <SelectGroup>
                      <SelectItem value="year">Year</SelectItem>
                      <SelectItem value="quarter">Quarter</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button className="bg-[#1F1E1F] w-[144px] text-white">
                  Buy
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePlan;
