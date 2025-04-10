import { useTheme } from "../../contexts/ThemeContext";
import Quote from "../Quote/Quote";
import "./MainPane.css";

interface MainPaneProps {
  children: React.ReactNode;
}

const MainPane: React.FC<MainPaneProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <main id={theme}>
      {children}
      <Quote />
    </main>
  );
};

export default MainPane;
