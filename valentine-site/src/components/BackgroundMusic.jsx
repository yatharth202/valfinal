import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.loop = true;
  audio.volume = 0.6;
  audio.muted = false;

  const tryPlay = async () => {
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
    }
  };

  tryPlay();

  const unlock = async () => {
    try {
      audio.muted = false;
      await audio.play();
      setIsPlaying(true);
    } catch {}
    window.removeEventListener("click", unlock);
  };

  window.addEventListener("click", unlock);

  return () => {
    window.removeEventListener("click", unlock);
  };
}, []);




  const toggleMusic = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50
                   bg-white/20 backdrop-blur-md
                   rounded-full w-14 h-14
                   flex items-center justify-center
                   text-2xl shadow-lg
                   hover:scale-110 transition"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
}
