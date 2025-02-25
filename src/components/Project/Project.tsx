import weatherPanel from "../../assets/weather-panel.png";
import { colors } from "../../style";
import "./Project.css";

const projectsData = [
  {
    title: "Weather Information System",
    subtitle: "React, Next.js",
    img: weatherPanel,
  },
];

const Project = () => {
  const content = {
    title: "Weather Information System",
    subtitle: "React, Next.js",
    img: weatherPanel,
  };
  return (
    <div className="project-cell" style={{ backgroundColor: colors.secondary }}>
      <img className="project-img" src={weatherPanel} />
      <p className="project-title">{content.title}</p>
      <p className="project-subtitle">{content.subtitle}</p>
    </div>
  );
};

export const ProjectList = () => {
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
