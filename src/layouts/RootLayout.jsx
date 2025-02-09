import React from "react";
import Navbar from "../sections/Navbar";
import { Outlet } from "react-router";
import Footer from "../sections/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
