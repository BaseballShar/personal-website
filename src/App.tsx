import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import FYP from "./pages/FYP/FYP";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="fyp" element={<FYP />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
