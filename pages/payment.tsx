/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Search from "../components/products/Search";
import { API_URL0 } from "../hooks/useFetch";
import useUser from "../utils/useUser";

type FormData = {
  name: string;
  phone: string;
  address: string;
  post: string;
  code: string;
};

const Payment = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [info, setInfo] = useState("");
  const { query } = router;
  const { setUser } = useUser();
  const { register, handleSubmit } = useForm<FormData>();
  const onClick = async (data: FormData) => {
    setLoad(true);
    const { name, phone, address, post, code } = data;
    const res1 = await fetch(`${API_URL0}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
        query MyQuery($id: Int) {
          products(where: {id: {_eq: $id}}) {
            code
            takhfif
          }
        }
        `,
        variables: {
          id: parseInt(query.id as string),
        },
      }),
    });
    const data1 = await res1.json();
    console.log(data1);
    if ((data1 && data1.data.products[0].code === code) || code === "") {
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
          price:
            data1.data.products[0].code === code
              ? parseInt(query.price as string) - data1.data.products[0].takhfif
              : query.price,
          title: query.title || "",
        }),
      });
      const result = await res.json();
      if (result.status === "success") {
        setUser(user);
        router.push(`${result.url}`);
      }
    } else {
      setInfo("???? ?????????? ???????????? ??????");
    }
    setLoad(false);
  };
  return (
    <div className="relative text-zinc-700 bg-white w-full h-full">
      <Search />

      {show ? (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center">
          <p className="text-center px-5">
            ???? ???????? ?????????? ???? ???????? ?????????? ???? ???????? ???????? ???? ???????? ???????? ???? ???? ??????????
            ???????????? ?????????? ???????????? ???? ???? ?????????? ???????????? ?????? ???? ?????????? 09034060388
            ?????????? ????????????
          </p>
          <p className="text-rose-500 mt-5">
            6362-1411-1405-3185{" "}
            <span className="text-zinc-500">???????? ?????????? ?????????? ??????????</span>
          </p>
          <p className="text-rose-500 mt-5">
            6219-8610-4913-6111{" "}
            <span className="text-zinc-500">???????? ?????????? ?????????? ??????????</span>
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onClick)}
          className="h-full vstack justify-center mt-16"
        >
          {load ? (
            <div className="w-full h-screen fixed bg-black flex flex-col items-center justify-center z-50 top-0">
              <p className="z-50 text-white">???? ?????? ?????????? ????????????...</p>
            </div>
          ) : (
            <>
              <div className="vstack">
                <label className="" htmlFor="name">
                  ?????? ?? ?????? ????????????????{" "}
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-64 h-10 bg-slate-200 rounded-lg pr-2"
                />
              </div>
              <div className="vstack">
                <label className="mt-5" htmlFor="name">
                  ?????????? ????????????{" "}
                </label>
                <input
                  type="number"
                  {...register("phone")}
                  className="w-64 h-10 bg-slate-200 rounded-lg pr-3"
                />
              </div>
              <div className="vstack">
                <label className="mt-5" htmlFor="name">
                  ????????????{" "}
                </label>
                <input
                  type="number"
                  {...register("post")}
                  className="w-64 h-10 bg-slate-200 rounded-lg pr-3"
                />
              </div>
              <div className="vstack">
                <label className="mt-5" htmlFor="name">
                  ????????{" "}
                </label>
                <textarea
                  {...register("address")}
                  className="w-64 h-36 bg-slate-200 rounded-lg pr-3"
                />
              </div>
              <div className="vstack">
                <label className="" htmlFor="name">
                  ???? ?????????? (??????????????){" "}
                </label>
                <input
                  type="text"
                  {...register("code")}
                  className="w-64 h-10 bg-slate-200 rounded-lg pr-2"
                />
                <p className="text-red-400">{info}</p>
              </div>
              <div className="vstack">
                <img alt="" src={`${query.media}`} width={200} height={200} />
                <p>{query.title}</p>
                <p>?????????? : ???? ??????</p>
                <p>???????? : {query.show_price} ??????????</p>
              </div>
              <button
                type="submit"
                className="w-36 my-8 py-3 bg-red-400 text-white rounded-lg"
              >
                ???????????? ????????????
              </button>
              <button
                onClick={() => setShow(true)}
                className="w-36 mb-8 py-3 bg-red-400 text-white rounded-lg"
              >
                ???????????? ???????? ???? ????????
              </button>
            </>
          )}
        </form>
      )}
    </div>
  );
};
export default Payment;
