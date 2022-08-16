import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchHome } from "../../hooks/useFetch";
import { MainProps } from "../../types/public.types";
import Loading from "../main/Loading";

const AdminHome: React.FC = () => {
  const { data, isLoading }: UseBaseQueryResult<MainProps> =
    useQuery<MainProps>(["pub"], fetchHome);
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full flex flex-col items-center justify-around">
        <Link href="/admin/shegeftangiz">
          <a className="text-slate-100 bg-red-500 w-full text-center py-2">
            شگفت انگیز
          </a>
        </Link>
        <Link href="/admin/portarafdar">
          <a className="text-slate-100 bg-red-500 w-full text-center py-2 my-4">
            {" "}
            پرطرفدار
          </a>
        </Link>
        <Link href="/admin/add">
          <a className="text-slate-100 bg-red-500 w-full text-center py-2">
            {" "}
            افزودن کالا
          </a>
        </Link>
        <Link href="/admin/sales">
          <a className="text-slate-100 bg-red-500 w-full text-center py-2 mt-4">
            {" "}
            فروش
          </a>
        </Link>
        <Link href="/admin/parcham">
          <a className="text-slate-100 bg-red-500 w-full text-center py-2 mt-4">
            {" "}
            پرچم دار ها
          </a>
        </Link>
        <Link href="/admin/total">
          <a className="text-slate-100 bg-red-500 w-full text-center py-2 mt-4">
            {" "}
            کل محصولات
          </a>
        </Link>
      </div>

      <div className="w-full flex flex-col items-center my-16">
        <div className="w-fit grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-center">
          {data?.public?.map((item) => (
            <Link
              href={{
                pathname: "/admin/product",
                query: {
                  id: item.id,
                  title: item.title,
                  media: item.media,
                },
              }}
              key={item.id}
            >
              <a className="w-full flex flex-row items-center justify-between text-zinc-700 bg-gray-200 px-3">
                <p className="w-1/2">{item.title}</p>
                <div className="w-1/2 flex items-center justify-end">
                  <Image
                    src={item.media as string}
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
