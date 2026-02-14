import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";

export default function Proposal({ onAccept }) {
  const cardRef = useRef(null);

  const [noPosition, setNoPosition] = useState({ left: 0, top: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Will You Be My Valentine? ";

  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);


  const moveButton = () => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const maxX = rect.width - 90;
    const maxY = rect.height - 40;

    setNoPosition({
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    });

    setYesScale((prev) => Math.min(prev + 0.15, 2.2));
  };


  const handleYes = () => {
    confetti({
      particleCount: 350,
      spread: 140,
      origin: { y: 0.6 },
      colors: ["#ff4da6", "#ff85c1", "#ffc0cb", "#ffffff"],
    });

    setTimeout(() => onAccept(), 900);
  };


  useEffect(() => {
    moveButton();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">


      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float text-4xl absolute left-10 bottom-0">💖</div>
        <div className="animate-float delay-2000 text-3xl absolute left-1/3 bottom-0">💗</div>
        <div className="animate-float delay-4000 text-5xl absolute right-20 bottom-0">💘</div>
      </div>


      <div
        ref={cardRef}
        className="relative max-w-2xl w-full bg-white/20 backdrop-blur-xl 
        border border-white/30 rounded-3xl shadow-2xl p-12 text-center
        animate-glow"
      >

        <h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-gray-800 mb-6">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="text-3xl mb-6">💌</div>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          I promise to keep choosing you,
          <br />
          in all the little moments.
        </p>

        <button
          onClick={handleYes}
          style={{ transform: `scale(${yesScale})` }}
          className="transition-all duration-300
          bg-gradient-to-r from-pink-500 to-rose-500
          text-white px-12 py-4 rounded-full text-xl font-medium
          shadow-xl hover:shadow-[0_0_40px_rgba(255,105,180,0.9)]"
        >
          YES 💕
        </button>


        <button
          onMouseEnter={moveButton}
          onClick={moveButton}
          style={{
            position: "absolute",
            left: noPosition.left,
            top: noPosition.top,
            transition: "all 0.25s ease",
          }}
          className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm"
        >
          NO 🙈
        </button>
      </div>
    </section>
  );
}
