import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const Subs: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
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
          <label className="text-2xl" htmlFor="phone">
            عضو خبرنامه آرسن شوید
          </label>
          <div style={{ direction: "ltr" }}>
            <input
              placeholder="شماره تلفن"
              type="number"
              className="px-3 w-80 h-12 mt-5 rounded-lg text-zinc-700"
              {...register("phone")}
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 mt-5 text-zinc-700 bg-amber-400 rounded-md"
          >
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subs;
