import Heading from '../Fragments/Heading';
import About from '../Fragments/About';
import Service from '../Fragments/Service';
import ProcessOrder from '../Fragments/ProcessOrder';
import Portofolio from '../Fragments/Portofolio';
import Testimony from '../Fragments/Testimony';
import Question from '../Fragments/Question';
import Footer from '../Fragments/Footer';
import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';

const Home = () => {
  return (
    <>
      <div className="relative">
        <header>
          <NavbarTop />
        </header>
        <main>
          <section className="pt-12 px-5 md:py-36 md:pt-52 lg:pt-10 md:px-14 lg:px-24 bg-kotak-kotak -z-20 ">
            <div className="w-full h-full relative z-20 ">
              <div className="w-[20vw] h-[20vw] rounded-full bg-gradient-bubble1 blur-xl absolute top-1/4 left-0  -z-10"></div>
              <div className="w-[25vw] h-[25vw] rounded-full bg-gradient-bubble2 blur-xl absolute top-0 -right-16 -z-10"></div>
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
          <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700 bg-tulisan-nexaweb">
            <Footer></Footer>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
