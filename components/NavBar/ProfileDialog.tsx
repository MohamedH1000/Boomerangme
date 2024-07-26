"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useToast } from "../ui/use-toast";

interface Props {
  setOpenLang: Dispatch<SetStateAction<boolean>>;
  setOpenNot: Dispatch<SetStateAction<boolean>>;
  openProfile: Boolean;
  setOpenProfile: Dispatch<SetStateAction<boolean>>;
}
const ProfileDialog = ({
  setOpenLang,
  setOpenNot,
  openProfile,
  setOpenProfile,
}: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const logout = () => {
    try {
      signOut({ callbackUrl: "/sign-in", redirect: true });
      toast({
        title: "تم تسجيل الخروج بنجاح",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${
        openProfile ? "bg-[#2E2E2E]" : "hover:bg-[#2E2E2E]"
      } duration-300 w-full h-[100%] flex justify-center items-center 
      cursor-pointer relative`}
      onClick={() => {
        setOpenProfile((prev: any) => !prev);
        setOpenLang(false);
        setOpenNot(false);
      }}
    >
      <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#FFFFFF]"
      >
        <path d="m19.842 17.4144-4.1484-1.8852c1.404-1.098 2.3064-2.808 2.3064-4.7292 0-3.3132-2.6856-6-6-6-3.3132 0-6 2.6868-6 6 0 1.9212.9024 3.6312 2.3076 4.7292l-4.1484 1.8852c-.3948.18-.7416.4404-1.02.7608-1.2228-1.7508-1.9392-3.8796-1.9392-6.1752 0-5.964 4.836-10.8 10.8-10.8 5.9652 0 10.8 4.836 10.8 10.8 0 2.2956-.7164 4.4244-1.938 6.1752-.2784-.3204-.6252-.5808-1.02-.7608zm-12.642-6.6144c0-2.6508 2.1492-4.8 4.8-4.8s4.8 2.1492 4.8 4.8-2.1492 4.8-4.8 4.8-4.8-2.1492-4.8-4.8zm4.8 12c-3.2244 0-6.1176-1.4124-8.0976-3.6528.1848-.2772.444-.5004.7536-.6396l4.8984-2.2272c.7464.3336 1.5744.5196 2.4456.5196s1.6992-.186 2.4468-.5196l4.8984 2.2272c.3084.1392.5676.3624.7524.6396-1.9788 2.2404-4.8732 3.6528-8.0976 3.6528zm0-22.8c-6.6276 0-12 5.3724-12 12s5.3724 12 12 12 12-5.3724 12-12-5.3724-12-12-12z"></path>
      </svg>
      <div
        className={`${
          openProfile
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute w-[270px]  bg-[#2E2E2E] top-[64px] -right-5 text-white duration-300  flex flex-col justify-between items-start`}
      >
        <Link href={"/settings/personal"}>
          <div className="flex justify-center gap-3 pl-4 items-center m-4">
            <Image
              src={"/assets/account.svg"}
              alt="account"
              width={24}
              height={24}
              className="invert"
            />
            <div className="text-[14px]">My Profile</div>
          </div>
        </Link>
        <hr className="border-b-1 border-white w-full" />
        <Link href={"/cards/create"}>
          <div className="flex justify-center gap-3 pl-4 items-start m-4">
            <Image
              src={"/assets/createcard.svg"}
              alt="create card"
              width={24}
              height={24}
              className="invert"
            />
            <div className="flex flex-col gap-3">
              <div className="text-[14px]">Create Card</div>
              <div className="text-[14px]">Bar</div>
              <div className="text-[14px]">ATV Rental</div>
            </div>
          </div>
        </Link>
        <hr className="border-b-1 border-white w-full" />
        <Link href={"/"}>
          <div className="flex justify-center gap-3 pl-4 items-center m-4">
            <Image
              src={"/assets/statistics.svg"}
              alt="statistics"
              width={24}
              height={24}
              className="invert"
            />
            <div className="text-[14px]">Statistics</div>
          </div>
        </Link>
        <hr className="border-b-1 border-white w-full" />
        <Link href={"/settings"}>
          <div className="flex justify-center gap-3 pl-4 items-center m-4">
            <Image
              src={"/assets/settings.svg"}
              alt="settings"
              width={24}
              height={24}
              className="invert"
            />
            <div className="text-[14px]">Settings</div>
          </div>
        </Link>
        <hr className="border-b-1 border-white w-full" />
        <Link href={"/scanner-app"} target="_blank">
          <div className="flex justify-center gap-3 pl-4 items-center m-4">
            <svg height="20" viewBox="0 0 14 20" width="14" className="invert">
              <path d="m10.5 8.35624c1.9687.20727 3.5 1.79686 3.5 3.72706v7.5c0 .2301-.1959.4167-.4375.4167s-.4375-.1866-.4375-.4167v-7.5c0-1.4693-1.1409-2.6849-2.625-2.88708v4.97048c0 .9204-.7835 1.6666-1.75 1.6666-.78132 0-1.47161-.1997-2.05766-.5995-.22287-.152-.49015-.2338-.76465-.2338-.22503 0-.40578.1241-.47017.308-.09707.2774-.03882.5477.14154.7409l3.04043 3.2576c.16053.172.14426.4354-.03633.5883-.18059.1528-.45712.1373-.61765-.0347l-2.21058-2.3684c-.02825.0054-.05749.0083-.08743.0083h-3.5c-1.208123 0-2.1875-.9327-2.1875-2.0833v-13.33337c0-1.150591.979377-2.0833295 2.1875-2.0833295l6.125-.0000005c1.20813.00000034 2.1875.932739 2.1875 2.08333zm-5.55492 8.24636c-.3883-.4161-.5137-.998-.32888-1.526.19471-.5563.70983-.9099 1.2904-.9099.47837 0 .92382.1363 1.29528.3897.43333.2956.94496.4436 1.54812.4436.48325 0 .875-.3731.875-.8333v-12.08337c0-.69035-.58762-1.249998-1.3125-1.249998h-6.125c-.72487 0-1.3125.559648-1.3125 1.249998v13.33337c0 .6903.58763 1.25 1.3125 1.25h2.81742zm-1.00758-14.10257c-.24162 0-.4375-.18655-.4375-.41667s.19588-.41666.4375-.41666h2.625c.24162 0 .4375.18654.4375.41666s-.19588.41667-.4375.41667z"></path>
            </svg>
            <div className="text-[14px]">Scanner App</div>
          </div>
        </Link>
        <hr className="border-b-1 border-white w-full" />
        <div
          className="flex justify-center gap-3 pl-4 items-center m-4"
          onClick={logout}
        >
          <Image
            src={"/assets/Logout.svg"}
            alt="logout"
            width={24}
            height={24}
            className="invert"
          />
          <div className="text-[14px]">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDialog;
