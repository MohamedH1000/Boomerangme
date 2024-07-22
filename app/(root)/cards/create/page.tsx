import React from "react";
import CreateCardNav from "./CreateCardNav";
import Image from "next/image";

const page = () => {
  return (
    <>
      <CreateCardNav />
      <div
        className="pl-[100px] mt-10 w-full flex justify-between items-start 
      pt-[100px] mb-10 max-md:mb-20 max-md:flex-col max-md:items-center max-md:px-5"
      >
        <div className="w-[55%] max-md:w-full">
          <h1 className="text-[30px] max-md:text-[25px]">Card type</h1>
          <hr className="border-[1px] border-gray mt-5" />
          <div className="grid grid-cols-3 gap-4 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col justify-center 
            items-center rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/stamp.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Stamp</p>
              <div
                className="w-[85px] h-[26px] border-[#1dcd27] border-[1px] rounded-full 
              flex justify-center items-center bg-[#f0fff4]"
              >
                <p className="text-[#1dcd27] font-bold text-[10px]">
                  High retention
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col justify-center items-center
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/reward.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Reward</p>
              <div
                className="w-[85px] h-[26px] border-[#1dcd27] border-[1px] rounded-full 
              flex justify-center items-center bg-[#f0fff4]"
              >
                <p className="text-[#1dcd27] font-bold text-[10px]">
                  High retention
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col items-center justify-center 
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/membership.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Membership</p>
              <div
                className="w-[85px] h-[26px] border-[#1dcd27] border-[1px] 
              rounded-full flex justify-center items-center bg-[#f0fff4]"
              >
                <p className="text-[#1dcd27] font-bold text-[10px]">
                  High retention
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col items-center justify-center 
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/discount.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Discound</p>
              <div
                className="w-[85px] h-[26px] border-[#1dcd27] border-[1px] 
              rounded-full flex justify-center items-center bg-[#f0fff4]"
              >
                <p className="text-[#1dcd27] font-bold text-[10px]">
                  High retention
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col items-center justify-center 
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/cashback.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Cashback</p>
              <div
                className="w-[85px] h-[26px] border-[#1dcd27] border-[1px] 
              rounded-full flex justify-center items-center bg-[#f0fff4]"
              >
                <p className="text-[#1dcd27] font-bold text-[10px]">
                  High retention
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col items-center justify-center 
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/coupon.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Coupon</p>
              <div
                className="w-auto h-[26px] border-[#057cfd] border-[1px] 
              rounded-full flex justify-center items-center p-2 bg-[#e5f1ff]"
              >
                <p className="text-[#057cfd] font-bold text-[10px]">
                  Best for aquisition
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col items-center justify-center 
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/multipass.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Multipass</p>
              <div
                className="w-auto h-[26px] border-[#057cfd] border-[1px] 
              rounded-full flex justify-center items-center p-2 bg-[#e5f1ff]"
              >
                <p className="text-[#057cfd] font-bold text-[10px]">
                  Best for aquisition
                </p>
              </div>
            </div>
            <div
              className="h-[144px] cursor-pointer bg-white flex flex-col items-center justify-center 
            rounded-md border-[#D5D5DD] border-[1px] gap-2"
            >
              <Image
                src={"/assets/gift.svg"}
                alt="stamp"
                width={30}
                height={30}
              />
              <p>Gift</p>
              <div
                className="w-auto h-[26px] border-[#057cfd] border-[1px] 
              rounded-full flex justify-center items-center p-2 bg-[#e5f1ff]"
              >
                <p className="text-[#057cfd] font-bold text-[10px]">
                  Best for aquisition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
