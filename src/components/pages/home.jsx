import Heading from '../Fragments/Heading';
import About from '../Fragments/About';
import Superiority from '../Fragments/Superiority';
import Service from '../Fragments/Service';
import ProcessOrder from '../Fragments/ProcessOrder';
import Portofolio from '../Fragments/Portofolio';
import Testimony from '../Fragments/Testimony';
import Question from '../Fragments/Question';
import Footer from '../Fragments/Footer';
import NavbarTop from '../Fragments/NavbarTop';
import ScrollToTop from '../Elements/ScrollToTop';

const Home = () => {
  return (
    <>
      <div className="relative">
        <ScrollToTop />
        <header>
          <NavbarTop />
        </header>
        <main className='px-5 md:px-14 lg:px-24 bg-kotak-kotak'>
          <section id='home' className="pt-12 md:pt-40 lg:pt-10  -z-20 ">
            <div className="w-full h-full relative z-20 ">
              <div className="w-[20vw] h-[20vw] rounded-full bg-gradient-bubble1 blur-xl absolute top-1/4 left-0  -z-10"></div>
              <div className="w-[25vw] h-[25vw] rounded-full bg-gradient-bubble2 blur-xl absolute top-0 -right-16 -z-10"></div>
              <Heading></Heading>
            </div>
          </section>
          <section id='about'>
            <About></About>
          </section>
          <section>
            <Superiority></Superiority>
          </section>
          <section className="py-16">
            <Service></Service>
          </section>
          <section className="py-16">
            <ProcessOrder></ProcessOrder>
          </section>
          <section className="py-16">
            <Portofolio></Portofolio>
          </section>
          <section className="py-16">
            <Testimony></Testimony>
          </section>
          <section id='faq' className="py-16">
            <Question></Question>
          </section>
        </main>
        <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default Home;


