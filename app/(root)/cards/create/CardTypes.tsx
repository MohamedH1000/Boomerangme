"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const CardTypes = ({ display }: any) => {
  const handleCardTypeClick = (type: any) => {
    setCardType({
      stamp: false,
      reward: false,
      membership: false,
      discount: false,
      cashback: false,
      coupon: false,
      multipass: false,
      gift: false,
      [type]: true,
    });
  };
  const [cardType, setCardType] = useState({
    stamp: true,
    reward: false,
    membership: false,
    discount: false,
    cashback: false,
    coupon: false,
    multipass: false,
    gift: false,
  });
  return (
    <div className={`${display === "Description" ? "" : "max-md:hidden"}`}>
      <div
        className={
          "grid grid-cols-3 gap-4 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:mt-5"
        }
      >
        <div
          className={`${
            cardType.stamp === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
        h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("stamp")}
        >
          <Image
            src={"/assets/stamp.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.stamp === true && "invert"}`}
          />
          <p>Stamp</p>
          <div
            className={`${
              cardType.stamp === true ? "bg-[#1dcd27]" : "bg-[#f0fff4]"
            } 
          w-[85px] h-[26px]  rounded-full  flex justify-center items-center border-[#1dcd27] border-[1px]`}
          >
            <p
              className={`${
                cardType.stamp === true ? "text-white" : "text-[#1dcd27]"
              }  font-bold text-[10px]`}
            >
              High retention
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.reward === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("reward")}
        >
          <Image
            src={"/assets/reward.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.reward === true && "invert"}`}
          />
          <p>Reward</p>
          <div
            className={`${
              cardType.reward === true ? "bg-[#1dcd27]" : "bg-[#f0fff4]"
            } 
          w-[85px] h-[26px]  rounded-full  flex justify-center items-center border-[#1dcd27] border-[1px]`}
          >
            <p
              className={`${
                cardType.reward === true ? "text-white" : "text-[#1dcd27]"
              }  font-bold text-[10px]`}
            >
              High retention
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.membership === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("membership")}
        >
          <Image
            src={"/assets/membership.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.membership === true && "invert"}`}
          />
          <p>Membership</p>
          <div
            className={`${
              cardType.membership === true ? "bg-[#1dcd27]" : "bg-[#f0fff4]"
            } 
          w-[85px] h-[26px]  rounded-full  flex justify-center items-center border-[#1dcd27] border-[1px]`}
          >
            <p
              className={`${
                cardType.membership === true ? "text-white" : "text-[#1dcd27]"
              }  font-bold text-[10px]`}
            >
              High retention
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.discount === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("discount")}
        >
          <Image
            src={"/assets/discount.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.discount === true && "invert"}`}
          />
          <p>Discound</p>
          <div
            className={`${
              cardType.discount === true ? "bg-[#1dcd27]" : "bg-[#f0fff4]"
            } 
          w-[85px] h-[26px]  rounded-full  flex justify-center items-center border-[#1dcd27] border-[1px]`}
          >
            <p
              className={`${
                cardType.discount === true ? "text-white" : "text-[#1dcd27]"
              }  font-bold text-[10px]`}
            >
              High retention
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.cashback === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("cashback")}
        >
          <Image
            src={"/assets/cashback.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.cashback === true && "invert"}`}
          />
          <p>Cashback</p>
          <div
            className={`${
              cardType.cashback === true ? "bg-[#1dcd27]" : "bg-[#f0fff4]"
            } 
          w-[85px] h-[26px]  rounded-full  flex justify-center items-center border-[#1dcd27] border-[1px]`}
          >
            <p
              className={`${
                cardType.cashback === true ? "text-white" : "text-[#1dcd27]"
              }  font-bold text-[10px]`}
            >
              High retention
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.coupon === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("coupon")}
        >
          <Image
            src={"/assets/coupon.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.coupon === true && "invert"}`}
          />
          <p>Coupon</p>
          <div
            className={`${
              cardType.coupon === true ? "bg-[#057cfd]" : "bg-[#e5f1ff]"
            } w-auto h-[26px] 
          border-[#057cfd] border-[1px] rounded-full flex justify-center items-center p-2`}
          >
            <p
              className={`${
                cardType.coupon === true ? "text-white" : "text-[#057cfd]"
              } font-bold text-[10px]`}
            >
              Best for aquisition
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.multipass === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("multipass")}
        >
          <Image
            src={"/assets/multipass.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.multipass === true && "invert"}`}
          />
          <p>Multipass</p>
          <div
            className={`${
              cardType.multipass === true ? "bg-[#057cfd]" : "bg-[#e5f1ff]"
            } w-auto h-[26px] 
          border-[#057cfd] border-[1px] rounded-full flex justify-center items-center p-2`}
          >
            <p
              className={`${
                cardType.multipass === true ? "text-white" : "text-[#057cfd]"
              } font-bold text-[10px]`}
            >
              Best for aquisition
            </p>
          </div>
        </div>
        <div
          className={`${
            cardType.gift === true
              ? "bg-[black] text-white"
              : "hover:bg-[#F7F7F8] bg-white border-[#D5D5DD] border-[1px]"
          } 
          h-[144px] cursor-pointer  transition duration-300  flex flex-col justify-center items-center rounded-md  gap-2`}
          onClick={() => handleCardTypeClick("gift")}
        >
          <Image
            src={"/assets/gift.svg"}
            alt="stamp"
            width={30}
            height={30}
            className={`${cardType.gift === true && "invert"}`}
          />
          <p>Gift</p>
          <div
            className={`${
              cardType.gift === true ? "bg-[#057cfd]" : "bg-[#e5f1ff]"
            } w-auto h-[26px] 
          border-[#057cfd] border-[1px] rounded-full flex justify-center items-center p-2`}
          >
            <p
              className={`${
                cardType.gift === true ? "text-white" : "text-[#057cfd]"
              } font-bold text-[10px]`}
            >
              Best for aquisition
            </p>
          </div>
        </div>
      </div>
      <Button
        className="bg-[black] text-white mt-9 w-full 
      hover:opacity-90 transition duration-300 h-[40px]"
      >
        Continue
      </Button>
    </div>
  );
};

export default CardTypes;
