import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Payment: NextPage = () => {
  const { query } = useRouter();
  console.log(query);
  const { register, handleSubmit } = useForm();

  const onClick = async (data: any) => {};
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 md:w-[50vw] h-96 md:h-[50vh] vstack justify-around bg-zinc-700 rounded-lg">
        <p>
          {query?.status !== "m"
            ? "پرداخت شما با موفقیت انجام شد"
            : "عملیات موفقیت آمیز نبود"}{" "}
        </p>
        <div className="vstack">
          <p>شماره سفارش: </p>
          <p>{query?.id}</p>
        </div>
        <div>
          <p>پیگیری سفارش: </p>
          <p>091211111111</p>
        </div>
        <Link href={"/"}>
          <a className="px-5 py-3 bg-amber-400 rounded-lg text-zinc-700">
            بازگشت به صفحه اصلی
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Payment;
