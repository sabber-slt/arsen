import React from "react";
import { NextPage } from "next";
import Search from "../../components/products/Search";
import Login from "../../components/admin/Login";
import useAuth from "../../utils/useAuth";
import AdminHome from "../../components/admin/AdminHome";

const Admin: NextPage = () => {
  const { auth } = useAuth();
  return (
    <div>
      <Search />
      {auth ? (
        <AdminHome />
      ) : (
        <div className="my-36">
          <Login />
        </div>
      )}
    </div>
  );
};

export default Admin;
