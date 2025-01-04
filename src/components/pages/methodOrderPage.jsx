import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';
import Button from '../Elements/Button';
import Footer from '../Fragments/Footer';
import { WebsiteOrderFlow, TopConnectingLine, BottomConnectingLine } from '../Elements/WebsiteOrderFlow';
import dataProcessCreatingWebsite from '../dataContent/prosesBuatWebsite.json';
const listProcessCreatingWebsite = dataProcessCreatingWebsite.data;
const whatsappLink = 'https://wa.me/628113734445'
import ScrollToTop from '../Elements/ScrollToTop';

const MethodOrderPage = () => {
  const fromRight = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: 100 },
  };

  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <ScrollToTop />
        <header>
          <NavbarTop />
        </header>
        <main className="px-5 lg:px-24 md:px-14 py-16 pt-28 md:pt-32 lg:pt-28 bg-kotak-kotak">
          <section>
            <div className="w-full md:w-10/12 lg:w-7/12  pb-10">
              <motion.h1 variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-6xl font-bold leading-tight text-[#414040]">Cara Order Website di Nexaweb</motion.h1>
              <motion.p variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-paragraf pt-4 font-semibold text-lg">
                Kami membuat proses pemesanan website mudah dan jelas, sehingga Anda tidak perlu bingung. Ikuti langkah-langkah berikut untuk memesan paket website di Nexaweb hingga website Anda dapat diakses di internet:
              </motion.p>
            </div>
            <div className="flex flex-col  justify-start md:justify-normal items-center md:items-stretch">
              <TopConnectingLine />
              {listProcessCreatingWebsite.map((item, index) => {
                return <WebsiteOrderFlow key={item.id} number={item.id} title={item.title} titleDescription={item.titleDescription} description={item.description} order={(index + 1) % 2 === 0 ? ['md:order-3', 'md:order-1'] : ['md:order-1', 'md:order-3']} icon={item.icon} />;
              })}
              <BottomConnectingLine />
            </div>
          </section>
          <section className='py-16'>
            <motion.h1 variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-4xl font-semibold mb-2 text-center">Ayo Hubungi dan Pesan Sekarang!</motion.h1>
            <motion.div variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='flex justify-center py-4'>
              <Button onClick={() => { window.open(whatsappLink, "_blank", "noopener,noreferrer"); }} warna='bg-green-400' style='text-white'>Hubungi Kami</Button>
            </motion.div>
          </section>
        </main>
        <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default MethodOrderPage;
