import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Media from "../main/Media";

const Search: React.FC = () => {
  return (
    <div className="vstack md:hstack justify-center md:justify-around w-full h-80 bg-zinc-900">
      <Image alt="" src="/arsen.png" width={150} height={150} />
      <div className="hstack justify-center">
        <input
          placeholder="جست و جوی محصول"
          className="px-3 w-64 md:w-80 h-12 mt-5 rounded-r-lg text-zinc-700"
        />
        <div className="bg-white h-12 mt-5 text-amber-600 rounded-l-lg hstack pl-5">
          <FiSearch className="h-8 w-8" />
        </div>
      </div>
      <Media />
    </div>
  );
};

export default Search;
