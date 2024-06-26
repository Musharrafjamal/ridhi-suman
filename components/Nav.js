"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { LiaYoutube } from "react-icons/lia";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
  MobileNav,
} from "@material-tailwind/react";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <div className="relative h-10 w-full min-w-[288px] flex">
          <input
            type="search"
            placeholder="Search"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pl-9 pr-12 font-sans text-sm font-normal text-black placeholder-blue-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-blue-gray-300 focus:!border-t-transparent focus:outline-none transition-all placeholder:text-blue-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 peer-focus:leading-tight peer-disabled:text-transparent"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-blue-gray-500"></label>
          <div className="absolute right-3 top-[8px]">
            <IoIosSearch color="gray" fontSize={23} />
          </div>
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"/"} className="text-black flex gap-1">
          <img src="/icon-2/Wishlist.svg" alt="Wishlist" />
          Wishlist
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"/"} className="text-black flex gap-1">
          <img src="/icon-2/shop.svg" alt="Shop" />
          Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={"/"} className="text-black flex gap-1 items-center relative">
          <img src="/icon-2/Cart.svg" alt="Cart" />
          Cart
          <span class="absolute top-[-2px] left-[36px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-teal-600 rounded-full transform translate-x-1/2 -translate-y-1/2">1</span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal flex gap-1"
      >
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setOpenProfile((prev) => !prev)}
        >
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="inline-block relative object-cover object-center !rounded-full w-12 h-12"
          />
          <div>
            <h6 className="block font-sans text-base text-black antialiased font-semibold leading-relaxed tracking-normal">
              Atul Kumar
            </h6>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-green-400">
              Online
            </p>
          </div>
        </div>
      </Typography>
    </ul>
  );

  return (
    <>
      <nav className="block w-full px-6 py-3 mx-auto text-white bg-black shadow-md border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between text-blue-gray-900">
          <div className="flex lg:flex-row md:flex-row flex-col gap-3">
            <a href="tel:+919334079737" className="flex items-center text-sm">
              <span className="flex gap-1 items-center">
                <IoCall color="green" fontSize={23} /> +91 9334079737
              </span>
            </a>
            <a
              href="mailto:musharrafjamal92@gmail.com"
              className="flex items-center text-sm"
            >
              <span className="flex gap-1 items-center">
                <IoMailOutline color="orange" fontSize={23} />{" "}
                ridhisuman@gmail.com
              </span>
            </a>
          </div>
          <span className="hidden">Privacy Policy</span>
          <span className="hidden">T&C</span>

          <div className="hidden items-center lg:flex space-x-4">
            <span className="text-sm">CONNECT WITH US ON:</span>
            <ul className="flex gap-4">
              <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
                <FiTwitter
                  className="text-orange-600 group-hover:text-white"
                  fontSize={20}
                />
              </li>
              <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
                <LiaYoutube
                  className="text-orange-600 group-hover:text-white"
                  fontSize={20}
                />
              </li>
              <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
                <PiInstagramLogoLight
                  className="text-orange-600 group-hover:text-white"
                  fontSize={20}
                />
              </li>
              <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
                <PiFacebookLogo
                  className="text-orange-600 group-hover:text-white"
                  fontSize={20}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="max-h-[768px]">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8 lg:py-1">
          <div className="flex items-center justify-between  ">
            <Card className=" shadow-none cursor-pointer   ">
              <img
                src="/ridhi-logo.png"
                alt="logo"
                className="block max-w-[180px] max-h-[165px]"
              />
            </Card>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center lg:hidden">
                <div className="mr-4">
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => setOpenProfile((prev) => !prev)}
                  >
                    <img
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                      className="inline-block relative object-cover object-center !rounded-full w-12 h-12"
                    />
                    <div></div>
                  </div>
                </div>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 flex text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
          {openProfile && (
            <div className="flex flex-col dropDownProfile z-50">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={"/"}>Profile</Link>
                </li>
                <li>
                  <Link href={"/"}>Settings</Link>
                </li>
                <li>
                  <Link href={"/"}>Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </Navbar>
      </div>
    </>
  );
}

export default Nav;
