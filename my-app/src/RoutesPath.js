import React from "react";
import Home from "./pages/Home/Home";
import Error from "./pages/404/404";
import Account from "./pages/Account/account";
import SignIn from "./pages/Sign-in/sign-in";
import { Routes, Route, Navigate } from "react-router-dom";

const RoutesPath = () => {
  return (
    <Routes>
      <Route element={<Navigate replace to="/home" />} path="/" />
      <Route path="home" element={<Home />} />
      <Route path="account" element={<Account />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesPath;
