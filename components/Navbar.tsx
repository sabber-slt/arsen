import React from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "فروشگاه" },
  { href: "/about", label: "درباره آرسن" },
];

const Navbar: React.FC = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="absolute top-3 right-0 z-50">
      <div onClick={() => setShow(!show)} className="cursor-pointer mr-5 ">
        <FiAlignJustify className="text-amber-500 text-4xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: show ? 1 : 0, x: show ? 0 : 200 }}
        transition={{ duration: 0.7 }}
        className="fixed h-screen w-64 bg-zinc-900 top-0 right-0 z-50 bg-opacity-90"
      >
        <div onClick={() => setShow(!show)} className="cursor-pointer">
          <FiX className="text-amber-500 text-4xl m-3" />
        </div>
        <div className="text-white w-full flex flex-col items-center text-xl">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              <a className="border-2 w-36 text-center py-3 rounded-lg mt-5">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
