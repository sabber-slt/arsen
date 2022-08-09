import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import Loading from "../../components/main/Loading";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";
import { API_URL } from "../../hooks/useFetch";
import { OfferProps } from "../../types/public.types";

type Props = {};

const Result = () => {
  const { query } = useRouter();
  const { data, isLoading } = useQuery<OfferProps[]>(
    ["xxx", query.name],
    async () => {
      const data = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Hasura-Role": "public",
        },
        body: JSON.stringify({
          query: `
        query MyQuery ($title:String){
                 products(where: {title: {_ilike:$title}}) {
                   brand
                   color1
                   color2
                   content
                   desc
                   id
                   media
                   media1
                   media2
                   media3
                   mojod
                   old_price
                   price
                   title
                 }
               }
               `,
          variables: {
            title: `%${query.name}%`,
          },
        }),
      });
      const json = await data.json();
      return json.data.products;
    }
  );
  if (isLoading) return <Loading />;
  console.log(data);
  return (
    <div>
      <Search />
      {data?.length! > 0 ? (
        <div className="py-16">
          <Card data={data!} />
        </div>
      ) : (
        <div className="h-[50vh] w-full flex flex-col items-center justify-center text-zinc-700">
          <h1>محصولی یافت نشد</h1>
        </div>
      )}
    </div>
  );
};

export default Result;
