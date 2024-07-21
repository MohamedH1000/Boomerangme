import React from "react";
import Scanner from "@/components/Scanner/Scanner";
import Image from "next/image";
import Link from "next/link";
import ScannerNav from "@/components/Scanner/ScannerNav";
import { getCurrentUser } from "@/lib/action/user.action";

const page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <ScannerNav />
      <Scanner currentUser={currentUser} />
    </>
  );
};

export default page;
