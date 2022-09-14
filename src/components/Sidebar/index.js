import { NavLink } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  
  return (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faTerminal} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
           <a target="_blank" rel='noreferrer' href=''>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
           </a>
        </li>
        <li>
           <a target="_blank" rel='noreferrer' href='https://github.com/justinhdev'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
           </a>
        </li>
    </ul>
  </div>
  )
}

export default Sidebar;
