import React from "react";
import Link from "next/link";

const index = ({ link, variant = "light", ...props }) => {
  return (
    <Link href={link}>
      <a
        className={`p-2 rounded-lg ${
          variant === "dark" ? "bg-black" : "bg-slate-100 "
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
};
export default index;
