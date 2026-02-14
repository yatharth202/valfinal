import { useEffect, useRef } from "react";

export default function ElegantCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      const { clientX, clientY } = e;


      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;


      const trail = document.createElement("div");
      trail.className =
        "fixed pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2";

      trail.style.left = `${clientX}px`;
      trail.style.top = `${clientY}px`;
      trail.style.fontSize = "11px";
      trail.style.transition = "all 0.6s ease-out";
      trail.style.opacity = "0.6";
      trail.innerHTML = "❤";
      trail.style.color = "#ff5c8a"; 

      document.body.appendChild(trail);

      requestAnimationFrame(() => {
        trail.style.transform =
          "translate(-50%, -50%) scale(1.6) translateY(-10px)";
        trail.style.opacity = "0";
      });

      setTimeout(() => {
        trail.remove();
      }, 600);
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            cursor: none;
          }
        `}
      </style>

      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[999]
                   -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff6b9a" />
              <stop offset="100%" stopColor="#ff2e63" />
            </linearGradient>
          </defs>

          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
               2 5.42 4.42 3 7.5 3
               c1.74 0 3.41 0.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3
               19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#heartGrad)"
            stroke="white"
            strokeWidth="0.8"
          />
        </svg>
      </div>
    </>
  );
}
