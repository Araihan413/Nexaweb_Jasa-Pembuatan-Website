import CardPrice from '../Elements/CardPrice';
import { motion } from 'framer-motion';

const Service = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <motion.div variants={inView} whileInView="view" initial="hidden" className="mb-16 md:mb-24">
          <h1 className="font-judul text-4xl font-semibold mb-2">Paket Harga Website yang Fleksibel </h1>
          <p className="font-paragraf">Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Tidak ada biaya tersembunyi, semua transparan.</p>
        </motion.div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-5">
          <CardPrice></CardPrice>
          <CardPrice></CardPrice>
          <CardPrice></CardPrice>
        </div>
      </div>
    </>
  );
};

export default Service;
