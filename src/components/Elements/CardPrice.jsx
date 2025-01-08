import Button from './Button';
import { motion } from 'framer-motion';
import { MdControlPoint } from "react-icons/md";
const whatsappLink = 'https://wa.me/628113734445'



const CardPrice = () => {
  const fromLeft = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: -50 },
  };
  const fromRight = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: 50 },
  };

  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 50 },
  };
  const opacityView = {
    isView: { opacity: 1, transition: { duration: 0.5 } },
    isHidden: { opacity: 0 },
  };

  return (
    <>
      <div className='w-full px-2 pb-10 md:px-10 bg-slate-200/20 backdrop-blur rounded-2xl shadow-box-glass'>
        <div className='font-paragraf mb-5'>
          <motion.h2 variants={opacityView} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-judul text-2xl font-medium text-center py-5'>Jasa Yang Ditawarkan</motion.h2>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full p-10 text-center shadow-xl border-2 bg-image-layanan-custom-website bg-cover bg-bottom'>
              <div className='w-full h-20 flex justify-center items-center'>
                <h3 className='font-judul font-semibold text-xl p-5 effect-glass rounded-xl shadow-box-light'>Pembuatan Website Custom</h3>
              </div>
            </div>
            <div className='w-full p-10 text-center shadow-xl border-2 bg-image-layanan-joki-website bg-cover bg-bottom'>
              <div className='w-full h-20 flex justify-center items-center'>
                <h3 className='font-judul font-semibold text-xl p-5 effect-glass rounded-xl shadow-box-light'>Jokian Tugas Website</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center font-paragraf gap-5'>
          <div className='font-paragraf w-full p-5 md:p-10 bg-blue-200/20 backdrop-blur-sm rounded-2xl md:shadow-box-glass'>
            <motion.h2 variants={fromLeft} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-judul text-2xl font-medium text-center mb-5 '>Harga Mulai dari Rp100.000</motion.h2>
            <div className='mb-2'>
              <motion.h3 variants={fromLeft} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-medium font-judul'>Website Sederhana (1-2 Halaman)</motion.h3>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Mulai dari Rp100.000</motion.p>
              </div>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Fitur standar: Home, About, atau Contact.</motion.p>
              </div>
            </div>
            <div className='mb-2'>
              <motion.h3 variants={fromLeft} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-medium font-judul'>Website Menengah (3-5 Halaman)</motion.h3>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Mulai dari Rp250.000</motion.p>
              </div>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Fitur tambahan: Formulir, galeri, atau animasi sederhana.</motion.p>
              </div>
            </div>
            <div className='mb-2'>
              <motion.h3 variants={fromLeft} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-medium font-judul'>Website Kompleks (&gt; 5 Halaman)</motion.h3>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Mulai dari Rp500.000</motion.p>
              </div>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Fitur premium: Dashboard, e-commerce, atau integrasi API.</motion.p>
              </div>
            </div>
          </div>
          <div className='font-paragraf w-full p-5 md:p-10 bg-blue-200/20 backdrop-blur-sm rounded-2xl md:shadow-box-glass'>
            <motion.h2 variants={fromLeft} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-judul text-2xl font-medium text-center mb-5 '>Faktor Penentu Harga</motion.h2>
            <div className='flex gap-2'>
              <div className='flex-grow-0 pt-0.5'>
                <MdControlPoint />
              </div>
              <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Jumlah Halaman: Semakin banyak halaman, harga akan menyesuaikan.</motion.p>
            </div>
            <div className='flex gap-2'>
              <div className='flex-grow-0 pt-0.5'>
                <MdControlPoint />
              </div>
              <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Fitur Tambahan: Fitur seperti form interaktif, animasi, atau sistem login akan menambah biaya.</motion.p>
            </div>
            <div className='flex gap-2'>
              <div className='flex-grow-0 pt-0.5'>
                <MdControlPoint />
              </div>
              <motion.p variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Waktu Pengerjaan: Untuk pengerjaan mendesak, biaya tambahan bisa dikenakan.</motion.p>
            </div>
            <div className='font-paragraf text-center mt-10 flex flex-col justify-center items-center gap-2'>
              <Button onClick={() => { window.open(whatsappLink, "_blank", "noopener,noreferrer"); }} style='font-judul text-xl font-medium pb-2 text-white' warna='bg-green-500'>Hubungi Sekarang!</Button>
              <motion.p variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }}>Konsultasikan kebutuhan Anda <b >GRATIS</b> dan dapatkan penawaran <b>terbaik!</b></motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPrice;
