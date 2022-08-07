import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Search from "../../components/products/Search";
import { API_URL } from "../../hooks/useFetch";

type Props = {
  brand: string;
  type: string;
  color1: string;
  use: string;
};

const Filter = () => {
  const router = useRouter();
  const [loading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  const onSubmit = async (data: Props) => {
    setIsLoading(true);
    console.log(data);
    router.push({
      pathname: "/products/items",
      query: {
        brand: data.brand,
        type: data.type,
        color1: data.color1,
        use: data.use,
      },
    });
    setIsLoading(false);
  };

  return (
    <>
      <Search />
      <div className="w-full flex flex-col items-center justify-center">
        <form
          className="my-8 h-96 flex flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {loading ? (
            <h3 className="text-zinc-700 text-center">
              در حال بارگذاری اطلاعات لطفا صبر کنید
            </h3>
          ) : (
            <>
              <div>
                <select
                  className="w-80 h-10 px-5 bg-slate-400"
                  {...register("type")}
                >
                  <option value="">نوع محصول</option>
                  <option value="هدفون">هدفون</option>
                  <option value="هدست">هدست</option>
                  <option value="ایرپاد">ایرپاد</option>
                </select>
              </div>
              <div>
                <select
                  className="w-80 h-10 px-5 bg-slate-400 mt-4"
                  {...register("brand")}
                >
                  <option value="">برند</option>
                  <option value="انکر">انکر</option>
                  <option value="شیائومی">شیائومی</option>
                  <option value="باوین">باوین</option>
                  <option value="ریزر">ریزر</option>
                </select>
              </div>
              <div>
                <select
                  className="w-80 h-10 px-5 bg-slate-400 mt-4"
                  {...register("color1")}
                >
                  <option value="">رنگ</option>
                  <option value="سفید">سفید</option>
                  <option value="مشکی">مشکی</option>
                  <option value="طلایی">طلایی</option>
                </select>
              </div>
              <div>
                <select
                  className="w-80 h-10 px-5 bg-slate-400 mt-4"
                  {...register("use")}
                >
                  <option value="">کاربری</option>
                  <option value="ورزشی">ورزشی</option>
                  <option value="ضدآب">ضدآب</option>
                  <option value="معمولی">معمولی</option>
                </select>
              </div>
              <div className="flex flex-col mt-5 items-center w-full">
                <button
                  type="submit"
                  className="bg-zinc-700 px-5 py-2 rounded-lg"
                >
                  جستوجو
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Filter;
