import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../hooks/useFetch";

interface FormProps {
  phone: string;
}

const Subs: React.FC = () => {
  const [shown, setShown] = React.useState(false);
  const { register, handleSubmit } = useForm<FormProps>();
  const onSubmit = async (data: FormProps) => {
    setShown(true);
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
        mutation MyMutation($phone: String) {
          insert_magazine(objects: {phone: $phone}) {
            returning {
              phone
            }
            affected_rows
          }
        }
        
        `,
        variables: {
          phone: data.phone,
        },
      }),
    });
    const json = await res.json();
    console.log(json);
    setShown(false);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-around">
      <div className="my-10 w-full vstack h-full justify-center">
        <div className="relative w-screen md:w-96 h-96 bg-amber-400 rounded-md overflow-hidden">
          <Image
            alt=""
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1659555582/pexels-drew-williams-3568520_1_l18qpj.jpg"
            layout="fill"
            priority
            className="opacity-80"
          />
        </div>
        <div className="absolute z-50">
          <form
            className="vstack w-full justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {shown ? (
              <p>در حال ارسال ...</p>
            ) : (
              <>
                <label className="text-2xl" htmlFor="phone">
                  عضو خبرنامه آرسن شوید
                </label>
                <div>
                  <input
                    placeholder="شماره تلفن"
                    type="number"
                    className="px-3 w-80 h-12 mt-5 rounded-lg text-zinc-700"
                    {...register("phone")}
                  />
                </div>
              </>
            )}
            <button
              type="submit"
              className="px-5 py-2 mt-5 text-zinc-700 bg-amber-400 rounded-md"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
      <div className="flex w-full items-center justify-center my-5">
        <Link href={"/counsel"}>
          <a>
            <div className="relative flex flex-col items-center justify-center w-screen md:w-96 h-96 bg-amber-400 rounded-md overflow-hidden">
              <Image
                src={"/filter.jpeg"}
                alt=""
                layout="fill"
                style={{ opacity: 0.8 }}
              />
              <p className="z-50 absolute text-3xl">مشاوره خرید هدفون</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center my-5">
        <Link
          href={"https://www.4shared.com/mobile/_Wj8kWreea/Arsen_Mobile.html"}
        >
          <a className="text-black my-24">
            <div className="relative flex flex-col items-center justify-center w-screen md:w-96 h-96 bg-amber-400 rounded-md overflow-hidden">
              <Image
                src="https://res.cloudinary.com/djmmjcxxo/image/upload/v1660733298/pexels-deepanker-verma-1482061_i0tqhm.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                style={{ opacity: 0.8 }}
              />
              <p className="z-50 absolute text-3xl text-white text-center">
                دانلود اپلیکیشن اندروید آرسن موبایل
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Subs;

//https://www.4shared.com/mobile/_Wj8kWreea/Arsen_Mobile.html
