import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-18 bg-cyan-800 flex justify-between px-5">
        <Link href={"/"} className="flex items-center">
          <Image
            className="flex items-center justify-center"
            width={75}
            height={75}
            alt="logo image"
            src={"/logo.svg"}
          />
          <span className="font-bold text-white text-2xl">Compress Links</span>
        </Link>
        <div className="flex items-center text-white ">
          <ul className="flex gap-3  ">
            <Link className="flex items-center hover:underline" href={"/"}>
              <li className="">Home</li>
            </Link>
            <Link className="flex items-center hover:underline" href={"/about"}>
              <li className="">About</li>
            </Link>
            <Link className="flex items-center hover:underline" href={"/contact"}>
              <li className="">Contact</li>
            </Link>
            <Link className="flex items-center hover:underline" href={"/shorten"}>
              <li className="">Shorten</li>
            </Link>
            <li className="flex items-center gap-4">
              <Link href={"/shorten"}><button
                type="button"
                className="text-white bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg cursor-pointer"
              >
                Try Now
              </button>
              </Link>
              <Link href={"/github"}><button
                type="button"
                className="text-white bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg cursor-pointer"
              >
                Github
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
