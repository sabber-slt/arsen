/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../components/main/Logo";
import Search from "../components/products/Search";
import { FiCheck, FiX } from "react-icons/fi";

const Shop = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <>
      <Search />
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center py-16">
        <div className="vstack justify-around h-96 w-full md:w-[50vw] bg-white">
          <h2 className="text-zinc-600">{query.title}</h2>
          <div className=" w-48 h-48">
            <Link
              href={{
                pathname: "/products/compare",
                query: {
                  title: query.title,
                  media: query.media,
                  content: query.content,
                  price: query.price,
                  type: query.type,
                  use: query.use,
                },
              }}
            >
              <a className="bg-red-500 absolute right-8 top-[470px] px-3 py-2 rounded-lg">
                مقایسه محصول
              </a>
            </Link>
            <img alt="" src={`${query.media}`} width={300} height={300} />
          </div>
        </div>
        <div className="vstack text-zinc-600 px-5 w-full md:w-[50vw]">
          <p className="text-right text-lg w-full text-zinc-800">مشخصات:</p>
          <p className="whitespace-pre-line w-full pr-5 text-right text-sm">
            {query?.desc}
          </p>
          <p className="text-right text-lg w-full text-zinc-800">توضیحات:</p>
          <p className="whitespace-pre-wrap pr-5 text-sm">{query?.content}</p>
          <p className="text-right text-lg w-full text-zinc-800">زمان تحویل:</p>
          <p className="whitespace-pre-wrap text-right w-full pr-5 text-sm">
            24 ساعت
          </p>
        </div>

        <div className="w-1/5 vstack my-8">
          <div className="w-36 h-48 bg-red-200 text-zinc-900 vstack justify-around rounded-lg">
            <div className="vstack text-xs">
              <p className="text-right w-full">قیمت:</p>
              <p className="pt-2"> {query?.price} تومان</p>
            </div>
            <div className="vstack text-xs">
              <p className="text-right w-full">موجود در انبار:</p>
              <div className="pt-2">
                {" "}
                {query?.mojod === "false" ? (
                  <FiX className="text-red-600 w-5 h-5" />
                ) : (
                  <FiCheck className="text-green-600 w-5 h-5" />
                )}{" "}
              </div>
            </div>

            <Link
              href={{
                pathname: "/payment",
                query: {
                  id: query.id,
                  title: query.title,
                  price: query.price,
                  media: query.media,
                },
              }}
            >
              <a>
                <div className="bg-red-700 px-3 rounded-md text-white py-2">
                  خرید این محصول
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around w-full h-[700px] md:h-[400px] my-5">
        <div className="relative w-64 h-64 hover:scale-150 transition ease-in-out duration-200 cursor-pointer">
          <Image alt="" src={`${query?.media1}`} layout="fill" />
        </div>
        <div className="relative w-64 h-64 hover:scale-150 transition ease-in-out duration-200 cursor-pointer">
          <Image alt="" src={`${query?.media2}`} layout="fill" />
        </div>
      </div>
      <Logo />
    </>
  );
};
export default Shop;
