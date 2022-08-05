import Image from "next/image";
import React from "react";
import shoeImage from "../../public/assets/images/hero-img.jpg";
import { BsCurrencyDollar, BsFillCartFill, BsHeart } from "react-icons/bs";
import IconBtn from "../../components/buttons/iconbtns";
import { HiOutlineLocationMarker } from "react-icons/hi";

const index = () => {
  return (
    <div className="flex container px-20">
      <div className="w-1/2">
        <div className="w-5/6 p-4 h-full flex flex-col justify-evenly">
          <p className="md:text-5xl  sm:text-xl">Nike Air Max 90 FlyEase</p>
          <p className="mt-1 md:text-5xl sm:text-xl">On-Feet Shooting</p>
          <p className="my-3 text-slate-400 md:text-3xl sm:text-xl">
            Easy On/Off Road Running Shoes
          </p>
          <div className="my-2 mr-4 border-2 border-slate-900 rounded-md p-2">
            <select name="select-brand" id="" value="puma" className="w-full">
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="puma">Puma</option>
              <option value="decath">Decathlon</option>
            </select>
          </div>
          <div className="flex flex-row justify-between">
            <IconBtn
              link="/"
              className="flex flex-row w-80 px-16"
              variant="dark"
            >
              <div className=" flex items-center justify-evenly w-72 ">
                <p className="p-2 px-4 text-white">Add to Cart</p>
                <BsFillCartFill className="text-white" />
              </div>
            </IconBtn>
            <IconBtn link="/" className="flex flex-row">
              <div className="flex items-center justify-evenly w-32">
                <p className="p-2">Favoirates</p>
                <BsHeart />
              </div>
            </IconBtn>
          </div>
          <div className="flex flex-row">
            <p className="text-xl mr-2 flex flex-row items-center">
              <span>
                <BsCurrencyDollar />
              </span>
              112
            </p>
            <p className="flex flex-row text-xl items-center text-slate-400">
              <span className="mr-2">
                <HiOutlineLocationMarker />
              </span>
              Free Pick-up &nbsp;<span className="underline">Find a store</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-4">
        <Image className="rounded-lg" src={shoeImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default index;
