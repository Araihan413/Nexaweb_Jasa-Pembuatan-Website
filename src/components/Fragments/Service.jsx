import CardPrice from '../Elements/CardPrice';
import { motion } from 'framer-motion';

const Service = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div className='py-10'>
        <motion.div variants={inView} whileInView="view" initial="hidden" className="mb-8">
          <h1 className="font-judul text-4xl font-semibold text-center">Harga yang Fleksibel </h1>
        </motion.div>
        <div className="w-full">
          <CardPrice></CardPrice>
        </div>
      </div>
    </>
  );
};

export default Service;
