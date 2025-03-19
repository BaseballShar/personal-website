import "./Project.css";
import moment from "moment";
import { colors } from "../../style";

import bigTwoCover from "../../assets/big-two.png";
import fypCover from "../../assets/fyp.png";
import rpgCover from "../../assets/rpg.png";
import shellCover from "../../assets/shell.png";
import timetableCover from "../../assets/timetable.jpg";
import weatherCover from "../../assets/weather.png";
import { useNavigate } from "react-router";

interface Project {
  title: string;
  subtitle: string;
  dateStart: moment.Moment;
  dateEnd: moment.Moment;
  img: string;
  path?: string;
}

const projectsData: Project[] = [
  {
    title: "Weather Information System",
    subtitle: "React, Next.js",
    dateStart: moment("20240601"),
    dateEnd: moment("20240601"),
    img: weatherCover,
  },
  {
    title: "Final Year Project",
    subtitle: "Cross platform financial manager",
    dateStart: moment("20230901"),
    dateEnd: moment("20240401"),
    img: fypCover,
    path: "fyp",
  },
  {
    title: "Timetable Management System",
    subtitle: "Python, MySQL",
    dateStart: moment("20221001"),
    dateEnd: moment("20221101"),
    img: timetableCover,
  },
  {
    title: "Linux Shell",
    subtitle: "C",
    dateStart: moment("20221001"),
    dateEnd: moment("20221001"),
    img: shellCover,
  },
  {
    title: "BigTwo Game",
    subtitle: "Java",
    dateStart: moment("20211001"),
    dateEnd: moment("20211201"),
    img: bigTwoCover,
  },
  {
    title: "Text based RPG Game",
    subtitle: "C++",
    dateStart: moment("20210301"),
    dateEnd: moment("20210401"),
    img: rpgCover,
  },
];

const ProjectCell = ({ content }: { content: Project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="project-cell"
      onClick={() => {
        navigate(content?.path || "");
      }}
      style={{ backgroundColor: colors.secondary }}
    >
      <img className="project-img" src={content.img} />
      <p className="project-title">{content.title}</p>
      <p className="project-subtitle">{content.subtitle}</p>
      <p className="project-subtitle">
        {content.dateStart.isSame(content.dateEnd)
          ? content.dateStart.format("MMM YYYY")
          : content.dateStart.format("MMM YYYY") +
            " - " +
            content.dateEnd.format("MMM YYYY")}
      </p>
    </div>
  );
};

export const ProjectList = () => {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <div className="project-grid">
        {projectsData.map((item) => (
          <ProjectCell content={item} />
        ))}
      </div>
    </div>
  );
};
