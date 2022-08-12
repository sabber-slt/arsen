import type { NextPage } from "next";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Discount from "../components/home/Discount";
import Subs from "../components/home/Subs";
import TopProducts from "../components/home/TopProducts";
import Loading from "../components/main/Loading";
import Search from "../components/products/Search";
import { fetchHome } from "../hooks/useFetch";
import { MainProps } from "../types/public.types";

const Home: NextPage<{ data: MainProps }> = ({ data }) => {
  if (!data) return <Loading />;
  const discount = data?.products?.filter(
    (item) => item.category === "takhfif"
  );
  const topProducts = data?.products?.filter((item) => item.category === "top");

  return (
    <div>
      <Search />
      <Carousel data={data?.public?.slice(6, 10)} />
      <Discount attributes={discount} />
      <Categories attributes={data?.public?.slice(0, 4)} />
      <TopProducts data={topProducts} />
      <Subs />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await fetchHome();
  return {
    props: {
      data: data,
    },
    revalidate: 30,
  };
};
