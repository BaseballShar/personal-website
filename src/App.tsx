import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import weatherPanel from "./assets/weather-panel.png";

const colors = {
  alphaBlue: "#38a3a5",
  betaBlue: "#22577a",
  alphaGreen: "#c7f9cc",
  betaGreen: "#80ed99",
  gammaGreen: "#57cc99",
};

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

const Project = () => {
  const content = {
    title: "Weather Information System",
    subtitle: "React, Next.js",
    img: weatherPanel,
  };
  return (
    <div
      className="project-cell"
      style={{ backgroundColor: colors.gammaGreen }}
    >
      <img className="project-img" src={weatherPanel} />
      <p className="project-title">{content.title}</p>
      <p className="project-subtitle">{content.subtitle}</p>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <div className="project-grid">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
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
