import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTitles } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { ProTypes } from "../../types/public.types";
import { useForm } from "react-hook-form";
import Search from "../../components/products/Search";
import Image from "next/image";
import { fetchItems } from "../../hooks/useMutation";
import Loading from "../../components/main/Loading";

interface Props {
  id: number;
}

const Compare = () => {
  const [show, setShow] = React.useState(false);
  const [info, setInfo] = React.useState<ProTypes[]>();
  const router = useRouter();
  const { query } = router;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  const onSubmit = async (data: Props) => {
    const res = await fetchItems(data.id);
    console.log(res);
    if (res) {
      setShow(true);
      setInfo(res);
    }
  };

  const { data, isLoading } = useQuery<{ title: string; id: number }[]>(
    ["compare"],
    fetchTitles
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(info);

  return (
    <>
      <Search />
      <div className="text-zinc-600">
        <div className="w-full flex flex-row items-center justify-center my-8">
          <div className="flex w-[48vw] flex-col items-center justify-center">
            <Image
              alt=""
              src={query?.media as string}
              width={150}
              height={150}
            />
            <p className="text-rose-400 h-5 border-dotted border-t-2 border-slate-600 w-2/3 text-center                                                      ">
              مشخصات
            </p>
            <p className="text-sm">{query?.title}</p>
            <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
              نوع
            </p>
            <p>{query?.type !== null ? query?.type : "---"}</p>
            <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
              کاربری
            </p>
            <p>{query?.use !== null ? query?.use : "---"}</p>
            <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
              جزئیات
            </p>
            <p className="text-xs whitespace-pre-line px-2">{query?.content}</p>
            <p className="text-rose-400 w-2/3 text-center border-dotted border-t-2 border-slate-600">
              قیمت
            </p>
            <p>{query?.price}</p>
          </div>
          {!show ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-1/2 flex-col items-center"
            >
              <select className="bg-slate-300 w-32" {...register("id")}>
                <option value="">انتخاب کنید</option>
                {data?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-red-600 rounded-md text-white px-3 my-3"
              >
                جستجو
              </button>
            </form>
          ) : (
            <div className="flex w-[48vw] flex-col items-center justify-center">
              <Image
                alt=""
                src={info?.[0]?.media as string}
                width={150}
                height={150}
              />
              <p className="text-rose-400 h-5 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
                مشخصات
              </p>
              <p className="text-sm">{info?.[0]?.title}</p>
              <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
                نوع
              </p>
              <p>{info?.[0]?.type !== null ? info?.[0]?.type : "---"}</p>
              <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
                کاربری
              </p>
              <p>{info?.[0]?.use !== null ? info?.[0]?.use : "---"}</p>
              <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
                جزئیات
              </p>
              <p className="text-xs whitespace-pre-line px-2">
                {info?.[0]?.content}
              </p>
              <p className="text-rose-400 border-dotted border-t-2 border-slate-600 w-2/3 text-center">
                قیمت
              </p>
              <p>{info?.[0]?.price}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Compare;
