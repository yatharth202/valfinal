import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  const name = "CutiePieeee";

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full 
                   bg-white/20 backdrop-blur-xl 
                   rounded-2xl
                   shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                   px-10 py-14 text-center"
      >


        <motion.h1
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-gray-800"
        >
          The world has millions of stories
        </motion.h1>


        <motion.h2
          variants={fadeUp}
          className="mt-3 font-serif text-2xl md:text-3xl text-gray-800"
        >
          Mine begins and ends with my
        </motion.h2>

        {/* Name */}
        <motion.div
          className="mt-6 flex justify-center flex-wrap 
                     text-4xl md:text-5xl 
                     font-serif font-medium tracking-wide"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="bg-gradient-to-r 
                         from-rose-400 to-pink-500
                         bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            variants={letterAnimation}
            className="ml-2 text-2xl"
          >
            🐼
          </motion.span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm text-gray-600"
        >
          My little <span className="text-blue-500">Penguin 🐧</span>,  
          my soft <span className="text-pink-500">Panda 🐼</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-3 text-sm text-pink-500"
        >
          You are my favorite chapter
        </motion.p>

      </motion.div>
    </section>
  );
}
