import { useEffect, useState } from "react";

const reasons = [
  "The way your eyes soften when you smile",
  "The way you get shy when I compliment you",
  "How your voice changes when you're excited",
  "The way you say my name when you're half sleepy",
  "The tiny pause you take before saying something emotional",
  "How you pretend to be strong but still need reassurance",
  "How you remember things I don’t even remember telling you",
  "The quiet comfort of just sitting with you",
  "The way you look at me when you think I’m not noticing",
  "Your random soft moments that no one else sees",
];

export default function WhyLove() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let char = 0;
    const currentText = reasons[index];

    const typing = setInterval(() => {
      setText(currentText.slice(0, char));
      char++;
      if (char > currentText.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % reasons.length);
          setText("");
        }, 2000);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="py-20 flex justify-center">
      <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl px-12 py-14 shadow-2xl text-center max-w-3xl w-full">

        <h2 className="text-3xl font-serif text-gray-800 mb-8">
          Why I Love You
        </h2>

        <p className="text-xl text-gray-800 min-h-[40px] transition-all duration-300">
          {text}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
}
