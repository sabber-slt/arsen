import Link from "next/link";
import React from "react";
import { FiInstagram, FiPhoneCall, FiCode } from "react-icons/fi";

const Media: React.FC = () => {
  return (
    <div className="flex flex-col h-36 items-center text-amber-400 absolute justify-around top-5 left-5">
      <Link href={"tel:09122863901"} passHref={true}>
        <a>
          <FiPhoneCall className="w-8 h-8" />
        </a>
      </Link>
      <Link href={"https://instagram.com/sabber.slt"} passHref={true}>
        <a>
          <FiInstagram className="w-8 h-8" />
        </a>
      </Link>
    </div>
  );
};

export default Media;
