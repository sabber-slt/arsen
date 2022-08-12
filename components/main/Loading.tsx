import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen bg-black w-full top-0 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image alt="" src={"/arsen.png"} width={200} height={200} />
        <h1 className="text-2xl text-center text-amber-500">ArsenMobile.ir</h1>
      </motion.div>
    </div>
  );
};

export default Loading;
