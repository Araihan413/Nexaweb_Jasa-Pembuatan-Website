import CardSuperior from '../Elements/CardSuperior';
import ProgrammingWebsiteFigure from '../../assets/figure/figure-programming-website.svg';
import ElementProgrammingWebsiteFigure from '../../assets/figure/bg-programming-webiste.svg';
import { motion } from 'framer-motion';

const About = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <div className="flex flex-col  gap-10 md:gap-0 lg:flex-row justify-between items-center relative mb-20 md:mb-36">
          <div>
            <motion.h1 variants={inView} whileInView="view" initial="hidden" className="text-4xl font-judul font-semibold mb-8">
              Mengapa Memilih Nexaweb?
            </motion.h1>
            <motion.p variants={inView} whileInView="view" initial="hidden" transition={{ delay: 0.3 }} className="md:w-1/2 font-paragraf">
              Nexaweb adalah tim profesional yang berdedikasi untuk memberikan solusi digital terbaik bagi klien kami. Dengan pengalaman bertahun-tahun, kami telah membantu berbagai bisnis dan individu untuk memperluas jangkauan mereka
              secara online.
            </motion.p>
          </div>
          <figure className="w-80 h-80 md:top-20   md:absolute relative lg:-top-3 -z-1 right-0">
            <motion.img variants={inView} whileInView="view" initial="hidden" src={ProgrammingWebsiteFigure} alt="ilustrasi programming" />
            <motion.img variants={inView} whileInView="view" initial="hidden" className="absolute top-0" src={ElementProgrammingWebsiteFigure} alt="ilustrasi programming" />
          </figure>
        </div>
        <div className="md:pt-20 lg:pt-0">
          <motion.h3 variants={inView} whileInView="view" initial="hidden" className="text-center font-judul font-semibold text-4xl mb-8">
            Keunggulan Menggunakan Jasa Nexaweb
          </motion.h3>
          <CardSuperior></CardSuperior>
        </div>
      </div>
    </>
  );
};

export default About;
