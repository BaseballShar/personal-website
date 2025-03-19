import "./Header.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="header-row">
      <Link to="/personal-website">
        <IoIosArrowBack className="header-icon" />
      </Link>
      <h1>{title || "Baseball's Place"}</h1>
      <div className="header-right">
        <a href="https://github.com/BaseballShar">
          <FaGithub className="header-icon" />
        </a>
        <a href="https://www.linkedin.com/in/baseball-chan-98b00923b/">
          <FaLinkedin className="header-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
