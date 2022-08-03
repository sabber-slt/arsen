import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { FiGift } from "react-icons/fi";
import { fetchTopProducts } from "../../hooks/useFetch";
import { ProductProps } from "../../types/products.types";

const TopProducts: React.FC = () => {
  const { data, isLoading, isError }: UseBaseQueryResult<ProductProps[]> =
    useQuery<ProductProps[], Error>(["topProducts"], fetchTopProducts);
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
              <div className="bg-white vstack justify-around rounded-lg shadow-md shadow-slate-300 hover:scale-95 ease-in-out duration-300 cursor-pointer ">
                <div className="relative w-36 h-36">
                  <Image
                    alt=""
                    src={item?.attributes?.media1 || ""}
                    layout="fill"
                  />
                </div>
                <div className="vstack h-24 justify-center">
                  <p className="text-zinc-700 whitespace-pre-wrap text-center">
                    {item?.attributes?.title}
                  </p>
                  <p className="mt-1 text-zinc-500">
                    {item?.attributes?.price} تومان
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
