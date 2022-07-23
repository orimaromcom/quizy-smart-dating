import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import QuizPage from "./routes/QuizPage";
import BrainMatesPage from "./routes/BrainMatesPage";
import StatisticPage from "./routes/StatisticPage";
import ProfilePage from "./routes/ProfilePage";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="quiz" element={<QuizPage />} />
          <Route path="brain-mates" element={<BrainMatesPage />} />
          <Route path="statistic" element={<StatisticPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
