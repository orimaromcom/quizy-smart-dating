import NavbarConnector from "../Navbar/navbar-connector";
import AppBarConnector from "../AppBarComponent/app-bar-connector";
import HeartLoaderConnector from "../HeartLoader/heart-loader-connector";
import { Outlet } from "react-router-dom";
import ToasterConnector from "../Toaster/toaster-connector";

export default function Layout({ isLoading }) {
  return (
    <>
      <AppBarConnector />
      <ToasterConnector />
      {isLoading ? <HeartLoaderConnector /> : <Outlet />}
      <NavbarConnector />
    </>
  );
}
