import "./App.css";
import { ProjectList } from "./components/Project/Project";
import { Introduction } from "./components/Introduction/Introduction";

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <p>
        I was unfortunately enrolled into HKU in 2020, and somehow managed to
        graduate with flyingColours (const flyingColours: string = "First Class
        Honours")
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Introduction />
      <ProjectList />
      <Education />
    </>
  );
};

export default App;
