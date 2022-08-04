import Image from "next/image";
import React from "react";
import { FiGift } from "react-icons/fi";
import { HomeProps, OfferProps } from "../../types/public.types";

const Discount: React.FC<{ attributes: OfferProps[] }> = ({ attributes }) => {
  return (
    <div className="my-10 w-full">
      <div className="relative flex items-center bg-zinc-900 h-96">
        <div className="vstack p-2 ">
          <FiGift className="text-white text-5xl pb-3 text-center" />
          <p className="text-center text-amber-400">پیشنهادات شگقت انگیز</p>
        </div>
        <div className="no-scrollbar w-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap">
          {attributes.map((item) => (
            <div key={item.id} className="w-[200px] inline-block mx-5">
              <div className="h-80 w-[200px] bg-white vstack justify-around rounded-lg shadow-md shadow-slate-300 hover:scale-95 ease-in-out duration-300 cursor-pointer ">
                <Image
                  alt=""
                  src={item?.media || ""}
                  width={180}
                  height={180}
                  priority
                />
                <div className="vstack">
                  <p className="text-zinc-700">{item?.title}</p>
                  <p className="mt-1 text-zinc-500">{item?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discount;
