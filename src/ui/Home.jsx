import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextTransition from "react-text-transition";
import Navbar from "./Navbar";

const TEXTS = ["Films", "Movies", "Series"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="absolute top-0  h-full w-full  bg-hero-image bg-cover bg-no-repeat ">
      <div className="absolute top-0 h-full w-full bg-zinc-900/75">
        <div className="flex h-full flex-col items-center justify-center space-y-3 p-5 text-red-50">
          <h1 className="text-center text-6xl font-medium leading-tight md:text-7xl">
            Keep track of your favorite {""}
            <span>
              <TextTransition inline="true">
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>
          </h1>

          <h1 className="w-4/5 py-5 text-center text-2xl leading-tight tracking-wide text-red-100">
            Start curating lists for all your popcorn-filled entertainment
            moments today!
          </h1>

          <div className="flex flex-row space-x-2">
            <Link
              to="/search"
              className="rounded-lg bg-red-800 px-8 py-3 uppercase duration-75 hover:scale-105"
            >
              Search Films
            </Link>
            <Link
              to="/my-lists/top-movies"
              className="rounded-lg bg-zinc-900 px-8 py-3 uppercase duration-75 hover:scale-105"
            >
              Go to my list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
