import Heading from '../Fragments/Heading';
import About from '../Fragments/About';
import Service from '../Fragments/Service';
import ProcessOrder from '../Fragments/ProcessOrder';
import Portofolio from '../Fragments/Portofolio';
import Testimony from '../Fragments/Testimony';
import Question from '../Fragments/Question';
import Contact from '../Fragments/Contact';
import Footer from '../Fragments/Footer';
import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';

const Home = () => {
  return (
    <>
      <div>
        <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { duration: 3, type: 'spring', stiffness: 150 } }}>
          <NavbarTop />
        </motion.header>
        <main>
          <section className="pt-12 px-5 md:py-36 md:pt-52 lg:pt-10 md:px-14 lg:px-24">
            <Heading></Heading>
          </section>
          <section className="px-5 lg:px-24 md:px-14 py-16 ">
            <About></About>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16">
            <Service></Service>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16">
            <ProcessOrder></ProcessOrder>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16">
            <Portofolio></Portofolio>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16">
            <Testimony></Testimony>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16">
            <Question></Question>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16">
            <Contact></Contact>
          </section>
          <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700 bg-tulisan-nexaweb">
            <Footer></Footer>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
