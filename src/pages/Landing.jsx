import Home from "../ui/Home";

function Landing() {
  return (
    <>
      {console.log(import.meta.env.VITE_OMDB_API_KEY)}
      <Home />
    </>
  );
}

export default Landing;
