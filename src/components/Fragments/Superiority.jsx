import CardSuperior from '../Elements/CardSuperior';
import { motion } from 'framer-motion';

const Superiority = () => {

  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      <div className='pt-14'>
        <motion.h3 variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="md:text-center font-judul font-semibold text-4xl mb-10 text-start">
          Keunggulan Menggunakan Jasa Nexaweb
        </motion.h3>
        <CardSuperior></CardSuperior>
      </div>
    </>
  )
}

export default Superiority