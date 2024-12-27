import CardPortofolio from '../Elements/CardPortofolio';
import { motion } from 'framer-motion';

const Portofolio = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <div className="pb-8">
          <motion.h1 variants={inView} whileInView="view" initial="hidden" className="font-judul text-4xl font-semibold mb-2">
            Projek Yang Pernah Dibuat
          </motion.h1>
          <motion.p variants={inView} whileInView="view" initial="hidden" transition={{ delay: 0.3 }} className="font-paragraf max-w-[600px]">
            Berikut adalah beberapa proyek yang pernah dibuat. Setiap proyek dirancang agar responsif dan memenuhi kebutuhan pengguna.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} className="flex gap-5 gap-y-10 flex-wrap justify-center items-center">
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
        </motion.div>
      </div>
    </>
  );
};

export default Portofolio;
