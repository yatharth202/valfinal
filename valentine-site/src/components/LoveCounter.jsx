import { useEffect, useState } from "react";

export default function LoveCounter() {

const togetherDate = new Date("2025-07-03T00:00:00");


  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - togetherDate;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes: Math.floor(diff / (1000 * 60)) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 flex justify-center">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl px-12 py-10 shadow-2xl text-center max-w-2xl w-full">

        <h2 className="text-3xl font-serif text-gray-800 mb-2">
          Since 3th July 2025 💗
        </h2>



        <p className="text-gray-700 mb-8">
          We've been building our little forever for
        </p>

        <div className="grid grid-cols-4 gap-6">
          <TimeBox value={time.days} label="Days" />
          <TimeBox value={time.hours} label="Hours" />
          <TimeBox value={time.minutes} label="Minutes" />
          <TimeBox value={time.seconds} label="Seconds" />
        </div>

      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm text-gray-600 mt-1">{label}</span>
    </div>
  );
}
