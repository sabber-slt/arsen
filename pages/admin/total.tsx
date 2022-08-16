import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Login from "../../components/admin/Login";
import Search from "../../components/products/Search";
import { API_URL0, fetchHome } from "../../hooks/useFetch";
import { MainProps } from "../../types/public.types";
import useAuth from "../../utils/useAuth";
import { RiDeleteBin5Line } from "react-icons/ri";
import Loading from "../../components/main/Loading";

const ShegeftAngiz: React.FC = () => {
  const { auth } = useAuth();
  const { data, isLoading }: UseBaseQueryResult<MainProps> =
    useQuery<MainProps>(["publr"], async () => {
      const x = await fetch(`${API_URL0}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Hasura-Role": "public",
        },
        body: JSON.stringify({
          query: `
                query MyQuery {
                    products {
                      title
                      media
                      id
                    }
                    other {
                      id
                      media
                      title
                    }
                  }
                  `,
        }),
      });
      const json = await x.json();
      return json?.data;
    });
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);

  const deletePro = async (id: number) => {
    console.log(id);
    const res = await fetch(`${API_URL0}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
            mutation MyMutation($id: Int) {
                delete_products(where: {id: {_eq: $id}}) {
                  returning {
                    id
                  }
                }
              }
              
            `,
        variables: {
          id: id,
        },
      }),
    });
    const json = await res.json();
    console.log(json);
  };
  const deleteOther = async (id: number) => {
    console.log(id);
    const res = await fetch(`${API_URL0}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
            mutation MyMutation($id: Int) {
                delete_other(where: {id: {_eq: $id}}) {
                  returning {
                    id
                  }
                }
              }
              
            `,
        variables: {
          id: id,
        },
      }),
    });
    const json = await res.json();
    console.log(json);
  };
  return (
    <div>
      <Search />
      {auth ? (
        <div className="w-full flex flex-col items-center my-16">
          <div className="w-fit grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-center">
            {data?.products.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-row items-center justify-between text-zinc-700 bg-gray-200 px-3"
              >
                <div className="flex flex-col w-1/2 justify-around h-48">
                  <p className="">{item.title}</p>

                  <RiDeleteBin5Line
                    onClick={() => deletePro(item.id)}
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-end">
                  <Image
                    src={item.media as string}
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
              </div>
              // </Link>
            ))}

            {data?.other.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-row items-center justify-between text-zinc-700 bg-gray-200 px-3 mt-5"
              >
                <div className="flex flex-col w-1/2 justify-around h-48">
                  <p className="">{item.title}</p>

                  <RiDeleteBin5Line
                    onClick={() => deleteOther(item.id)}
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-end">
                  <Image
                    src={item.media as string}
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
              </div>
              // </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="my-36">
          <Login />
        </div>
      )}
    </div>
  );
};

export default ShegeftAngiz;
