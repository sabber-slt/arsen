import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGift } from "react-icons/fi";
import { ProTypes } from "../../types/public.types";

const Discount: React.FC<{ attributes: ProTypes[] }> = ({ attributes }) => {
  return (
    <div className="my-10 w-full">
      <div className="relative flex items-center bg-black h-96">
        <div className="vstack p-2 ">
          <FiGift className="text-white text-5xl pb-3 text-center" />
          <p className="text-center text-amber-400">پیشنهادات شگقت انگیز</p>
        </div>
        <div className="no-scrollbar w-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap">
          {attributes.map((item) => (
            <div key={item.id} className="w-[200px] inline-block mx-5">
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
                <div className="h-80 w-[200px] bg-white vstack justify-around rounded-lg shadow-md shadow-slate-300 hover:scale-95 ease-in-out duration-300 cursor-pointer ">
                  <Image
                    alt=""
                    src={item?.media || ""}
                    width={180}
                    height={180}
                    priority
                  />
                  <div className="vstack">
                    <p className="text-zinc-700 whitespace-pre-line text-center px-3">
                      {item?.title}
                    </p>

                    <p className="mt-1 text-zinc-500 line-through decoration-red-600">
                      {item?.old_price}
                    </p>
                    <p className="mt-1 text-zinc-500">
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

export default Discount;
