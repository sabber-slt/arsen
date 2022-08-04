import type { NextPage } from "next";
import Card from "../../components/products/Card";
import Search from "../../components/products/Search";
import { API_URL } from "../../hooks/useFetch";
import { ProductProps } from "../../types/products.types";

const Products: NextPage = () => {
  return (
    <div>
      <Search />
      <div className="py-16">{/* <Card data={items} /> */}</div>
    </div>
  );
};

export default Products;
