import { motion } from 'framer-motion';
import dataContent from '../dataContent/keunggulan.json'
const CardSuperior = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  const dataCard = dataContent.data
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:gap-8 place-items-center">
        {dataCard &&
          dataCard.map((item, index) => {
            return (
              <motion.div variants={inView} whileInView="view" initial="hidden" className="lg:col-span-1  h-full w-full max-w-[540px] rounded-xl shadow-box-glass overflow-hidden" key={index + 1}>
                <div className="backdrop-blur-md bg-slate-200/20 p-4 h-full w-full">
                  <div className="flex flex-col">
                    <img className="w-20 h-20 mb-3" src={item.src} alt={item.alt} />
                    <h2 className="md:font-semibold font-bold font-judul leading-5 text-xl pb-2">{item.judul}</h2>
                    <p className="font-paragraf font-medium">{item.children}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </>
  );
};

export default CardSuperior;

