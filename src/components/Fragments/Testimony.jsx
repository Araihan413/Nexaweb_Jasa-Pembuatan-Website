import SwiperTestimoni from '../Elements/SwiperTestimoni';
import { motion } from 'framer-motion';

const Testimony = () => {
  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <motion.div variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="text-center pb-8 pt-10">
          <h1 className="font-judul text-4xl font-semibold">Apa Kata Mereka?</h1>
        </motion.div>
        <div className="w-full p-4">
          <SwiperTestimoni></SwiperTestimoni>
        </div>
      </div>
    </>
  );
};

export default Testimony;
