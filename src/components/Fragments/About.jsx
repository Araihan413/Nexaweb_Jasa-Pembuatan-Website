import ProgrammingWebsiteFigure from '../../assets/figure/figure-programming-website.svg';
import ElementProgrammingWebsiteFigure from '../../assets/figure/bg-programming-webiste.svg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const fromLeft = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: -100 },
  };
  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 100 },
  };

  const containerVariants = {
    isHidden: { opacity: 0 },
    isView: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <>
      <motion.div className='md:pt-16' ref={ref} animate={isInView ? "isView" : {}} initial="isHidden" variants={containerVariants}>
        <div className="flex flex-col  gap-10 md:gap-0 lg:flex-row justify-between items-center relative mb-20 md:mb-36">
          <div>
            <motion.h1 variants={fromLeft} className="text-4xl font-judul font-semibold mb-8">
              Mengapa Memilih Nexaweb?
            </motion.h1>
            <motion.p variants={fromLeft} className="md:w-2/5 lg:w-1/2 font-paragraf text-justify">
              Nexaweb adalah layanan yang menawarkan jasa pembuatan website modern, responsif, dan sesuai kebutuhan klien. Dengan pendekatan personal dan inovatif, Nexaweb mengutamakan desain menarik, fitur fungsional, dan performa optimal untuk membantu individu maupun bisnis memperluas jangkauan mereka di dunia digital. Kami berkomitmen untuk memberikan solusi website yang efektif dan terjangkau.
            </motion.p>
          </div>
          <figure className="w-80 h-80 md:top-20   md:absolute relative lg:-top-3 -z-1 right-0">
            <motion.img variants={fromButton} src={ProgrammingWebsiteFigure} alt="ilustrasi programming" />
            <motion.img variants={fromButton} className="absolute top-0" src={ElementProgrammingWebsiteFigure} alt="ilustrasi programming" />
          </figure>
        </div>
      </motion.div>
    </>
  );
};

export default About;
