import type { NextPage } from "next";
import Categories from "../components/home/Categories";
import Discount from "../components/home/Discount";
import LandScreen from "../components/home/LandScreen";
import TopProducts from "../components/home/TopProducts";
import { API_URL } from "../hooks/useFetch";
import { HomeProps } from "../types/public.types";

const Home: NextPage<{ data: HomeProps[] }> = ({ data }) => {
  const items = data?.sort((a, b) => a.id - b.id);

  return (
    <div>
      <LandScreen attributes={items?.[0].attributes} />
      <Discount attributes={items.slice(1, 4)} />
      <Categories attributes={items.slice(4, 8)} />
      <TopProducts />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/publics`);
  const data = await res.json();

  return {
    props: {
      data: data?.data,
    },
  };
};
