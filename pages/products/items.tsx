import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { OfferProps } from "../../types/public.types";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";

type Props = {};

const Items = () => {
  const router = useRouter();
  const brand = router.query.brand as string;
  const type = router.query.type as string;
  const color1 = router.query.color1 as string;
  const use = router.query.use as string;
  console.log(brand, type, color1, use);
  const { data, isLoading } = useQuery<OfferProps[]>(
    ["item", brand, type, color1, use],
    () => fetchFilters(brand, type, color1, use)
  );
  if (isLoading) {
    return <h1>sasasa</h1>;
  }
  console.log(data);
  return (
    <>
      <Search />
      {data?.length! > 0 ? (
        <>
          <div className="my-24">
            <Card data={data!} />
          </div>
        </>
      ) : (
        <div className="h-[70vh] w-full flex flex-col items-center justify-center">
          <p className="text-zinc-700 text-xl">کالای مورد نظر شما یافت نشد.</p>
        </div>
      )}
    </>
  );
};

export default Items;
