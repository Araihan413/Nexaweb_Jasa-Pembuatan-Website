import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextChange = () => {
  const text = ['Impian', 'Responsif', 'Profesional', 'Modern'];
  const [textChange, setTextChange] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % text.length;
      setTextChange(index);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={textChange} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
          {text[textChange]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default TextChange;
