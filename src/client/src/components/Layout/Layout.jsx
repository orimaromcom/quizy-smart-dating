import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ fetchNewQuestions }) {
  useEffect(() => {
    fetchNewQuestions();
  }, []);
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
