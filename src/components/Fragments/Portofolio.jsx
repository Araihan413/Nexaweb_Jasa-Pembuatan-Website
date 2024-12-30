import CardPortofolio from '../Elements/CardPortofolio';
import { motion } from 'framer-motion';
import { useState } from 'react';
import dataPortofolio from '../dataContent/portofolio.json';

const Portofolio = () => {
  const [isActive, setIsActive] = useState(1);
  const dataContent = dataPortofolio.data;

  const handleOpenImg = (id) => {
    setIsActive(id);
  }
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <>
      <div>
        <div className="pb-8">
          <motion.h1 variants={inView} whileInView="view" initial="hidden" className="font-judul text-4xl font-semibold mb-2">
            Projek Yang Pernah Dibuat
          </motion.h1>
          <motion.p variants={inView} whileInView="view" initial="hidden" transition={{ delay: 0.3 }} className="font-paragraf max-w-[600px]">
            Berikut adalah contoh proyek yang pernah dibuat. proyek ini dirancang agar responsif dan user friendly.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} className="flex gap-2 gap-y-10 flex-wrap justify-center items-center pt-4">
          {dataContent.map((items) => {
            return <CardPortofolio onClick={handleOpenImg} id={items.id} src={items.src} isActive={isActive == items.id} key={items.id} description={items.benner} />
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Portofolio;
