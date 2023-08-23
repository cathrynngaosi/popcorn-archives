import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextTransition from "react-text-transition";

const TEXTS = ["Movies", "Series", "Films"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="bg-hero-image bg-cover bg-no-repeat h-[92%] relative">
      <div className="absolute bg-zinc-950/75 h-full w-full flex flex-col items-center justify-center text-slate-100 p-5 space-y-3">
        <h1 className="text-7xl font-medium text-center">
          Keep track of your favorite {""}
          <span>
            <TextTransition inline="true">
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>
        </h1>

        <h1 className=" tracking-wide leading-tight w-4/5 text-center text-4xl py-5">
          Create a list for your all your popcorn sessions now!
        </h1>

        <Link
          to="/my-list"
          className="bg-red-800 py-3 px-8 uppercase rounded-lg hover:scale-105 duration-75"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
