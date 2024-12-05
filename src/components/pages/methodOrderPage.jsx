import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';
import ProcessOrder from '../Fragments/ProcessOrder';

const MethodOrderPage = () => {
  return (
    <>
      <div className="px-5 lg:px-24 md:px-14 py-16 pt-28 md:pt-32 lg:pt-28">
        <header>
          <NavbarTop />
        </header>
        <main>
          <ProcessOrder />
        </main>
      </div>
    </>
  );
};

export default MethodOrderPage;
