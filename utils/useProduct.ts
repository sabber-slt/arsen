import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  name: string | null;
  phone: string | null;
  address: string;
  title: string | string[] | undefined;
  price: string | string[] | undefined;
  productId: string | string[] | undefined;
}

interface ProductState {
  product1: any;
  product2: any;

  setProduct1: (product1: any) => void;
  setProduct2: (product2: any) => void;
}

const useProduct = create<ProductState>()(
  devtools(
    persist((set) => ({
      product1: null,
      product2: null,
      setProduct1: (product1: any) => {
        set(() => ({ product1 }));
      },
      setProduct2: (product2: any) => {
        set(() => ({ product2 }));
      },
    }))
  )
);

export default useProduct;
