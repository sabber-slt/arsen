import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGift } from "react-icons/fi";
import { fetchTopProducts } from "../../hooks/useFetch";
import { OfferProps } from "../../types/public.types";

const TopProducts: React.FC = () => {
  const { data, isLoading, isError }: UseBaseQueryResult<OfferProps[]> =
    useQuery<OfferProps[], Error>(["topProducts"], fetchTopProducts);
  if (isLoading) return <FiGift />;

  console.log(data);
  return (
    <div className="my-5 w-full">
      <div className="vstack items-center bg-zinc-900">
        <div className="vstack p-2 ">
          <p className="text-center text-amber-400"> محصولات پرطرفدار </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-fit items-center justify-around mb-5">
          {data?.map((item) => (
            <div key={item.id} className="w-40 md:w-96 ">
              <Link
                href={{
                  pathname: "/shop",
                  query: {
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    media: item.media,
                    media1: item.media,
                    media2: item.media,
                    content: item.content,
                    old_price: item.old_price,
                    price: item.price,
                    mojod: item.mojod,
                    color1: item.color1,
                    color2: item.color2,
                  },
                }}
              >
                <div className="bg-white vstack justify-around rounded-lg shadow-md shadow-slate-300 hover:scale-95 ease-in-out duration-300 cursor-pointer ">
                  <div className="relative w-36 h-36">
                    <Image alt="" src={item?.media || ""} layout="fill" />
                  </div>
                  <div className="vstack h-28 justify-center">
                    <p className="text-zinc-700 mt-3 whitespace-pre-wrap text-center">
                      {item?.title}
                    </p>
                    <p className="mt-1 text-zinc-500 line-through decoration-red-600">
                      {item?.old_price} تومان
                    </p>
                    <p className="mt-1 text-zinc-500 mb-3">
                      {item?.price} تومان
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
