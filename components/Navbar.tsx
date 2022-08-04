import Link from "next/link";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex absolute ease-in-out">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 z-50 bg-zinc-800 mt-5 vstack justify-center rounded-md mr-5 cursor-pointer"
      >
        <FiAlignJustify className="text-amber-500 w-9 h-9" />
      </div>
      {isOpen && (
        <div className="absolute vstack top-0 right-0 w-64 h-screen bg-zinc-700 z-50 bg-opacity-75">
          <button
            className="w-full flex flex-col items-end cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiX className="text-amber-400 w-8 h-8 m-5" />
          </button>
          <Link href="/">
            <a className="w-36 h-12 vstack border-2 justify-center rounded-lg">
              خانه
            </a>
          </Link>
          <Link href="/">
            <a className="w-36 h-12 vstack border-2 justify-center rounded-lg mt-5">
              فروشگاه
            </a>
          </Link>
          <Link href="/about">
            <a className="w-36 h-12 vstack border-2 justify-center rounded-lg mt-5">
              درباره ما
            </a>
          </Link>
          <Link href="/">
            <a className="w-36 h-12 vstack border-2 justify-center rounded-lg mt-5">
              تماس با ما
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
