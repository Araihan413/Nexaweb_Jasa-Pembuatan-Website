import Button from '../Elements/Button';
import { motion } from 'framer-motion';

const Heading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 md:h-full h-screen lg:h-screen w-full">
        <article className="flex flex-col justify-center items-center text-center">
          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2.5, delay: 0.7 }} className="mb-8 bg-gradient-primer bg-clip-text text-transparent">
            <h1 className="font-judul font-bold text-5xl py-2">Bangun Website Impian Anda Bersama Nexweb</h1>
          </motion.div>

          <motion.h3 whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }} initial={{ opacity: 0, y: 100 }} className="font-subJudul font-bold text-3xl mb-3">
            Jasa Pembuatan Webste Profesional Untuk Bisnis dan Personal
          </motion.h3>
          <motion.p whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }} initial={{ opacity: 0, y: 100 }} className="font-paragraf font-semibold text-lg mb-3 px-8 md:px-24 lg:px-32 ">
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
