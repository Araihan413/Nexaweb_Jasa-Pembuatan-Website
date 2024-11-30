import NavbarTop from './components/Fragments/NavbarTop';
import Beranda from './components/pages/beranda';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="">
        <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { duration: 3, type: 'spring', stiffness: 150 } }}>
          <NavbarTop />
        </motion.header>
        <main>
          <Beranda></Beranda>
        </main>
        <motion.div style={{ scaleX: scrollYProgress }} className="z-50 bottom-0 left-0 right-0 fixed w-full h-2 bg-gradient-primer origin-bottom-left"></motion.div>
      </div>
    </>
  );
}

export default App;
