import Button from './Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdControlPoint } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";

const CardPrice = () => {
  const inView = {
    view: { opacity: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0 },
  };
  const [fitur, setFitur] = useState(['5 Halaman', '5 Hari Pengerjaan', '1x Revisi', '1 SEO Keyword', '5 page SEO Dasar', '10 Upload Setup Gambar', '+3 Akun Email', 'GRATIS! SSL', 'GRATIS! DOMAIN .COM/CO.ID', 'Mobile Friendly']);
  return (
    <>
      <div className='w-full px-2 pb-10 md:px-10 bg-slate-200/20 backdrop-blur-md rounded-2xl shadow-box-glass'>
        <div className='font-paragraf mb-5'>
          <h2 className='font-judul text-2xl font-medium text-center py-5'>Jasa Yang Ditawarkan</h2>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='bg-blue-200 w-full p-10 text-center shadow-xl border-2'>
              <p>Pembuatan Website Custom</p>
            </div>
            <div className='bg-blue-200 w-full p-10 text-center shadow-xl border-2'>
              <p>Jokian Tugas Website</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center font-paragraf gap-5'>
          <div className='font-paragraf w-full p-5 md:p-10 bg-blue-200/20 backdrop-blur-md rounded-2xl md:shadow-box-glass'>
            <h2 className='font-judul text-2xl font-medium text-center mb-5 '>Harga Mulai dari Rp100.000</h2>
            <div className='mb-2'>
              <h3 className='font-medium font-judul'>Website Sederhana (1-2 Halaman)</h3>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <p>Mulai dari Rp100.000</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <p>Fitur standar: Home, About, atau Contact.</p>
              </div>
            </div>
            <div className='mb-2'>
              <h3 className='font-medium font-judul'>Website Menengah (3-5 Halaman)</h3>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <p>Mulai dari Rp250.000</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <p>Fitur tambahan: Formulir, galeri, atau animasi sederhana.</p>
              </div>
            </div>
            <div className='mb-2'>
              <h3 className='font-medium font-judul'>Website Kompleks (&gt; 5 Halaman)</h3>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <p>Mulai dari Rp500.000</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex-grow-0 pt-0.5'>
                  <MdControlPoint />
                </div>
                <p>Fitur premium: Dashboard, e-commerce, atau integrasi API.</p>
              </div>
            </div>
          </div>
          <div className='font-paragraf w-full p-5 md:p-10 bg-blue-200/20 backdrop-blur-md rounded-2xl md:shadow-box-glass'>
            <h2 className='font-judul text-2xl font-medium text-center mb-5 '>Faktor Penentu Harga</h2>
            <div className='flex gap-2'>
              <div className='flex-grow-0 pt-0.5'>
                <MdControlPoint />
              </div>
              <p>Jumlah Halaman: Semakin banyak halaman, harga akan menyesuaikan.</p>
            </div>
            <div className='flex gap-2'>
              <div className='flex-grow-0 pt-0.5'>
                <MdControlPoint />
              </div>
              <p>Fitur Tambahan: Fitur seperti form interaktif, animasi, atau sistem login akan menambah biaya.</p>
            </div>
            <div className='flex gap-2'>
              <div className='flex-grow-0 pt-0.5'>
                <MdControlPoint />
              </div>
              <p>Waktu Pengerjaan: Untuk pengerjaan mendesak, biaya tambahan bisa dikenakan.</p>
            </div>
            <div className='font-paragraf text-center mt-10'>
              <h3 className='font-judul text-xl font-medium pb-2'>Hubungi Sekarang!</h3>
              <p>Konsultasikan kebutuhan Anda <b >GRATIS</b> dan dapatkan penawaran <b>terbaik!</b></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPrice;
