import type { NextPage } from "next";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";
import { API_URL } from "../../hooks/useFetch";
import { ProductProps } from "../../types/products.types";

const Products: NextPage<{ data: ProductProps[] }> = ({ data }) => {
  console.log(data);
  const items = data?.sort((a, b) => a.id - b.id);

  return (
    <div>
      <Search />
      <div className="py-16">
        <Card data={items} />
      </div>
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  return {
    props: {
      data: data?.data,
    },
  };
};
