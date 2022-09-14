import "./index.scss";
import Sidebar from "../Sidebar";
import Project from "../Projects";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Aos from "aos";
import image1 from "../../assets/images/cyberss.jpg";
import image2 from "../../assets/images/dumpsterfire.png";
import Particles from "../Particle/index1";

function ProjectPage() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projectArray = [
    "P",
    "r",
    "o",
    "j",
    "e",
    "c",
    "t",
    "s",
    " ",
    "i",
    "'",
    "v",
    "e",
    " ",
    "b",
    "e",
    "e",
    "n",
    " ",
    "w",
    "o",
    "r",
    "k",
    "i",
    "n",
    "g",
    " ",
    "o",
    "n",
    "."
  ];

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
        <AnimatedLetters
          letterClass={letterClass}
          strArray={projectArray}
          idx={1}
        />
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
            description="A reddit bot coded in python using PRAW API."
          />
        </a>
        <Project
          img=""
          description="In development!"
        />
        <Project img="" description="In development!" />
        <Project img="" description="In development!" />
        <Project img="" description="In development!" />
      </div>
      <div className="particle">
        <Particles />
      </div>
    </div>
  );
}

export default ProjectPage;
