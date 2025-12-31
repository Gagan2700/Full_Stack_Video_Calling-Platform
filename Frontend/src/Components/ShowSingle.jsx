import { useMotionValue, useMotionTemplate, useSpring, motion } from "framer-motion"; // Note: Use "framer-motion" or "motion/react" depending on your version
import { useRef } from "react";

const ShowSingle = ({ title, para, imgSrc }) => {
  const ref = useRef(null);

  // 1. Initialize Motion Values
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  // 2. Add Spring smoothing (optional but highly recommended for cursor following)
  const mouseX = useSpring(mX, { stiffness: 300, damping: 30, restDelta: 0.001 });
  const mouseY = useSpring(mY, { stiffness: 300, damping: 30, restDelta: 0.001 });

  // 3. Create the template for the transform
  // We handle the centering (-50%) and the dynamic mouse position here
  const transform = useMotionTemplate`translate(calc(-50% + ${mouseX}px), calc(-50% + ${mouseY}px))`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect(); // Fixed typo
    const { left, top } = rect;
    const { clientX, clientY } = e;

    mX.set(clientX - left);
    mY.set(clientY - top);
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileHover="whileHover"
      className="group flex justify-between items-center border-b-2 border-neutral-500 relative py-8 md:px-3 cursor-pointer hover:border-white transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      <div className="headings">
        <motion.section
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.075,
          }}
          className="z-10 text-[3.5rem] font-bold text-neutral-500 group-hover:text-white transition-colors duration-500"
        >
          {title.split("").map((el, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {el === " " ? "\u00A0" : el} {/* Handles spaces in title */}
            </motion.span>
          ))}
        </motion.section>
        
        <motion.p className="text-[1.2rem] text-neutral-500 group-hover:text-white transition-colors duration-500">
          {para}
        </motion.p>
      </div>

      <motion.img
        className="size-65 rounded-2xl absolute z-0 object-cover pointer-events-none" // pointer-events-none prevents the image from flickering the mouse
        src={imgSrc}
        alt={`image of ${title}`}
        variants={{
          initial: {
            rotate: "-12.5deg",
            scale: 0,
            opacity: 0,
          },
          whileHover: {
            rotate: "12.5deg",
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          left: 0,
          top: 0,
          transform, // Uses our combined template
        }}
      />
    </motion.div>
  );
};

export default ShowSingle;