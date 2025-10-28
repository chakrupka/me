import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-10 flex h-full flex-col items-center justify-center sm:-mt-20 dark:bg-black">
      <Link
        to="/"
        state={{ scrollProgress: location.state?.scrollProgress }}
        className="absolute top-10 left-10 text-xl dark:text-white"
      >
        ← back
      </Link>
      <h1 className="w-2/3 pb-4 text-center text-2xl dark:text-white">
        About me
      </h1>
      <p className="w-4/5 max-w-[650px] text-center text-lg dark:text-white">
        I am a passionate software engineer currently living in New York City
        after graduating from Dartmouth College in June of 2025. I love tackling
        real-world problems with immediate use cases, and am always on the
        lookout for ways to broaden my skills. I am primarily a full-stack
        developer but have experience working with big data and machine
        learning. I adore clean, functional design and often find myself
        obsessing over the little details. Apart from coding, I take great
        pleasure in film, fashion, competitive video games, and the occasional
        run outdoors.
      </p>
      <h1 className="w-2/3 pt-8 pb-2 text-center text-2xl dark:text-white">
        More of me
      </h1>
      <div className="flex gap-2">
        <a
          href="https://github.com/chakrupka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer text-lg underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current dark:text-white"
        >
          GitHub
        </a>
        <p className="dark:text-white">•</p>
        <a
          href="https://linkedin.com/in/cha-krupka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer text-lg underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current dark:text-white"
        >
          LinkedIn
        </a>
        <p className="dark:text-white">•</p>
        <a
          href="https://letterboxd.com/ck238/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer text-lg underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current dark:text-white"
        >
          LetterBoxd
        </a>
        <p className="dark:text-white">•</p>
        <div className="relative">
          <button
            onClick={() => {
              navigator.clipboard.writeText("chakrupka238@gmail.com");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="mr-3 flex cursor-pointer text-lg underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current dark:text-white"
          >
            Email
          </button>
          {copied && (
            <span className="absolute -top-8 left-0 rounded bg-gray-800 px-2 py-1 text-sm text-white">
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
