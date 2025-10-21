import { Link, useLocation } from "react-router-dom";

function About() {
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
        about me
      </h1>
      <p className="w-4/5 text-center text-xl dark:text-white">
        I am a creator, visionary, artist, and inventor. Since I was only six or
        seven years old, I have been composing numerous works of curious merit,
        including the evocative "Hawk to a Mouse", a study of the captivating
        bird mid-hunt, currently on display in the Skibidee Museum in Ohio.
      </p>
    </div>
  );
}

export default About;
