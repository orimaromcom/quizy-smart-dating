import NavbarConnector from "../Navbar/navbar-connector";
import AppBar from "../AppBarComponent/AppBarConnector";
import { Outlet } from "react-router-dom";
import ToasterConnector from "../Toaster/toaster-connector";

export default function Layout() {
  return (
    <>
      <AppBar />
      <ToasterConnector />
      <Outlet />
      <NavbarConnector />
    </>
  );
}
