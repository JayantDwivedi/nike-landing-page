import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="flex">
      <div>Hero section</div>
      <div>
        <Image
          src="/public/images/hero-img.jpg"
          alt="hero-image"
          layout="fill"
          width="100px"
          height="100px"
        />
      </div>
    </div>
  );
};

export default index;
