import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HomeProps } from "../../types/public.types";

const Categories: React.FC<{ attributes: HomeProps[] }> = ({ attributes }) => {
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
            className="vstack h-44 md:h-80 justify-center rounded-lg overflow-hidden shadow-lg shadow-slate-400 cursor-pointer hover:scale-95 ease-in-out duration-300 hover:shadow-none"
          >
            <div className="relative w-44 md:w-[400px] h-44 md:h-80 bg-amber-400">
              <Image
                alt=""
                src={item?.attributes.media || ""}
                layout="fill"
                style={{ opacity: 0.8 }}
                priority
              />
            </div>
            <p className="absolute text-2xl md:text-4xl">
              {item.attributes.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
