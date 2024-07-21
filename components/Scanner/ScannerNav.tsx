"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "../ui/use-toast";
const ScannerNav = () => {
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
    <header className="h-[50px] w-full flex justify-between items-center p-3 border-b-[1px] border-[gray] bg-[#f9f9f9]">
      {/* CameraPhoto */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="cursor-pointer"
      >
        <path d="M7.84473 22.6602H22.147C23.8735 22.6602 24.7534 21.7969 24.7534 20.0869V11.396C24.7534 9.68604 23.8735 8.83105 22.147 8.83105H20.2046C19.5571 8.83105 19.3579 8.69824 18.9844 8.2832L18.312 7.53613C17.9053 7.07959 17.4819 6.83057 16.6187 6.83057H13.3149C12.46 6.83057 12.0366 7.07959 11.6216 7.53613L10.9492 8.2832C10.584 8.68994 10.3765 8.83105 9.729 8.83105H7.84473C6.11816 8.83105 5.23828 9.68604 5.23828 11.396V20.0869C5.23828 21.7969 6.11816 22.6602 7.84473 22.6602ZM7.86963 21.3237C7.04785 21.3237 6.57471 20.8838 6.57471 20.0205V11.4707C6.57471 10.6074 7.04785 10.1675 7.86963 10.1675H10.061C10.8081 10.1675 11.2065 10.0264 11.6216 9.56152L12.2773 8.83105C12.7505 8.2998 12.9912 8.16699 13.73 8.16699H16.2036C16.9424 8.16699 17.1831 8.2998 17.6562 8.83105L18.312 9.56152C18.7271 10.0264 19.1255 10.1675 19.8726 10.1675H22.1221C22.9438 10.1675 23.417 10.6074 23.417 11.4707V20.0205C23.417 20.8838 22.9438 21.3237 22.1221 21.3237H7.86963ZM14.9917 11.0889C12.7339 11.0889 10.916 12.9067 10.916 15.1812C10.916 17.4556 12.7339 19.2734 14.9917 19.2734C17.2578 19.2734 19.0757 17.4556 19.0757 15.1812C19.0757 12.9067 17.2578 11.0889 14.9917 11.0889ZM14.9917 12.334C16.5688 12.334 17.8389 13.5957 17.8389 15.1812C17.8389 16.7666 16.5688 18.0283 14.9917 18.0283C13.4312 18.0283 12.1528 16.7666 12.1528 15.1812C12.1528 13.5957 13.4229 12.334 14.9917 12.334Z"></path>
      </svg>
      <Link href={"/"}>
        <Image
          src={"/assets/logotype-light.svg"}
          alt="Boomerang"
          width={150}
          height={50}
          className="invert"
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            alt="menu"
            width={20}
            height={20}
            className="invert cursor-pointer mr-2"
          />
        </SheetTrigger>
        <SheetContent className="bg-[white] w-[300px] flex flex-col justify-start items-start">
          <div className="w-full h-[55px] uppercase opacity-60 border-b-[1px] border-[gray] flex justify-start items-center">
            Menu
          </div>
          <Link href={"/scanner-app"} className="w-full">
            <div className="w-full h-[40px] border-b-[1px] border-[gray] flex justify-start items-center gap-3 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M15.1111 6.87641V13.7778C15.1111 15.0051 14.1162 16 12.8889 16H10.2222C9.97676 16 9.77777 15.801 9.77777 15.5556V10.2222C9.77777 9.97676 9.57879 9.77778 9.33333 9.77778H6.66667C6.42121 9.77778 6.22223 9.97676 6.22223 10.2222V15.5556C6.22223 15.801 6.02324 16 5.77778 16H3.11112C1.88382 16 0.8889 15.0051 0.8889 13.7778V6.87641L0.726992 7.00975C0.537515 7.16579 0.257417 7.13868 0.101377 6.9492C-0.0546636 6.75973 -0.0275574 6.47963 0.16192 6.32359L7.71746 0.101364C7.88158 -0.0337881 8.11842 -0.0337881 8.28254 0.101364L15.8381 6.32359C16.0276 6.47963 16.0547 6.75973 15.8986 6.9492C15.7426 7.13868 15.4625 7.16579 15.273 7.00975L15.1111 6.87641ZM14.2282 6.14929L8 1.0202L1.77183 6.14929C1.77575 6.17302 1.77779 6.19738 1.77779 6.22222V13.7778C1.77779 14.5142 2.37474 15.1111 3.11112 15.1111H5.33334V10.2222C5.33334 9.48584 5.93029 8.88889 6.66667 8.88889H9.33333C10.0697 8.88889 10.6667 9.48584 10.6667 10.2222V15.1111H12.8889C13.6253 15.1111 14.2222 14.5142 14.2222 13.7778V6.22222C14.2222 6.19738 14.2242 6.17302 14.2282 6.14929Z"></path>
              </svg>
              <p>Home</p>
            </div>
          </Link>
          <Link href={"/scanner-app/settings"} className="w-full">
            <div className="w-full h-[40px] border-b-[1px] border-[gray] flex justify-start items-center gap-3 cursor-pointer">
              <Image
                src={"/assets/settings.svg"}
                alt="settings"
                width={20}
                height={20}
              />
              <p>Settings</p>
            </div>
          </Link>
          <div
            className="w-full h-[40px] border-b-[1px] border-[gray] flex justify-start items-center gap-3 cursor-pointer"
            onClick={logout}
          >
            <Image
              src={"/assets/Logout.svg"}
              alt="Logout"
              width={20}
              height={20}
            />
            <p>Logout</p>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default ScannerNav;
