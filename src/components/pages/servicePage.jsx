import NavbarTop from '../Fragments/NavbarTop';
import Service from '../Fragments/Service';
import OfferServices from '../Elements/OfferServices';
import Footer from '../Fragments/Footer';
import dataOfferServices from '../dataContent/fiturLayanan.json'
import TypeOfWebsiteService from '../Elements/TypeOfWebsiteService';
import dataTypeWebsite from '../dataContent/jenisWebsite.json'
import { motion } from 'framer-motion'
import ScrollToTop from '../Elements/ScrollToTop';
import figureServices from '../../assets/figure/layanan.svg'
import { useEffect } from 'react';
import iconResponsiveDesign from '../../assets/icons/responsive-design.png';
import iconCustomDesign from '../../assets/icons/custom-design.png';
import iconOptimization from '../../assets/icons/optimization.png';
import iconAnimate from '../../assets/icons/animate.png';
import iconCheapPrice from '../../assets/icons/cheap-price.png';
import iconConsultation from '../../assets/icons/consultation.png';
import iconWebsitePortfolio from '../../assets/icons/website-portofolio.png';
import iconWebsiteBisnis from '../../assets/icons/website-bisnis.png';
import iconWebsiteBlog from '../../assets/icons/website-informatif.png';
import iconWebsiteTugas from '../../assets/icons/website-tugas.png';

const iconOfferServices = [iconResponsiveDesign, iconCustomDesign, iconOptimization, iconAnimate, iconCheapPrice, iconConsultation];
const iconTypeWebsite = [iconWebsitePortfolio, iconWebsiteBisnis, iconWebsiteBlog, iconWebsiteTugas];

const listDataTypeWebsite = dataTypeWebsite.data
const listOfferServices = dataOfferServices.data
const ServicePage = () => {
  useEffect(() => {
    document.title = "Layanan - Jasa Nexaweb";
  }, []);

  const fromRight = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: 100 },
  };

  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 50 },
  };
  return (

    <>
      <div id='services'>
        <ScrollToTop />
        <header>
          <NavbarTop />
        </header>
        <main className=" py-16 px-5 lg:px-24 md:px-14 pt-28 md:pt-32 bg-kotak-kotak">
          <section className="pb-20 lg:grid lg:grid-cols-2">
            <div className="w-full md:w-10/12 lg:w-full lg:col-span-1 ">
              <motion.h1 variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-5xl md:text-6xl font-bold leading-tight text-[#414040]">Pelayanan Jasa Pembuatan Website di Nexaweb</motion.h1>
              <motion.p variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-paragraf text-lg font-semibold pt-4">
                {' '}
                <span className="font-bold text-green-400">Nexaweb</span> berkomitmen untuk menyediakan layanan pembuatan website yang berkualitas tinggi dan sesuai dengan kebutuhan Anda. Dari desain visual hingga pengembangan fitur, kami
                memastikan setiap detail mencerminkan brand Anda dan memberikan pengalaman terbaik bagi pengguna.
              </motion.p>
            </div>
            <motion.div variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='max-w-96 w-full lg:col-span-1 lg:place-self-center hidden lg:block'>
              <img src={figureServices} alt="gambar figure layanan" />
            </motion.div>
          </section>
          <section className="pb-20 pt-10">
            <div className="pb-8">
              <motion.h1 variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-4xl font-semibold">Apa yang Kami Tawarkan?</motion.h1>
            </div>
            <div className="seluruh-card grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {listOfferServices.map((item) => (
                <OfferServices key={item.id} icon={iconOfferServices[item.id - 1]} title={item.title} description={item.description} style="col-span-1 h-full" />
              ))}
            </div>
          </section>
          <section className='pb-20'>
            <Service />
          </section>
          <section className="pb-10">
            <div className="pb-8">
              <motion.h1 variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-4xl font-semibold">Jenis Website yang Kami Sediakan</motion.h1>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-10 justify-center">
              {listDataTypeWebsite.map((item) => (
                <TypeOfWebsiteService key={item.id} title={item.title} description={item.description} icon={iconTypeWebsite[item.id - 1]} />
              ))}
            </div>
          </section>
        </main>
        <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
