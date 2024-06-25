// components/IconBar.js
import React from "react";
import Image from "next/image";

const OffBanner = () => {
  return (
    <div className="flex justify-center items-center space-x-6 py-4 bg-white overflow-x-auto">
      <div className="flex gap-5   items-center">
        <Image src="/icon/ReadyMade.svg" width={50} height={45} />

        <p className="mt-2 text-sm font-medium ">READY MADE</p>
      </div>
      <div className="flex gap-5   items-center">
        <Image src="/icon/BestEverDeals.svg" width={60} height={45} />

        <p className="mt-2 text-sm font-medium ">BEST EVER DEALS</p>
      </div>
      <div className="flex  items-center">
        <Image src="/icon/MostTrusted.svg" width={60} height={45} />

        <p className="mt-2 text-sm font-medium ">MOST TRUSTED</p>
      </div>
      <div className="flex  items-center">
        <Image src="/icon/LovedByEveryone.svg" width={60} height={45} />

        <p className="mt-2 text-sm font-medium ">LOVED BY EVERYONE</p>
      </div>
      <div className="flex gap-5   items-center">
        <Image src="/icon/ExpressShipping.svg" width={60} height={45} />
        <p className="mt-2 text-sm font-medium ">EXPRESS SHIPPING</p>
      </div>
    </div>
  );
};

export default OffBanner;
