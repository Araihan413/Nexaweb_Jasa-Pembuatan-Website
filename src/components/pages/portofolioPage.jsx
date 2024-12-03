import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';

const PortofolioPage = () => {
  return (
    <>
      <div className=" h-screen bg-red-200">
        <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { duration: 3, type: 'spring', stiffness: 150 } }}>
          <NavbarTop />
        </motion.header>
        <main>hello</main>
      </div>
    </>
  );
};

export default PortofolioPage;
