import type { NextPage } from "next";
import Image from "next/image";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Discount from "../components/home/Discount";
import Subs from "../components/home/Subs";
import TopProducts from "../components/home/TopProducts";
import Loading from "../components/main/Loading";
import Search from "../components/products/Search";
import { API_URL } from "../hooks/useFetch";
import { MainProps } from "../types/public.types";

const Home: NextPage<{ data: MainProps }> = ({ data }) => {
  if (!data) return <Loading />;
  const discount = data?.products?.filter(
    (item) => item.category === "takhfif"
  );
  const topProducts = data?.products?.filter((item) => item.category === "top");
  console.log(data?.public?.slice(0, 6));
  return (
    <div>
      <Search />
      <Carousel data={data?.public?.slice(6, 10)} />
      <Discount attributes={discount} />
      <Categories attributes={data?.public?.slice(0, 6)} />
      <TopProducts data={topProducts} />
      <Subs />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://arsenmobile1.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        products(where: {category: {_is_null: false}}) {
          brand
          brand_child
          category
          color
          content
          desc
          id
          media
          media1
          media2
          old_price
          price
          title
          type
          use
        }
        public(order_by: {id: asc}) {
          content
          id
          media
          title
        }
      }  
      `,
    }),
  });
  const data = await response.json();
  return {
    props: {
      data: data?.data,
    },
    revalidate: 30,
  };
};
