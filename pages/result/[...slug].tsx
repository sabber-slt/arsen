/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import { useRouter } from "next/router";
import useUser from "../../utils/useUser";
import { handlePay } from "../../hooks/useMutation";

const Payment: NextPage = () => {
  const { query } = useRouter();
  const router = useRouter();
  const { user, resetUser } = useUser();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 md:w-[50vw] h-96 md:h-[50vh] vstack justify-around bg-zinc-700 rounded-lg">
        <p>
          {query?.Status === "OK"
            ? "پرداخت شما با موفقیت انجام شد"
            : "عملیات موفقیت آمیز نبود"}{" "}
        </p>
        <p> از این که به ما اعتماد کرده اید سپاس گذاریم</p>
        <div className="vstack">
          <p>شماره سفارش: </p>
          <p className="text-xs">{query?.Authority}</p>
        </div>
        <div>
          <p>پیگیری سفارش: </p>
          <p>091211111111</p>
        </div>

        <button
          onClick={() => {
            handlePay(
              user.address,
              user.name,
              user.phone,
              user.price,
              user.productId,
              user.title,
              query.Status,
              query.Authority,
              user.post
            );
            resetUser();
            router.push("/");
          }}
          className="px-5 py-3 bg-amber-400 rounded-lg text-zinc-700"
        >
          تایید نهایی و بازگشت
        </button>
      </div>
    </div>
  );
};
export default Payment;
