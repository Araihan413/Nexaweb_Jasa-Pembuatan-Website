import SwiperTestimoni from '../Elements/SwiperTestimoni';
import { motion } from 'framer-motion';

const Testimony = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <motion.div variants={inView} whileInView="view" initial="hidden" className="text-center pb-8 pt-10">
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
