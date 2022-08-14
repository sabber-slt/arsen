import React from "react";
import { NextPage } from "next";
import Search from "../../components/products/Search";
import Login from "../../components/admin/Login";
import useAuth from "../../utils/useAuth";
import AdminHome from "../../components/admin/AdminHome";
import { useRouter } from "next/router";
import UpdateHome from "../../components/admin/UpdateHome";

const Admin: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  const { auth } = useAuth();
  return (
    <div>
      <Search />
      {auth ? (
        <UpdateHome
          id={query?.id as string}
          title1={query?.title as string}
          media1={query?.media as string}
        />
      ) : (
        <div className="my-36">
          <Login />
        </div>
      )}
    </div>
  );
};

export default Admin;
