import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import FYP from "./pages/FYP/FYP";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="fyp" element={<FYP />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
