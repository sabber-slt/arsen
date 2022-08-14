import { useForm } from "react-hook-form";
import React from "react";
import useAuth from "../../utils/useAuth";

type FormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const { setAuth } = useAuth();
  const [handleRegister, setHandleRegister] = React.useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onClick = (data: FormData) => {
    if (data.username === "admin" && data.password === "admin") {
      setAuth(true);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onClick)}
      className="flex flex-col items-center justify-center text-zinc-700"
    >
      <label htmlFor="username" className="w-72 text-right pb-2">
        نام کاربری
      </label>
      <input
        type="text"
        id="username"
        className="w-72 h-9 rounded-lg bg-gray-300"
        {...register("username")}
      />
      <label htmlFor="password" className="w-72 text-right pb-2 pt-4">
        رمز عبور
      </label>
      <input
        type="password"
        id="password"
        className="w-72 h-9 rounded-lg bg-gray-300"
        {...register("password")}
      />
      <button
        type="submit"
        className="w-28 h-12 bg-rose-400 rounded-md mt-7 text-gray-100"
      >
        ورود
      </button>
    </form>
  );
};
export default Login;
