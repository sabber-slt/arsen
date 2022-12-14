import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Loading from "../../components/main/Loading";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";
import { fetchProducts } from "../../hooks/useFetch";
import { ProTypes } from "../../types/public.types";

const Product = () => {
  const router = useRouter();
  const { query } = router;
  const { data, isLoading }: UseBaseQueryResult<ProTypes[]> = useQuery<
    ProTypes[],
    Error
  >(["pro", query.id], () => fetchProducts(`${query.id}`));
  if (isLoading) return <Loading />;

  console.log(data);
  return (
    <div>
      <Search />
      <div className="my-16">
        <Card data={data!} />
      </div>
    </div>
  );
};
export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const route = params?.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["pro", route], () =>
    fetchProducts(`${route}`)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
