import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import LoveCounter from "./components/LoveCounter";
import WhyLove from "./components/WhyLove";
import Proposal from "./components/Proposal";
import Celebration from "./components/Celebration";
import FloatingHearts from "./components/FloatingHearts";
import RomanticCursor from "./components/RomanticCursor";
import BackgroundMusic from "./components/BackgroundMusic";


export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="relative min-h-screen text-gray-800 overflow-x-hidden">

      <div className="fixed inset-0 bg-gradient-to-br 
        from-pink-300 via-rose-300 to-purple-300 
        animate-gradient -z-20">
      </div>


      <FloatingHearts />
      <RomanticCursor />
      <BackgroundMusic />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute text-4xl left-10 top-20 animate-bounce">🐼</div>
        <div className="absolute text-4xl right-16 top-40 animate-pulse">🐧</div>
        <div className="absolute text-4xl left-1/3 bottom-24 animate-bounce">💖</div>
        <div className="absolute text-3xl right-1/4 bottom-32 animate-pulse">✨</div>
      </div>

      <div className="relative z-10">
        {!loaded && <Loader onFinish={() => setLoaded(true)} />}

        {loaded && !accepted && (
          <>
            <Hero />
            <Timeline />
            <LoveCounter />
            <WhyLove />
            <Proposal onAccept={() => setAccepted(true)} />
          </>
        )}

        {accepted && <Celebration />}
      </div>

      <div className="text-center py-6 text-pink-800 font-semibold relative z-10">
        Made with all my love for my CutieePieee 🐼💖
      </div>

    </div>
  );
}
