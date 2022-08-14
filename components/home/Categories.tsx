import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { PublicProp } from "../../types/public.types";
import Link from "next/link";

const Categories: React.FC<{ attributes: PublicProp[] }> = ({ attributes }) => {
  return (
    <div className="my-10 w-full vstack justify-center">
      <h2 className="text-zinc-700 text-start w-full p-5">دسته بندی محصولات</h2>
      <div className="w-fit grid grid-cols-2 gap-3 md:gap-7 items-center justify-items-center mt-5 overflow-hidden">
        {attributes.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            key={item.id}
            className="h-44 md:h-80 rounded-lg overflow-hidden shadow-lg shadow-slate-400 cursor-pointer hover:scale-95 ease-in-out duration-300 hover:shadow-none"
          >
            <Link href={`/products/${item.content}`}>
              <a className="flex vstack justify-center">
                <div className="relative w-44 md:w-[400px] h-44 md:h-80 bg-zinc-800">
                  <Image
                    alt=""
                    src={item?.media || ""}
                    layout="fill"
                    style={{ opacity: 0.8 }}
                    priority
                  />
                </div>
                <p className="absolute text-2xl whitespace-pre-line md:text-4xl text-center px-4">
                  {item.title}
                </p>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
