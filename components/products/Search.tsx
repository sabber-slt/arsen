import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { FiSliders } from "react-icons/fi";
import Media from "../main/Media";

type FormData = {
  name: string;
};

const Search: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>();
  const onSearch = async (data: FormData) => {
    router.push({ pathname: "/result", query: { name: data.name } });
  };

  return (
    <>
      <Link href={"/products/filter"}>
        <a className="absolute w-full h-16 bg-black pr-20 flex flex-row items-center">
          <FiSliders className="h-8 w-8  text-amber-500 " />
          <p className="pr-2 text-amber-400">فیلترها</p>
        </a>
      </Link>
      <div className="vstack md:hstack justify-center md:justify-around w-full h-80 bg-black">
        <Image alt="" src="/arsen.png" width={100} height={100} />

        <form
          className="hstack justify-center"
          onSubmit={handleSubmit(onSearch)}
        >
          <input
            placeholder="جست و جوی محصول"
            {...register("name")}
            className="px-3 w-64 md:w-80 h-12 mt-5 rounded-r-lg text-zinc-700"
          />
          <button
            type="submit"
            className="bg-white h-12 mt-5 text-amber-600 rounded-l-lg hstack pl-1"
          >
            <FiSearch className="h-8 w-8" />
          </button>
        </form>

        <Media />
      </div>
    </>
  );
};

export default Search;
