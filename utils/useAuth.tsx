import create from "zustand";

interface UserState {
  auth: boolean;
  setAuth: (auth: boolean) => void;
}

const useAuth = create<UserState>()((set) => ({
  auth: false,

  setAuth: (auth: boolean) => {
    set(() => ({ auth }));
  },
}));

export default useAuth;
