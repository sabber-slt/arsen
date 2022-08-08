import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  name: string | null;
  phone: string | null;
  address: string;
  title: string | string[] | undefined;
  price: string | string[] | undefined;
  productId: string | string[] | undefined;
  post: string | string[] | undefined;
}

interface UserState {
  user: User;

  setUser: (user: User) => void;
  resetUser: () => void;
}

const useUser = create<UserState>()(
  devtools(
    persist((set) => ({
      user: {
        name: "",
        phone: "",
        address: "",
        title: "",
        price: "",
        productId: "",
        post: "",
      },
      setUser: (user: User) => {
        set(() => ({ user }));
      },
      resetUser: () => {
        set(() => ({
          user: {
            name: null,
            phone: null,
            address: "",
            title: "",
            price: "",
            productId: "",
            post: "",
          },
        })),
          {
            name: "userAuth",
          };
      },
    }))
  )
);

export default useUser;
