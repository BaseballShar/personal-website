import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import FYP from "./pages/FYP/FYP";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="personal-website">
          <Route index element={<Home />} />
          <Route path="fyp" element={<FYP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
