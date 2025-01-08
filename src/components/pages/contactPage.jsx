import NavbarTop from '../Fragments/NavbarTop';
import Contact from '../Fragments/Contact';
import Footer from '../Fragments/Footer';
import ScrollToTop from '../Elements/ScrollToTop';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Kontak - Jasa Nexaweb";
  }, []);
  return (
    <>
      <div id='contact'>
        <ScrollToTop />
        <header>
          <NavbarTop />
        </header>
        <main className='px-5 lg:px-24 md:px-14 py-16 pt-28 md:pt-32 lg:pt-28 bg-kotak-kotak'>

          <Contact />
        </main>
        <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
