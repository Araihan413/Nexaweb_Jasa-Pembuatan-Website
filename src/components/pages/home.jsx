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
import { useRef } from 'react';
import { useFollowPointer } from '../Elements/use-follow-pointer';

const Home = () => {
  const pointerRef = useRef(null);
  const { x, y } = useFollowPointer(pointerRef);
  return (
    <>
      <div className="relative">
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
          <NavbarTop />
        </motion.header>
        <motion.div
          initial={{ opacity: 0, display: 'none' }}
          animate={{ display: 'block', opacity: 1, transition: { duration: 1, delay: 1.5 } }}
          ref={pointerRef}
          style={{ x, y }}
          className="w-40 h-40 rounded-full bg-gradient-primer blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-50]"></motion.div>
        <main>
          <section className="pt-12 px-5 md:py-36 md:pt-52 lg:pt-10 md:px-14 lg:px-24 bg-kotak-kotak -z-20">
            <div className="w-full h-full relative z-20">
              {/* <div className="w-[20vw] h-[20vw] rounded-full bg-gradient-bubble1 blur-xl absolute top-1/4 left-0  -z-10"></div> */}
              {/* <div className="w-[25vw] h-[25vw] rounded-full bg-gradient-bubble2 blur-xl absolute top-0 -right-16 -z-10"></div> */}
              <Heading></Heading>
            </div>
          </section>
          <section className="px-5 lg:px-24 md:px-14 py-16 bg-kotak-kotak ">
            <About></About>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16 bg-kotak-kotak">
            <Service></Service>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16 bg-kotak-kotak">
            <ProcessOrder></ProcessOrder>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16 bg-kotak-kotak">
            <Portofolio></Portofolio>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16 bg-kotak-kotak">
            <Testimony></Testimony>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16 bg-kotak-kotak">
            <Question></Question>
          </section>
          <section className="px-5 md:px-14 lg:px-24 py-16 bg-kotak-kotak">
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
