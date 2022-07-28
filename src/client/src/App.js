import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./routes/QuizPage";
import BrainmatesPage from "./routes/BrainmatesPage";
import AchievementsPage from "./routes/AchievementsPage";
import ProfilePage from "./routes/ProfilePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e42f45",
    },
    secondary: {
      main: "#7ca0e5",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="quiz" element={<QuizPage />} />
            <Route path="brainmates" element={<BrainmatesPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
