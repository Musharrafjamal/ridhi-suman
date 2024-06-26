import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          
          <h2 className="text-3xl font-semibold mb-6">Categories</h2>
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-7 px-6 gap-4 text-gray-600 mb-10">
            {[
              "Zeneta Fashion",
              "Xgard 304",
              "Never Star",
              "Rillingen Hood",
              "DropBrain",
              "Red Pride",
              "Onedry 1998",
              "Starclothing",
              "Zeneta Fashion",
              "Xgard 304",
              "Never Star",
              "Rillingen Hood",
              "DropBrain",
              "Red Pride",
              "Onedry 1998",
              "Starclothing",
            ].map((item, index) => (
              <span key={index} className="hover:text-orange-500 cursor-pointer ">{item}</span>
            ))}
          </div>
          <div className="  mb-10 px-6">
            <h3 className="text-lg font-semibold mb-4">Ridhi Suman Fabric</h3>
            <p className="text-gray-600">
              Aims to make it easier for every community in the world to carry
              out various buying and selling transactions online. It is one of
              the worlds online buying and selling sites whose development is
              relatively fast. You can sell products online at the slabshop
              besides being able to enjoy the process of buying various products
              more quickly and effectively. You can sign up for the exclusive
              slabshop Seller community if you want to launch your own business.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm px-6">
          <span>&copy; Ridhi Suman © 2024-2025, All Rights Reserved</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms Of Use
            </Link>
            <Link href="#" className="hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
