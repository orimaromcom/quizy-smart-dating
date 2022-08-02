import NavbarConnector from "../Navbar/navbar-connector";
import ResponsiveAppBar from "../Userbar/Userbar";
import { Outlet } from "react-router-dom";
import ToasterConnsector from "../Toaster/toaster-connsector";

export default function Layout() {
  return (
    <>
      <ResponsiveAppBar />
     {/*  <ToasterConnsector /> */}
      <Outlet />
      <NavbarConnector />
    </>
  );
}
