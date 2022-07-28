import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const USER_ID = 1;

export default function Layout({ fetchNewQuestions, USER_ID }) {
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
