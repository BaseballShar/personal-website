import "./Header.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { useTheme, useToggleTheme } from "../../contexts/ThemeContext";

// Displays right justified buttons of contact
const ContactBtns = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <div className="btn-group">
      {theme === "light" ? (
        <FaMoon className="header-icon" onClick={toggleTheme} />
      ) : (
        <FaSun className="header-icon" onClick={toggleTheme} />
      )}
      <a href="https://github.com/BaseballShar">
        <FaGithub className="header-icon" />
      </a>
      <a href="https://www.linkedin.com/in/baseball-chan-98b00923b/">
        <FaLinkedin className="header-icon" />
      </a>
      <a href="mailto:workingcth@gmail.com">
        <MdEmail className="header-icon" />
      </a>
    </div>
  );
};

const Header = ({ hasBack, title }: { hasBack?: boolean; title: string }) => {
  const HeaderMobile = () => {
    return (
      <header className="mobile">
        <h1 className="align-center">{title || "Baseball's Place"}</h1>
        {hasBack ? (
          <div className="header-row">
            <Link to="/">
              <IoIosArrowBack className="header-icon" />
            </Link>
            <ContactBtns />
          </div>
        ) : (
          <ContactBtns />
        )}
      </header>
    );
  };

  const HeaderDesktop = () => {
    return (
      <header className="desktop header-row">
        {hasBack && (
          <Link to="/">
            <IoIosArrowBack className="header-icon" />
          </Link>
        )}
        <h1>{title || "Baseball's Place"}</h1>
        <ContactBtns />
      </header>
    );
  };

  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
