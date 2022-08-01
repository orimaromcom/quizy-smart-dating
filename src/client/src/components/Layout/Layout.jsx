import NavbarConnector from "../Navbar/navbar-connector";
import ResponsiveAppBar from "../Userbar/Userbar"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
     <ResponsiveAppBar/>
      <Outlet />
      <NavbarConnector />
    </>
  );
}
