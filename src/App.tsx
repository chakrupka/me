import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
