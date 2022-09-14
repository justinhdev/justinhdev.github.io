import "./App.scss";

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import ProjectPage from "./components/ProjectPage"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Routes>     
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
