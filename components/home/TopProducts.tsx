import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProTypes } from "../../types/public.types";

const TopProducts: React.FC<{ data: ProTypes[] }> = ({ data }) => {
  return (
    <div className="my-5 w-full">
      <div className="vstack items-center bg-black">
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
                    type: item.type,
                    use: item.use,
                    show_price: item.show_price,
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
                      {item?.show_price} تومان
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
