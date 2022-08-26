import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import {faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.scss"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = [" ", "J", "u", "s", "t", "i", "n", "."]

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
           <span className={`${letterClass} _11 `}>H</span>
           <span className={`${letterClass} _12`}>i,</span>
           <br />
           <span className={`${letterClass} _13`}>I</span>
           <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15}/>
          <br />
        </h1>
        <h2>Software Engineer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>

  );
};

export default Home;
