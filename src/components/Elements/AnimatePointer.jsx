import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useFollowPointer } from './use-follow-pointer';

const AnimatePointer = () => {
  const pointerRef = useRef(null);
  const { x, y } = useFollowPointer(pointerRef);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      animate={{ display: 'block', opacity: 1, transition: { duration: 1, delay: 1.5 } }}
      ref={pointerRef}
      style={{ x, y }}
      className="w-40 h-40 rounded-full bg-gradient-kursor blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-50]"></motion.div>
  )
}

export default AnimatePointer