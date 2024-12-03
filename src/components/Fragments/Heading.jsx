import Button from '../Elements/Button';
import { motion } from 'framer-motion';
import TextChange from '../Elements/textChange';

const Heading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 md:h-full h-screen lg:h-screen w-full">
        <article className="flex flex-col justify-center items-start text-start">
          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2.5, delay: 0.7 }} className="mb-8 bg-gradient-primer bg-clip-text text-transparent ">
            <div className="font-judul font-extrabold text-5xl md:text-7xl py-2 flex flex-col gap-5">
              <div>
                <span>Bangun </span>
                <span>Website </span>
                <TextChange />
              </div>
              <div>
                <span>Anda </span>
                <span>Bersama </span>
                <span>Nexweb</span>
              </div>
            </div>
          </motion.div>

          {/* <motion.h3 whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }} initial={{ opacity: 0, y: 100 }} className="font-subJudul font-bold text-3xl mb-3">
            Jasa Pembuatan Webste Profesional Untuk Bisnis dan Personal
          </motion.h3> */}
          <motion.p whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }} initial={{ opacity: 0, y: 100 }} className="font-paragraf font-semibold text-lg mb-3 md:w-4/5 lg:w-1/2 ">
            Kami menyediakan layanan pembuatan website modern, responsif, dan berkualitas tinggi untuk mendukung kesuksesan online Anda. Dari toko online hingga portofolio pribadi, Nexaweb siap membantu Anda.
          </motion.p>
        </article>
        <div className="flex gap-8">
          <motion.div whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.2 } }} initial={{ opacity: 0, x: -100 }}>
            <Button warna="bg-gradient-sekunder" style="text-[#474747]">
              Pesan Sekarang
            </Button>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.2 } }} initial={{ opacity: 0, x: 100 }}>
            <Button warna="bg-[#ebf4f5]" style="text-[#474747]">
              Lihat Portofolio
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Heading;
