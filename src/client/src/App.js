import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import QuizPage from "./routes/QuizPage";
import BrainMatesPage from "./routes/BrainMatesPage";
import StatisticPage from "./routes/StatisticPage";
import ProfilePage from "./routes/ProfilePage";

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
