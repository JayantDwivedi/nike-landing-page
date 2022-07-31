import React from "react";
import Link from "next/link";

const index = ({ link, ...props }) => {
  return (
    <Link href={link}>
      <a className="bg-slate-100 p-2 rounded-lg">{props.children}</a>
    </Link>
  );
};
export default index;
