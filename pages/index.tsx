import type { NextPage } from "next";
import Categories from "../components/home/Categories";
import Discount from "../components/home/Discount";
import LandScreen from "../components/home/LandScreen";
import Subs from "../components/home/Subs";
import TopProducts from "../components/home/TopProducts";
import { API_URL } from "../hooks/useFetch";
import { HomeProps, MainProps } from "../types/public.types";

const Home: NextPage<{ data: MainProps }> = ({ data }) => {
  // const items = data?.sort((a, b) => a.id - b.id);
  console.log(data);
  return (
    <div>
      <LandScreen
        content={data?.public?.[0].content}
        title={data?.public?.[0].title}
      />
      <Discount attributes={data?.shegeftAngiz} />
      <Categories attributes={data?.public.slice(1, 5)} />
      <TopProducts />
      <Subs />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        public(distinct_on: id) {
          title
          media
          id
          content
        }
        shegeftAngiz {
          content
          desc
          id
          media
          media1
          media2
          media3
          old_price
          price
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
  };
};
