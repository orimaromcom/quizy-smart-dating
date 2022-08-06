import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import NavbarConnector from "../Navbar/navbar-connector";
import AppBarConnector from "../AppBarComponent/app-bar-connector";
import HeartLoader from "../HeartLoader/HeartLoader";
import ToasterConnector from "../Toaster/toaster-connector";

export default function Layout({ isLoading }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/quiz");
    }
  }, []);

  return (
    <>
      <AppBarConnector />
      <ToasterConnector />
      {isLoading ? <HeartLoader /> : <Outlet />}
      <NavbarConnector />
    </>
  );
}
