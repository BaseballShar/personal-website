import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="personal-website">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
