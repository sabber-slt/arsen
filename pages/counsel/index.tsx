import React from "react";
import { useForm } from "react-hook-form";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";
import { ProTypes } from "../../types/public.types";

type Props = {
  brand_child: string;
  price: string;
  use: string;
  type: string;
};

const Filter = () => {
  const [loading, setIsLoading] = React.useState(false);
  const [card, setCard] = React.useState<ProTypes[] | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  const onSubmit = async (data: Props) => {
    setIsLoading(true);
    const gte = `${data.price.split("-")[0].slice(0, 2)}00000`;
    const lte = `${data.price.split("-")[0].slice(2, 4)}00000`;
    console.log(lte);
    const response = await fetch("https://arsenmobile1.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
        query MyQuery( $gte: Int, $lte: Int, $use: String, $type: String) {
          products(where: {price: {_gte: $gte, _lte: $lte},use: {_eq: $use}, type: {_eq: $type}}) {
            id
            brand
            brand_child
            category
            color
            content
            desc
            media
            media1
            media2
            old_price
            price
            title
            type
            use
            show_price
          }
        }

        `,
        variables: {
          gte: gte === "000000" ? 500000 : parseInt(gte),
          lte: parseInt(lte),
          use: data.use,
          type: data.type,
        },
      }),
    });
    const json = await response.json();
    if (json.data.products.length > 0) {
      setCard(json.data.products);
    } else {
      setCard(null);
    }
    setIsLoading(false);
  };

  console.log(card);
  return (
    <>
      <Search />
      {card !== null ? (
        <div className="my-16">
          <Card data={card!} />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <form
            className="my-8 h-96 flex flex-col items-center justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {loading ? (
              <h3 className="text-zinc-700 text-center">
                ???? ?????? ???????????????? ?????????????? ???????? ?????? ????????
              </h3>
            ) : (
              <>
                <div className="text-zinc-700">
                  <p>???????? ?????????? ?????????? ????????</p>
                  <select
                    className="w-80 h-10 px-5 bg-slate-400 text-white"
                    {...register("price")}
                  >
                    <option value="0010">?????? - ??????????????????</option>
                    <option value="1015">?????????????????? - ??????????????????</option>
                    <option value="1520">?????????????????? - ??????????????????</option>
                    <option value="2030">?????????????????? - ??????????????????</option>
                    <option value="3040">?????????????????? - ??????????????????</option>
                    <option value="4050">?????????????????? - ??????????????????</option>
                    <option value="5060">?????????????????? - ??????????????????</option>
                  </select>
                </div>

                <div className="text-zinc-700 mt-4">
                  <p>?????? ?????????? ???? ???????????? ????</p>
                  <select
                    className="w-80 h-10 px-5 bg-slate-400 text-white"
                    {...register("type")}
                  >
                    <option value="?????????????? ????????">?????????????? ????????</option>
                    <option value="?????????????? ?????? ??????????">?????????????? ?????? ??????????</option>
                    <option value="???????? ?????? ?????? ????????">
                      {" "}
                      ???????? ?????? ?????? ????????
                    </option>
                    <option value="?????????????? ?????? ????????????(????????????)">
                      ?????????????? ?????? ????????????(????????????)
                    </option>
                  </select>
                </div>
                <div className="text-zinc-700 mt-4">
                  <p>???????????? ?????????? ???? ???????????? ????</p>
                  <select
                    className="w-80 h-10 px-5 bg-slate-400 text-white"
                    {...register("use")}
                  >
                    <option value="????????">????????</option>
                    <option value="????????????">????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="????????????">????????????</option>
                  </select>
                </div>

                <div className="flex flex-col mt-5 items-center w-full">
                  <button
                    type="submit"
                    className="bg-zinc-700 px-5 py-2 rounded-lg"
                  >
                    ????????????
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default Filter;
