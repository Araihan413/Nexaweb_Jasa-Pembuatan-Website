import Button from '../Elements/Button';
import { delay, motion } from 'framer-motion';
import TextChange from '../Elements/textChange';
const whatsappLink = 'https://wa.me/628113734445'
const Heading = () => {
  const varian = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 md:h-full h-screen lg:h-screen w-full">
        <article className="flex flex-col justify-center items-start text-start ">
          <div className="mb-8">
            <div className="font-judul font-extrabold text-5xl md:text-7xl py-2 flex flex-col gap-3 text-[#414040]">
              <div className="flex flex-wrap gap-3">
                <motion.span variants={varian} initial="hidden" animate="show">
                  Bangun{' '}
                </motion.span>
                <motion.span variants={varian} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
                  Website{' '}
                </motion.span>
                <motion.div variants={varian} initial="hidden" animate="show" transition={{ delay: 0.4 }} className="relative text-[#00ff87]">
                  <TextChange />
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.span variants={varian} initial="hidden" animate="show" transition={{ delay: 0.6 }}>
                  Anda{' '}
                </motion.span>
                <motion.span variants={varian} initial="hidden" animate="show" transition={{ delay: 0.8 }}>
                  Bersama{' '}
                </motion.span>
                <motion.span variants={varian} initial="hidden" animate="show" transition={{ delay: 1 }}>
                  Nexweb
                </motion.span>
              </div>
            </div>
          </div>

          <motion.p animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }} initial={{ opacity: 0, y: 100 }} className="font-paragraf font-semibold text-lg mb-3 md:w-4/5 lg:w-1/2 ">
            Kami menyediakan layanan pembuatan website modern, responsif, dan berkualitas untuk mendukung kesuksesan online Anda. Dari toko online hingga portofolio pribadi, Nexaweb siap membantu Anda.
          </motion.p>
        </article>
        <div className="flex gap-4 md:gap-8">
          <motion.div animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.2 } }} initial={{ opacity: 0, x: -100 }}>
            <Button onClick={() => { window.open(whatsappLink, "_blank", "noopener,noreferrer"); }} warna="bg-gradient-sekunder" style="text-[#474747] w-40">
              Pesan Sekarang
            </Button>
          </motion.div>
          <motion.div animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.2 } }} initial={{ opacity: 0, x: 100 }}>
            <Button onClick={() => { window.open('/layanan', "_self", "noopener,noreferrer"); }} warna="bg-[#ebf4f5]" style="text-[#474747] w-40">
              Lihat Layanan
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Heading;
