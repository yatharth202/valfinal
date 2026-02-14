import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Accepted() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#ff4da6", "#ff85c1", "#ffc0cb", "#ffffff"],
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">


      <div className="absolute inset-0 pointer-events-none">
        <span className="heart heart1">💖</span>
        <span className="heart heart2">💕</span>
        <span className="heart heart3">💗</span>
        <span className="heart heart4">💘</span>
        <span className="heart heart5">💞</span>
      </div>

      <div
        className={`relative z-10 max-w-2xl w-full text-center
        bg-white/35 backdrop-blur-xl
        border border-white/50
        rounded-3xl
        shadow-[0_30px_80px_rgba(0,0,0,0.2)]
        p-16 transition-all duration-1000
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
      >
        <h1 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-gray-800 leading-tight mb-8">
          You just made me
          <br />
          <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
            the happiest person alive
          </span>
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          I love you <span className="animate-pulse">❤️</span>
        </p>

        <p className="text-sm text-gray-600 mt-6 tracking-wide">
          And I will keep choosing you,
          <br />
          every single day
        </p>

        <div className="mt-10 text-xs text-gray-500 uppercase tracking-widest">
          Forever starts now
        </div>
      </div>

      {/* Floating Hearts CSS */}
      <style jsx>{`
        .heart {
          position: absolute;
          font-size: 28px;
          animation: floatUp 8s linear infinite;
          opacity: 0.7;
        }

        .heart1 { left: 10%; animation-delay: 0s; }
        .heart2 { left: 30%; animation-delay: 2s; }
        .heart3 { left: 50%; animation-delay: 4s; }
        .heart4 { left: 70%; animation-delay: 1s; }
        .heart5 { left: 85%; animation-delay: 3s; }

        @keyframes floatUp {
          0% {
            bottom: -50px;
            transform: translateX(0) scale(0.8);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translateX(20px) scale(1);
          }
          75% {
            transform: translateX(-20px) scale(1.1);
          }
          100% {
            bottom: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
