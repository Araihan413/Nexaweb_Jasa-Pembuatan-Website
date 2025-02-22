import { motion } from 'framer-motion';
import dataContent from '../dataContent/keunggulan.json'
import iconDesignResponsive from '../../assets/icons/design-responsif.png'
import iconCustomerService from '../../assets/icons/customer-service.png'
import iconBestPrice from '../../assets/icons/best-price.png'
import iconWorkflow from '../../assets/icons/workflow.png'

const dataCard = dataContent.data
const icon = [iconDesignResponsive, iconCustomerService, iconBestPrice, iconWorkflow]
const CardSuperior = () => {
  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:gap-8 place-items-center">
        {dataCard &&
          dataCard.map((item) => {
            return (
              <motion.div variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="lg:col-span-1  h-full w-full max-w-[540px] rounded-xl shadow-box-glass overflow-hidden" key={item.id}>
                <div className="backdrop-blur bg-slate-200/20 p-4 h-full w-full">
                  <div className="flex flex-col">
                    <img className="w-20 h-20 mb-3" src={icon[item.id - 1]} alt={item.alt} />
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

