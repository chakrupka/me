import { Link, useLocation } from "react-router-dom";

function ProjectDetail() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col items-center justify-center pt-20 dark:bg-black">
      <Link
        to="/projects"
        state={{ scrollProgress: location.state?.scrollProgress }}
        className="absolute top-10 left-10 text-xl dark:text-white"
      >
        ← back
      </Link>
      <p>Hello</p>
    </div>
  );
}

export default ProjectDetail;
