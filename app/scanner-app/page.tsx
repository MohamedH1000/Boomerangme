import React from "react";
import Scanner from "@/components/Scanner/Scanner";
import Image from "next/image";
import Link from "next/link";
import ScannerNav from "@/components/Scanner/ScannerNav";

const page = () => {
  return (
    <>
      <ScannerNav />
      <Scanner />
    </>
  );
};

export default page;
