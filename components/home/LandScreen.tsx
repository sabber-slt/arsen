import { FiChevronsDown } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";
import { PublicProps } from "../../types/public.types";

const LandScreen: React.FC<PublicProps> = ({ title, content }) => {
  return (
    <div className="vstack relative w-full h-[50vh] justify-around text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-[50vh] object-cover z-0"
      >
        <source src={"/video.webm"} type="video/webm; codecs=vp9" />
      </video>
      <div className="z-40 ">
        <h1 className="text-center">{title}</h1>
        <h2 className="whitespace-pre pt-5">{content}</h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
        className="text-6xl z-40 "
      >
        <FiChevronsDown />
      </motion.div>
    </div>
  );
};

export default LandScreen;
