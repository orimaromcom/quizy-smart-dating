import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({  }) {
  useEffect(() => {
  
  }, []);
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
