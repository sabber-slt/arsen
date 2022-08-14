import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import React from "react";
import Login from "../../components/admin/Login";
import Loading from "../../components/main/Loading";
import Search from "../../components/products/Search";
import { API_URL0 } from "../../hooks/useFetch";
import { Sefareshat } from "../../types/public.types";
import useAuth from "../../utils/useAuth";

const Sales = () => {
  const { auth } = useAuth();
  const { data, isLoading }: UseBaseQueryResult<Sefareshat[]> = useQuery<
    Sefareshat[]
  >(["sefareshat"], async () => {
    const res = await fetch(`${API_URL0}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
                query MyQuery {
                    sefareshat(order_by: {id: desc}) {
                      address
                      authority
                      created_at
                      id
                      name
                      phone
                      post
                      price
                      productId
                      status
                      title
                    }
                  }
                  
                `,
      }),
    });
    const data = await res.json();
    return data.data.sefareshat;
  });
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div>
      <Search />
      {auth ? (
        <div className="w-full flex flex-col items-center">
          {data?.map((item) => (
            <div
              key={item.id}
              className="text-zinc-700 h-full w-80 bg-slate-200 mt-5 flex flex-col"
            >
              <p className="pr-3">title</p>
              <p className="pr-3 text-rose-500">{item.title}</p>
              <p className="pr-3">price</p>
              <p className="pr-3 text-rose-500">{item.price}</p>
              <p className="pr-3">status</p>
              <p className="pr-3 text-rose-500">{item.status}</p>
              <p className="pr-3">productId</p>
              <p className="pr-3 text-rose-500">{item.productId}</p>
              <p className="pr-3">name</p>
              <p className="pr-3 text-rose-500">{item.name}</p>
              <p className="pr-3">address</p>
              <p className="pr-3 text-rose-500">{item.address}</p>
              <p className="pr-3">phone</p>
              <p className="pr-3 text-rose-500">{item.phone}</p>
              <p className="pr-3">post code</p>
              <p className="pr-3 text-rose-500">{item.post}</p>
            </div>
          ))}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Sales;
