import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  name: string;
  phone: string;
  address: string;
  title: string | string[] | undefined;
  price: string | string[] | undefined;
  productId: string | string[] | undefined;
}

interface UserState {
  user: User;

  setUser: (user: User) => void;
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
      },
      setUser: (user: User) => {
        set(() => ({ user }));
      },
      resetUser: () => {
        set(() => ({
          user: {
            name: "",
            phone: "",
            address: "",
            title: "",
            price: "",
            productId: "",
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
