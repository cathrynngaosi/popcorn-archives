import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextTransition from "react-text-transition";

const TEXTS = ["Movies", "Series", "Films"];

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
    <div className="relative h-[92%] bg-hero-image bg-cover bg-no-repeat">
      <div className="absolute flex h-full w-full flex-col items-center justify-center space-y-3 bg-zinc-950/75 p-5 text-red-50 ">
        <h1 className="text-center text-7xl font-medium">
          Keep track of your favorite {""}
          <span>
            <TextTransition inline="true">
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>
        </h1>

        <h1 className="w-4/5 py-5 text-center text-3xl leading-tight tracking-wide text-red-100">
          Start curating lists for all your popcorn-filled entertainment moments
          today!
        </h1>

        <Link
          to="/my-list"
          className="rounded-lg bg-red-800 px-8 py-3 uppercase duration-75 hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
