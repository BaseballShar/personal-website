import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ProjectList } from "./components/Project/Project";
import "./App.css";

const Introduction = () => {
  return (
    <div>
      <h1>Baseball Chan</h1>
      <p>Software Enginner</p>
      <p>
        I command computers to make my wish come true! (99% of the time I cry in
        debugging)
      </p>
    </div>
  );
};

const ContactList = () => {
  return (
    <div className="contact-list">
      <a href="https://github.com/BaseballShar">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/baseball-chan-98b00923b/">
        <FaLinkedin />
      </a>
      <a href="mailto:workingcth@gmail.com">
        <MdEmail />
      </a>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Introduction />
      <ContactList />
      <ProjectList />
    </>
  );
};

export default App;
