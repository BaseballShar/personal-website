import { useTheme } from "../../contexts/ThemeContext";
import "./MainPane.css";

interface MainPaneProps {
  children: React.ReactNode;
}

const MainPane: React.FC<MainPaneProps> = ({ children }) => {
  const theme = useTheme();
  return <main id={theme}>{children}</main>;
};

export default MainPane;
