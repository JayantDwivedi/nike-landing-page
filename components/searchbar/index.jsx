import React from "react";
import { BsSearch } from "react-icons/bs";

const index = () => {
  return (
    <div className="flex items-center rounded-md p-1 px-2 bg-slate-100 ">
      <input
        className="w-28 bg-slate-100 focus-visible:border-slate-100"
        placeholder="search"
        type="text"
        name="serach"
        id="searchbar"
      />
      <BsSearch />
    </div>
  );
};
export default index;
