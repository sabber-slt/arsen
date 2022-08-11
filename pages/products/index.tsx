import type { NextPage } from "next";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";
import { API_URL, fetchAllProducts } from "../../hooks/useFetch";

import { GetStaticProps } from "next";
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { ProTypes } from "../../types/public.types";
import Loading from "../../components/main/Loading";

const Products: NextPage = () => {
  const { data, isLoading, error }: UseBaseQueryResult<ProTypes[]> = useQuery<
    ProTypes[],
    Error
  >(["products"], fetchAllProducts);
  if (isLoading) return <Loading />;
  if (error) return <div></div>;
  console.log(data);
  return (
    <div>
      <Search />
      <h1 className="text-zinc-700 text-xl p-7">محصولات آرسن</h1>
      <div className="py-16">
        <Card data={data!} />
      </div>
    </div>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ProTypes[]>(["products"], fetchAllProducts);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 30,
    },
  };
};
