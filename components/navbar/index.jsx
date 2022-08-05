import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../searchbar";
import { navLinks } from "../../constants/constants";
import IconBtn from "../../components/buttons/iconbtns";
import { BsHandbag, BsHeart } from "react-icons/bs";

const index = () => {
  return (
    <nav className="flex items-center container px-20">
      <div className="w-26 h-26 relative">
        <Image
          className="w-20"
          src="/assets/logo/logo.svg"
          alt="logo"
          // layout="fill"
          width={100}
          height={100}
        />
      </div>
      <div className="w-8/12 flex  justify-start">
        {navLinks.map((navlink) => (
          <Link href={navlink.link} key={navlink.link}>
            <a className="font-semibold mx-8">{navlink.name}</a>
          </Link>
        ))}
      </div>
      <div className="w-3/12 flex items-center justify-between">
        {/* <div className="w-1/2"> */}
        <SearchBar />
        {/* </div> */}
        <IconBtn link="/">
          <BsHandbag />
        </IconBtn>
        <IconBtn link="/">
          <BsHeart />
        </IconBtn>
      </div>
    </nav>
  );
};

export default index;
