import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  useEffect(() => {
    setTimeout(onFinish, 3000);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-300 z-50">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-2xl font-bold text-white"
      >
        Preparing something special for you...
      </motion.div>
    </div>
  );
}
