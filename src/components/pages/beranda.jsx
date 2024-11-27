import Heading from '../Fragments/Heading';
import About from '../Fragments/About';
import Service from '../Fragments/Service';
import ProcessOrder from '../Fragments/ProcessOrder';
import Portofolio from '../Fragments/Portofolio';
import Testimony from '../Fragments/Testimony';
import Question from '../Fragments/Question';
import Contact from '../Fragments/Contact';
import Footer from '../Fragments/Footer';

const Beranda = () => {
  return (
    <>
      <section className="pt-24 px-24">
        <Heading></Heading>
      </section>
      <section className="px-24 py-16 ">
        <About></About>
      </section>
      <section className="px-24 py-16">
        <Service></Service>
      </section>
      <section className="px-24 py-16">
        <ProcessOrder></ProcessOrder>
      </section>
      <section className="px-24 py-16">
        <Portofolio></Portofolio>
      </section>
      <section className="px-24 py-16">
        <Testimony></Testimony>
      </section>
      <section className="px-24 py-16">
        <Question></Question>
      </section>
      <section className="px-24 py-16">
        <Contact></Contact>
      </section>
      <section className="px-24 pt-16 pb-8 bg-slate-700 bg-tulisan-nexaweb">
        <Footer></Footer>
      </section>
    </>
  );
};

export default Beranda;
