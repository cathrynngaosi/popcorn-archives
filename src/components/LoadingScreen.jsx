import { PiPopcornDuotone } from "react-icons/pi";

function LoadingScreen() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-600/20 backdrop-blur-sm">
      <div className="loader">
        <PiPopcornDuotone className="mx-auto animate-bounce fill-red-600 text-5xl" />
        <h1 className="text-center tracking-widest text-red-600">Loading</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
