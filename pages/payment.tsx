/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Search from "../components/products/Search";
import useUser from "../utils/useUser";

type FormData = {
  name: string;
  phone: string;
  address: string;
  post: string;
};

const Payment = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { query } = router;
  const { setUser } = useUser();
  const { register, handleSubmit } = useForm<FormData>();
  const onClick = async (data: FormData) => {
    const { name, phone, address, post } = data;
    const user = {
      name,
      phone,
      address,
      post,
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
        post,
        productId: query.id || "",
        price: query.price || "",
        title: query.title || "",
      }),
    });
    const result = await res.json();
    if (result.status === "success") {
      setUser(user);
      router.push(`${result.url}`);
    }
  };
  return (
    <div className="relative text-zinc-700 bg-white w-full h-full">
      <Search />

      {show ? (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center">
          <p className="text-center px-5">
            در صورت تمایل به خرید محصول به صورت کارت به کارت لطفا پس از انجام
            0تراکنش شماره تراکنش را به همراه مشخصات خود به شماره 9034060388
            پیامک نمایید
          </p>
          <p className="text-rose-500 mt-5">
            6362-1411-1405-3185{" "}
            <span className="text-zinc-500">بانک آینده پوریا خدائی</span>
          </p>
          <p className="text-rose-500 mt-5">
            6219-8610-4913-6111{" "}
            <span className="text-zinc-500">بانک سامان پوریا خدائی</span>
          </p>
        </div>
      ) : (
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
              کدپستی{" "}
            </label>
            <input
              type="number"
              {...register("post")}
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
            <p>قیمت : {query.show_price} تومان</p>
          </div>
          <button
            type="submit"
            className="w-36 my-8 py-3 bg-red-400 text-white rounded-lg"
          >
            پرداخت آنلاین
          </button>
          <button
            onClick={() => setShow(true)}
            className="w-36 mb-8 py-3 bg-red-400 text-white rounded-lg"
          >
            پرداخت کارت به کارت
          </button>
        </form>
      )}
    </div>
  );
};
export default Payment;
