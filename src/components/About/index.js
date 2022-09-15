import "./index.scss";
import Sidebar from "../Sidebar";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import TagCloud from "../Skills";
import Particles from "../Particle/index2";
import Aos from "aos";

const Tags = [
  "JavaScript",
  "CSS",
  "HTML",
  "Vscode",
  "XD",
  "React",
  "Python",
  "Linux",
  "git",
  "Flutter",
  "Dart",
  "Firebase",
  "SASS",
  "JSON",
  "Figma",
];
var w = window.innerWidth;
if (w < 1200) {
  w = w * 0.5;
} else {
  w = 400;
}
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skillsArray = ["M", "y", " ", "S", "k", "i", "l", "l", "s"];
  const experienceArray = [
    "a",
    "n",
    "d",
    " ",
    "E",
    "x",
    "p",
    "e",
    "r",
    "i",
    "e",
    "n",
    "c",
    "e",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  useEffect(() => {
    TagCloud(".content", Tags, {
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 300,
      keep: true,
      radius: w,
    });
  }, []);

  return (
    <div className="about-page">
      <Particles />
      <div>
        <Sidebar />
      </div>
      <div className="spacer layer1-about"></div>
      <div className="content"></div>
      <div className="text-zone">
        <div className="animate-wrapper">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={1}
            />
          </h1>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
        </div>
        <div className="text-wrapper">
          <p className="first-list">
            Software engineer in Austin, TX. Proficient in:
            <ul>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Data Structures & Algorithm's</li>
            </ul>
            
          </p>
          <p className="second-list">
            Also familiar with full-stack web development:
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Javascript</li>
              <li>scss</li>
              <li>HTML</li>
              <li>css</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
