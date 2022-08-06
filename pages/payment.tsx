/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Search from "../components/products/Search";
import useUser from "../utils/useUser";

type FormData = {
  name: string;
  phone: string;
  address: string;
};

const Payment = () => {
  const router = useRouter();
  const { query } = router;
  const { setUser } = useUser();
  const [show, setShow] = useState(false);
  const [bankUrl, setBankUrl] = useState("");
  const { register, handleSubmit } = useForm<FormData>();
  const onClick = async (data: FormData) => {
    const { name, phone, address } = data;
    const user = {
      name,
      phone,
      address,
      productId: query.id,
      title: query.title,
      price: query.price,
    };
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        productId: query.id || "",
        price: query.price || "",
        title: query.title || "",
      }),
    });
    const result = await res.json();
    if (result.status === "success") {
      setUser(user);
      setBankUrl(result.url);
      setShow(true);
    }
  };
  return (
    <div className="relative text-zinc-700 bg-white w-full h-full">
      {show && (
        <div className="w-80 h-80 fixed bg-amber-400 vstack justify-center z-50 self-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden">
          <Link href={`${bankUrl}`}>
            <a className="bg-zinc-700 text-xl px-5 py-2 text-white rounded-lg">
              رفتن به صفحه بانک
            </a>
          </Link>
        </div>
      )}
      <Search />
      <form
        onSubmit={handleSubmit(onClick)}
        className="h-full vstack justify-center mt-16"
      >
        <div className="vstack">
          <label className="" htmlFor="name">
            نام و نام خانوادگی{" "}
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-64 h-10 bg-slate-200 rounded-lg pr-2"
          />
        </div>
        <div className="vstack">
          <label className="mt-5" htmlFor="name">
            شماره موبایل{" "}
          </label>
          <input
            type="number"
            {...register("phone")}
            className="w-64 h-10 bg-slate-200 rounded-lg pr-3"
          />
        </div>
        <div className="vstack">
          <label className="mt-5" htmlFor="name">
            آدرس{" "}
          </label>
          <textarea
            {...register("address")}
            className="w-64 h-36 bg-slate-200 rounded-lg pr-3"
          />
        </div>
        <div className="vstack">
          <img alt="" src={`${query.media}`} width={200} height={200} />
          <p>{query.title}</p>
          <p>تعداد : یک عدد</p>
          <p>قیمت : {query.price} تومان</p>
        </div>
        <button
          type="submit"
          className="px-5 my-8 py-3 bg-red-400 text-white rounded-lg"
        >
          تایید و پرداخت
        </button>
      </form>
    </div>
  );
};
export default Payment;
