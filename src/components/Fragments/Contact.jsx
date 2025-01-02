import contactMobile from '../../assets/figure/contact_mobile.svg';
import { FormContact, FormTextarea } from '../Elements/FormContact';
import { motion } from 'framer-motion';
import Button from '../Elements/Button';

const Contact = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div>
        <motion.div variants={inView} whileInView="view" initial="hidden" className="flex flex-col justify-center items-center text-center pb-8">
          <h1 className="font-judul text-4xl font-semibold mb-2">Hubungi Kami</h1>
          <p className='font-paragraf text-lg font-semibold w-full md:w-9/12 lg:w-1/2'>Kami selalu terbuka untuk mendengar dari Anda! Baik itu saran, kritik, kerja sama proyek, atau pertanyaan seputar layanan kami, Nexaweb siap membantu Anda dengan tulus.</p>
        </motion.div>
        <div className="w-full justify-center items-end grid lg:grid-cols-2 grid-cols-1 py-5 gap-10 lg:gap-0">
          <div className="w-full flex justify-center">
            <div className="bg-slate-200/40 backdrop-blur rounded-xl col-span-1 w-11/12 shadow-lg max-w-[700px]">
              <form action="" className="grid grid-cols-1 md:grid-cols-2 p-2 pt-5">
                <FormContact id="nama" type="text" placeholder="Nama Lengkap" style="col-span-1">
                  Nama Lengkap
                </FormContact>
                <FormContact id="perusahaan" type="text" placeholder="Perusahaan" style="col-span-1">
                  Perusahaan
                </FormContact>

                <FormContact id="telepon" type="text" placeholder="Telepon / WhatsApp" style="col-span-1">
                  Telepon / WhatsApp
                </FormContact>
                <FormContact id="email" type="email" placeholder="Email" style="col-span-1">
                  Email
                </FormContact>

                <FormContact id="subjek" type="text" placeholder="Subjek" style="col-span-1 md:col-span-2">
                  Subjek
                </FormContact>

                <FormTextarea id="Pesan" placeholder="Pesan Anda" style="col-span-1 md:col-span-2">
                  Pesan
                </FormTextarea>
                <div className='col-span-1 md:col-span-2 px-8 pb-5'>
                  <Button type="submit" warna="bg-blue-300" style="w-full">Kirim</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} className="col-span-1 w-11/12 px-4 pt-4 max-w-[650px] drop-shadow-[0_25px_25px_rgba(0,245,204,0.15)]">
              <img className="w-full" src={contactMobile} alt="gambah contact mobile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
