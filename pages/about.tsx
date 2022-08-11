import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { GetStaticProps } from "next";
import Image from "next/image";
import Loading from "../components/main/Loading";
import Search from "../components/products/Search";
import { fetchAbout } from "../hooks/useFetch";
import { AboutProps } from "../types/public.types";

const About = () => {
  const { data, isLoading }: UseBaseQueryResult<AboutProps> = useQuery<
    AboutProps,
    Error
  >(["about"], fetchAbout);
  if (isLoading) return <Loading />;

  return (
    <div>
      <Search />
      <div className="flex flex-col items-start w-full my-8 text-zinc-700">
        <h1 className="text-xl pr-3">{data?.title1}</h1>
        <p className="text-base px-5 py-2">{data?.content1}</p>
        <div className="w-full flex flex-col  items-center my-5">
          <div className="relative w-80 md:w-[50vw] h-96 flex ">
            <Image alt="" src={data?.media1 || ""} layout="fill" />
          </div>
        </div>
        <h1 className="text-xl pr-3">{data?.title2}</h1>
        <p className="text-base px-5 py-2">{data?.content2}</p>
        <div className="w-full flex flex-col  items-center my-5">
          <div className="relative w-80 md:w-[50vw] h-96 flex ">
            <Image alt="" src={data?.media2 || ""} layout="fill" />
          </div>
        </div>
        <h1 className="text-xl pr-3">{data?.title3}</h1>
        <p className="text-base px-5 py-2">{data?.content3}</p>
      </div>
    </div>
  );
};
export default About;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["about"], () => fetchAbout());
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
