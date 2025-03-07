"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/images/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  <p className="nav__link">{link.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 cursor-pointer transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* Burgers Menu */}
            <HiBars3BottomRight
              onClick={openNav}
              className="h-8 w-8 cursor-pointer lg:hidden text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
