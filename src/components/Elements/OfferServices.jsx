import { motion } from 'framer-motion';
import { useState } from 'react';

const OfferServices = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { icon, title, description, style } = props;
  return (
    <>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={` rounded-2xl w-full lg:w-96 relative overflow-hidden  shadow-xl ${style}`}>
        <div className="backdrop-blur-lg h-full bg-slate-200/40 p-4">
          <motion.div
            animate={{ width: isHovered ? '100%' : '5rem', height: isHovered ? '100%' : '5rem', borderRadius: isHovered ? '0px' : '999px', top: isHovered ? '0rem' : '0.75rem', left: isHovered ? '0rem' : '0.75rem' }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 250,
              damping: 25,
            }}
            className="w-20 h-20 rounded-full backdrop-blur-lg bg-[#c5f9d7]/80 absolute top-3 left-3 -z-10"></motion.div>
          <div>
            <img className="w-16 h-16" src={icon} alt="icon penawaran pelayanan" />
            <h1 className="font-judul text-xl font-semibold pb-2">{title}</h1>
            <p className="font-paragraf">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferServices;
