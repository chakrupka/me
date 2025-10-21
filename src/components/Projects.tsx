import { Link, useLocation } from "react-router-dom";

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
      <h1 className="w-2/3 pb-5 text-center text-2xl dark:text-white">
        projects
      </h1>
      <p className="w-2/3 text-center text-xl dark:text-white">
        on{" "}
        <a
          href="https://www.github.com/chakrupka"
          className="text-black hover:underline dark:text-white"
        >
          github
        </a>
      </p>
    </div>
  );
}

export default Projects;
