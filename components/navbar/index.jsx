import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../searchbar";
import { navLinks } from "../../constants/constants";
import IconBtn from "../../components/buttons/iconbtns";
import { BsHandbag, BsHeart } from "react-icons/bs";

const index = () => {
  return (
    <nav className="border-4 flex items-center">
      <div className="w-16 h-16 relative">
        <Image
          className="w-4"
          src="/logo/logo.svg"
          alt="logo"
          layout="fill"
          width={50}
          height={50}
        />
      </div>
      <div className="w-8/12 flex  justify-evenly">
        {navLinks.map((navlink) => (
          <Link href={navlink.link} key={navlink.link}>
            <a className="font-semibold">{navlink.name}</a>
          </Link>
        ))}
      </div>
      <div className="w-3/12 flex items-center justify-evenly">
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
