

import { motion } from 'framer-motion';

const CardPortofolio = (props) => {
  const { id, src, description, isActive, onClick } = props;

  return (
    <>
      <div className='flex'>
        <div className='rounded-lg overflow-hidden cursor-pointer relative'>
          <motion.figure initial={{ width: 64 }} animate={{ width: isActive ? '100%' : '64px' }} className='w-full lg:w-16 h-80'>
            <img className='w-full h-full object-cover object-center' src={src} alt="portofolio 1" />
          </motion.figure>
          <div className={`absolute top-0 z-10 w-full h-full flex justify-center items-center bg-slate-100/10 backdrop-blur-sm ${isActive ? 'hidden' : 'flex'}`} onClick={() => onClick(id)}>
            <p className='font-bold vertikal-text'>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPortofolio;
