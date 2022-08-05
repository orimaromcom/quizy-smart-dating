import NavbarConnector from "../Navbar/navbar-connector";
import AppBarConnector from "../AppBarComponent/app-bar-connector";
import { Outlet } from "react-router-dom";
import ToasterConnector from "../Toaster/toaster-connector";

export default function Layout() {
  return (
    <>
      <AppBarConnector />
      <ToasterConnector />
      <Outlet />
      <NavbarConnector />
    </>
  );
}
