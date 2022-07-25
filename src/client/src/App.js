import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./routes/QuizPage";
import BrainmatesPage from "./routes/BrainmatesPage";
import AchievementsPage from "./routes/AchievementsPage";
import ProfilePage from "./routes/ProfilePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import LayoutConnector from "./components/Layout/layout-connector.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e42f45",
    },
    secondary: {
      main: "#7ca0e5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutConnector />}>
            <Route path="quiz" element={<QuizPage />} />
            <Route path="brain-mates" element={<BrainmatesPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
