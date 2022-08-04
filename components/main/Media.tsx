import React from "react";
import { FiInstagram, FiPhoneCall, FiShoppingBag } from "react-icons/fi";

const Media: React.FC = () => {
  return (
    <div className="hstack text-amber-400 absolute w-24 md:w-32 justify-around top-5 left-5">
      <FiInstagram className="w-5 md:w-7 h-5 md:h-7" />
      <FiPhoneCall className="w-5 md:w-7 h-5 md:h-7" />
      <FiShoppingBag className="w-5 md:w-7 h-5 md:h-7" />
    </div>
  );
};

export default Media;
