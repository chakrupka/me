import { Link, useLocation } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function Projects() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col items-center justify-center dark:bg-black">
      <Link
        to="/"
        state={{ scrollProgress: location.state?.scrollProgress }}
        className="absolute top-10 left-10 text-xl dark:text-white"
      >
        ← back
      </Link>
      <div className="flex w-3/4 flex-col items-start justify-center gap-7 pt-15 sm:w-fit sm:pt-0">
        <h2 className="mt-4 -mb-2 w-full text-3xl underline sm:-mt-20 dark:text-white">
          Solo Projects
        </h2>
        {projectsData
          .filter((project) => project.effort === "solo")
          .map((project, ind) => (
            <Link
              to={`./${project.id}`}
              key={ind}
              className="flex flex-col"
              state={{ scrollProgress: location.state?.scrollProgress }}
            >
              <h2 className="text-xl sm:text-2xl dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">
                {project.subtitle}
              </p>
            </Link>
          ))}
        <h2 className="mt-5 -mb-2 w-full text-3xl underline dark:text-white">
          Team Projects
        </h2>
        {projectsData
          .filter((project) => project.effort === "team")
          .map((project, ind) => (
            <Link
              to={`./${project.id}`}
              key={ind}
              className="flex flex-col"
              state={{ scrollProgress: location.state?.scrollProgress }}
            >
              <h2 className="text-xl sm:text-2xl dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">
                {project.subtitle}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Projects;
