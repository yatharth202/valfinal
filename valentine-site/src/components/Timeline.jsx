import { motion } from "framer-motion";

export default function OurJourney() {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl mb-16 text-gray-800 tracking-wide"
      >
        Our Journey
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">


        <motion.div
          custom={0}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="bg-white/30 backdrop-blur-xl rounded-3xl
                     shadow-[0_20px_45px_rgba(0,0,0,0.12)]
                     border border-white/40
                     p-8 transition-all duration-300"
        >
          <h3 className="font-serif text-2xl text-gray-800 mb-3">
            🌸 Where It All Began
          </h3>

          <p className="text-rose-500 font-medium tracking-wide mb-4">
            30th June 2025 ❤️
          </p>

          <p className="text-gray-600 leading-relaxed">
            I still remember the exact date <br />
            Not because I had to<br />
            But because something about that day stayed
          </p>
        </motion.div>


        <motion.div
          custom={1}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="bg-white/30 backdrop-blur-xl rounded-3xl
                     shadow-[0_20px_45px_rgba(0,0,0,0.12)]
                     border border-white/40
                     p-8 transition-all duration-300"
        >
          <h3 className="font-serif text-2xl text-gray-800 mb-4">
            🌿 When It Stopped Being Ordinary
          </h3>

          <p className="text-gray-600 leading-relaxed">
            At some point, our conversations stopped feeling random <br />
            They started feeling important <br />
            And I didn’t even realize when that happened
          </p>
        </motion.div>

        <motion.div
          custom={2}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="bg-white/30 backdrop-blur-xl rounded-3xl
                     shadow-[0_20px_45px_rgba(0,0,0,0.12)]
                     border border-white/40
                     p-8 transition-all duration-300"
        >
          <h3 className="font-serif text-2xl text-gray-800 mb-4">
            🌙 The Day You Became Different
          </h3>

          <p className="text-gray-600 leading-relaxed">
            There wasn’t a big moment <br />
            No dramatic shift<br />
            Just a quiet realization <br />
            that you weren’t “just someone” anymore
          </p>
        </motion.div>


        <motion.div
          custom={3}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="bg-white/30 backdrop-blur-xl rounded-3xl
                     shadow-[0_20px_45px_rgba(0,0,0,0.12)]
                     border border-white/40
                     p-8 transition-all duration-300"
        >
          <h3 className="font-serif text-2xl text-gray-800 mb-4">
            🤍 The Part That Stayed
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Days passed <br />
            Conversations changed <br />
            But you didn’t fade<br />
            And neither did what I felt
          </p>
        </motion.div>

      </div>
    </section>
  );
}
