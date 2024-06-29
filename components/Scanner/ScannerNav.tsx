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
const ScannerNav = () => {
  const router = useRouter();
  const logout = () => {
    try {
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
  );
};

export default ScannerNav;
