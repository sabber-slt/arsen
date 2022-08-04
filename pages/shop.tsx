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
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
        <div className="vstack justify-around h-96 w-full md:w-[50vw] bg-white">
          <h2 className="text-zinc-600">{query.title}</h2>
          <div className="relative w-48 h-48">
            <img alt="" src={`${query.media}`} width={300} height={300} />
          </div>
        </div>
        <div className="vstack text-zinc-600 px-5 w-full md:w-[50vw]">
          <div className="hstack items-start w-full text-lg text-zinc-800">
            <p>رنگ:</p>
            <p className="text-right text-sm pt-1 w-full pr-2">
              {query?.color1 !== null ? query.color1 : ""}
            </p>
            <p className="text-right text-sm pt-1 w-full pr-2">
              {query?.color2 !== null ? query.color2 : ""}
            </p>
            <p className="text-right text-sm pt-1 w-full pr-2">
              {query?.color3 !== null ? query.color3 : ""}
            </p>
          </div>
          <p className="text-right text-lg w-full text-zinc-800">مشخصات:</p>
          <p className="whitespace-pre-line w-full pr-5 text-right text-sm">
            {query?.desc}
          </p>
          <p className="text-right text-lg w-full text-zinc-800">توضیحات:</p>
          <p className="whitespace-pre-wrap pr-5 text-sm">{query?.content}</p>
        </div>
        <div className="vstack"></div>
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
                {query?.mojod === "true" ? (
                  <FiCheck className="text-green-600 w-5 h-5" />
                ) : (
                  <FiX className="text-red-600 w-5 h-5" />
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
      <Logo />
    </>
  );
};
export default Shop;
