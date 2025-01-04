
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgresBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div style={{ scaleX }} className="z-50 bottom-0 left-0 right-0 fixed w-full h-2 bg-gradient-primer origin-bottom-left"></motion.div>
    </>
  );
};

export default ProgresBar;