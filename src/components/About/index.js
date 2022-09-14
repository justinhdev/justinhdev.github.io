import "./index.scss";
import Sidebar from "../Sidebar";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import TagCloud from "../Skills";
import Particles from "../Particle/index2"

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

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skillsArray = [
    "M",
    "y",
    " ",
    "S",
    "k",
    "i",
    "l",
    "l",
    "s",
    " ",
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
      radius: 400,
    });
  }, []);

  return (

    
    <div className="about-page">
      <Particles/>
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
        </div>
        <div className="text-wrapper">
          <p>I am a newly graduated software engineer from Texas State University.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
