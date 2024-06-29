"use client";
import React, { SetStateAction, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  // const [scanResult, setScanResult] = useState(null);
  // const scanner = new Html5QrcodeScanner("reader", {
  //   qrbox: {
  //     width: 250,
  //     height: 250,
  //   },
  //   fps: 5,
  // });

  // scanner.render(success, error);

  // const success = (result: any) => {
  //   scanner.clear();
  //   setScanResult(result);
  // };

  // const error = (err: any) => {
  //   console.warn(err);
  // };

  const currentUser = {
    id: 1,
    name: "Mohamed Hesham",
    email: "mohammedhisham115@gmail.com",
    phone: "+201001945491",
  };
  return (
    <section className="min-h-screen flex justify-center items-start mt-[130px]">
      <div className="flex flex-col gap-3 justify-center items-center">
        <p className="opacity-60">You are logged in as:</p>
        <span className="leading-10 font-bold text-[30px]">
          {" "}
          {currentUser?.name}
        </span>
        <p>
          {currentUser?.email},&nbsp;{currentUser?.phone}
        </p>
        <p className="opacity-60">Press the "Scan" button to scan the card</p>
      </div>
    </section>
  );
};

export default Scanner;
