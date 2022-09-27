import "./index.scss";
import Sidebar from "../Sidebar";
import Project from "../Projects";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Aos from "aos";
import image1 from "../../assets/images/cyberss.jpg";
import image2 from "../../assets/images/webpong.png";
import image3 from "../../assets/images/noteapp.png";
import image4 from "../../assets/images/githublogo.png";
import Particles from "../Particle/index2";

function ProjectPage() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projectArray = ["P", "r", "o", "j", "e", "c", "t", "s"];
  const iveArray = ["I", "'", "v", "e", " ", "b", "e", "e", "n"];
  const workingArray = ["w", "o", "r", "k", "i", "n", "g", " ", "o", "n", "."];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="project-page">
      <Sidebar />
      <h1 className="animate-project-text">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projectArray}
            idx={1}
          />
        </h1>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={iveArray}
            idx={1}
          />
        </h1>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={workingArray}
            idx={1}
          />
        </h1>
      </h1>

      <div data-aos="fade-down" className="spacer2 layer3"></div>
      <div data-aos="fade-up" className="spacer3 layer2"></div>
      <div data-aos="fade-in" className="project-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/justinhdev/Cyber-Transcriber"
        >
          <Project
            img={image1}
            description="Reddit Bot: Optical Character Recognition"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web-2pong.netlify.app/"
        >
          <Project
            img={image2}
            description="WebSocket-Pong: Online Multiplayer Game"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://flask-crud-note-app.herokuapp.com/"
        >
          <Project img={image3} description="To-Do App: Flask/SQLAlchemy note app" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/justinhdev"
        >
        <Project img={image4} description="Check out my GitHub to see my code!" />
        </a>
      </div>
      <div className="particle">
        <Particles />
      </div>
    </div>
  );
}

export default ProjectPage;
