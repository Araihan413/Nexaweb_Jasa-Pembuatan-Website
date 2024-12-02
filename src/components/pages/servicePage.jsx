import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';

const ServicePage = () => {
  return (
    <>
      <div>
        <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { duration: 3, type: 'spring', stiffness: 150 } }}>
          <NavbarTop />
        </motion.header>
        <main>hello</main>
      </div>
    </>
  );
};

export default ServicePage;
