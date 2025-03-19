import "./FYP.css";
import Header from "../../components/Header/Header";
import homeScreen from "../../assets/fyp/iOS/home.png";
import addScreen from "../../assets/fyp/iOS/add_empty.png";
import trendScreen from "../../assets/fyp/iOS/trend_predict.png";
import demoVideo from "../../assets/fyp/app_demo.mp4";

const Introduction = () => {
  return (
    <div>
      <h1>AI-integrated Financial Management Mobile Application</h1>
      <h2>Project Introduction</h2>
      <p>
        In this modern digital age, most daily transactions are electronic.
        People are less aware of their financial situation without the sense of
        spending real cash, possibly worsening their abilities to control their
        assets. This app aims to tackle this issue by providing an all-in-one
        platform to record and plan finances in a user-friendly interface.
        Combined with the potential of machine learning, users can predict their
        future spending with a number of regression models.
      </p>
      <p>
        This project is written in React Native for cross-platform compatibility
        and Express.js together with Retool for backend database integration.
      </p>
      <p>
        This app can add, display and search for past income and expense records
        with labels assigned to transactions, then predict using stored record
        data.
      </p>
    </div>
  );
};

const Methodology = () => {
  return (
    <div>
      <h2>Methodology</h2>
      <table>
        <tr>
          <td className="center">
            Frontend
            <br />
            (React Native)
          </td>
          <td>
            <ul>
              <li>
                Can deploy to both iOS and Android platform in one code base
              </li>
              <li>
                Provide native components for intuitive experience and
                outstanding performance
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="center">
            Backend
            <br />
            (Express JS)
          </td>
          <td>
            <ul>
              <li>Easy to set up server for connecting frontend and Retool</li>
              <li>Robust and minimal framework</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="center">
            Database
            <br />
            (Retool)
          </td>
          <td>
            <ul>
              <li>
                Complimentary SQL database with simple and user-friendly UI
              </li>
              <li>Singular remote database eliminates table conflicts</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="center">Regression models</td>
          <td>
            <ul>
              <li>
                Three regression models: Linear, Quadratic and Exponential for
                optimal prediction peformance in all trends
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

const Results = () => {
  return (
    <div>
      <h2>Final Results</h2>
      <table>
        <tr>
          <td className="center">Home Screen</td>
          <td>
            <ul>
              <li>Entry point to application</li>
              <li>Check for recent transactions and total balance</li>
              <li>Can sort or filter transactions by their attributes</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="center">Add Screen</td>
          <td>
            <ul>
              <li>
                Use to add a new income / expense transaction for tracking
              </li>
              <li>Support recurring transactions</li>
              <li>
                Can specify name, amount, time and category of transactions
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="center">Trend Screen</td>
          <td>
            <ul>
              <li>Use to prediction future spending based on stored record</li>
              <li>
                Can specify how long to project and what transaction attribute
                to apply
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

const Demo = () => {
  return (
    <>
      <div className="row-bar">
        <img className="phone" src={homeScreen} alt="Home Screen" />
        <img className="phone" src={addScreen} alt="Add Screen" />
        <img className="phone" src={trendScreen} alt="Trend Screen" />
      </div>

      <h2>Demo Video</h2>
      <div className="center">
        <video width="90%" controls>
          <source src={demoVideo} type="" />
        </video>
      </div>
    </>
  );
};

const Timeline = () => {
  return (
    <div>
      <h2>Project Timeline</h2>
      <table>
        <tr>
          <th>Completion Date</th>
          <th>Task</th>
        </tr>
        <tr>
          <td className="center" rowSpan={3}>
            Oct 2023
          </td>
          <td>Completion of system architecture design</td>
        </tr>
        <tr>
          <td>Completion of UI/UX design</td>
        </tr>
        <tr>
          <td>Development Environment Setup</td>
        </tr>
        <tr>
          <td className="center">Nov 2023</td>
          <td>Configuration of Retool (SQL)</td>
        </tr>
        <tr>
          <td className="center" rowSpan={2}>
            Dec 2023
          </td>
          <td>
            Partial Implementation of Home Screen
            <br />
            (Basic UI and Navigation Bar)
          </td>
        </tr>
        <tr>
          <td>Implementation of Add Screen</td>
        </tr>
        <tr>
          <td className="center">Jan 2024</td>
          <td>Added support for recurring records</td>
        </tr>
        <tr>
          <td className="center">Feb 2024</td>
          <td>
            Full implementation of Home Screen <br />
            (Filtering and Sorting)
          </td>
        </tr>
        <tr>
          <td className="center" rowSpan={2}>
            Mar 2024
          </td>
          <td>Implementation of regression models</td>
        </tr>
        <tr>
          <td>Implementation of Trend Screen</td>
        </tr>
        <tr>
          <td className="center" rowSpan={2}>
            Apr 2024
          </td>
          <td>Completion of testing and debugging</td>
        </tr>
        <tr>
          <td>Production of user demo videos</td>
        </tr>
      </table>
    </div>
  );
};

const Resources = () => {
  return (
    <div>
      <h2>Related Materials</h2>
      <ul>
        <li>
          <a href="https://github.com/yyorkchan/FYP">Source code</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1l1MLUw4H4fi6cmVdS-7jmmpdEOKG0tmx/view?usp=drive_link">
            Project Plan
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1R6OvkBDrDHmJE4_hhkPImZ3o_NI5oqLR/view?usp=drive_link">
            Interim Report
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1TA4Z-U3X-kzLljUKzm-gkTmD5lQKQTyj/view?usp=sharing">
            Final Report
          </a>
        </li>
      </ul>
    </div>
  );
};

const FYP = () => {
  return (
    <>
      <Header title="Final Year Project" />
      <Introduction />
      <Methodology />
      <Results />
      <Demo />
      <Timeline />
      <Resources />
    </>
  );
};

export default FYP;
