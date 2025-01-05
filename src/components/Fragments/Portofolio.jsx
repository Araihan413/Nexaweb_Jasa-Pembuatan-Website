import CardPortofolio from '../Elements/CardPortofolio';
import { motion } from 'framer-motion';
import { useState } from 'react';
import dataPortofolio from '../dataContent/portofolio.json';


const dataContent = dataPortofolio.data;
const Portofolio = () => {
  const [isActive, setIsActive] = useState(1);
  const handleOpenImg = (id) => {
    setIsActive(id);
  }
  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <div className="pb-8">
          <motion.h1 variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-4xl font-semibold mb-2">
            Projek Yang Pernah Dibuat
          </motion.h1>
          <motion.p variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-paragraf max-w-[600px]">
            Berikut adalah contoh projek yang pernah dibuat. proyek ini dirancang agar responsif dan user friendly.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} className="flex flex-col lg:flex-row gap-2 lg:gap-y-10 flex-wrap justify-center items-center pt-4">
          {dataContent.map((items) => {
            return <CardPortofolio onClick={handleOpenImg} id={items.id} src={items.src} isActive={isActive == items.id} key={items.id} benner={items.benner} description={items.description} title={items.title} />
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Portofolio;
