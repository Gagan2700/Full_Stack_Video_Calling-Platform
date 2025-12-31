import React from "react";
import { motion } from "motion/react";

const container = {
  initial: {},
  hover: {
    transition: {
        delayChildren:0.09,
        staggerChildren: 0.05,
    },
  },
};

const topLetter = {
  initial: { y: "0%", opacity: 1 },
  hover: { y: "100%", opacity: 0 },
};

const bottomLetter = {
  initial: { y: "-100%", opacity: 0 },
  hover: { y: "0%", opacity: 1 },
};

const Zooper = ({ text = "Sync" }) => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileHover="hover"
      className="relative cursor-pointer pb-5"
    >
      <div className="flex">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={topLetter}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-[5rem] font-heading font-semibold uppercase inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="absolute top-0 left-0 flex">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={bottomLetter}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-[5rem] font-heading font-semibold uppercase inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.span
        className="absolute left-0 -bottom-2 h-1 w-full rounded-full
            bg-[linear-gradient(90deg,#b8860b,#ffd700,#fff1a8,#ffd700,#b8860b)]
            bg-[length:200%_100%]"
        initial={{ backgroundPosition: "0% 50%" ,opacity:0,}}
        whileInView={{ backgroundPosition: "200% 50%",opacity:1 }}
        transition={{
            duration: 2,
            ease: "linear",
        }}
        viewport={{ once: false }}
/>
    </motion.div>
  );
};

export default Zooper;
