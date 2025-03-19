import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Home.css";
import { ProjectList } from "./Project";

const Introduction = () => {
  return (
    <div>
      <h1>Baseball Chan</h1>
      <p>
        I am a software engineer. I co-developed a financial management mobile
        application as my final year project. Know some C and C++ enough to
        cause segmentation fault. Enslaved python to produce numerous neural
        networks. Public static void Java was certainly no chill. SELECT FROM
        MySQL where knowledge = intermediate.
      </p>
      <p>
        I genuinely despair Word in favour of LaTeX. I prefer swimming in my
        shell than interacting with a bloated GUI. Also, I use vim btw (no ARCH
        tho, what a sad story)!
      </p>
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

export const Home = () => {
  return (
    <>
      <Introduction />
      <ContactList />
      <ProjectList />
      <Education />
    </>
  );
};
