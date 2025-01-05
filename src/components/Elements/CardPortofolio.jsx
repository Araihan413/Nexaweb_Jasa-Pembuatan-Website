import { motion } from 'framer-motion';
import { TiInfoOutline } from "react-icons/ti";

const CardPortofolio = (props) => {
  const { id, src, benner, title, description, isActive, onClick } = props;

  return (
    <>
      <div className='flex w-full lg:w-max '>
        <div className='rounded-lg overflow-hidden cursor-pointer relative border-2 w-full'>
          <motion.figure initial={{ width: 64 }} animate={{ width: isActive ? '100%' : '64px' }} className='w-full lg:w-16 h-80 hidden lg:flex relative'>
            <img className='w-full h-full object-cover object-center' src={src} alt="portofolio 1" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: isActive ? 1 : 0, transition: { duration: 1 } }} className={`${isActive ? 'flex' : 'hidden'} absolute bottom-0 w-full bg-white/50  items-center space-x-5 py-2 pl-5 bg-gradient-transparant`}>
              <div className='w-12 h-12'>
                <TiInfoOutline className='w-full h-full' />
              </div>
              <div>
                <h2 className='font-subJudul text-xl font-semibold'>{title}</h2>
                <p className='font-subJudul font-semibold'>{description}</p>
              </div>
            </motion.div>
          </motion.figure>
          <motion.figure initial={{ height: 64 }} animate={{ height: isActive ? '100%' : '64px' }} className='w-full lg:w-16 h-80 lg:hidden flex'>
            <img className='w-full h-full object-cover object-center' src={src} alt="portofolio 1" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: isActive ? 1 : 0, transition: { duration: 1 } }} className={`${isActive ? 'flex' : 'hidden'} absolute bottom-0 w-full bg-white/50 items-center space-x-5 py-2 pl-5 bg-gradient-transparant hidden md:flex`}>
              <div className='w-12 h-12'>
                <TiInfoOutline className='w-full h-full' />
              </div>
              <div>
                <h2 className='font-subJudul text-xl font-semibold'>{title}</h2>
                <p className='font-subJudul font-semibold'>{description}</p>
              </div>
            </motion.div>
          </motion.figure>
          <div className={`absolute top-0 z-10 w-full h-full flex justify-center items-center bg-slate-100/10 backdrop-blur-sm ${isActive ? 'hidden' : 'flex'}`} onClick={() => onClick(id)}>
            <p className='font-bold fon lg:vertikal-text tracking-[.5rem] lg:tracking-normal text-white/80'>{benner}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPortofolio;
