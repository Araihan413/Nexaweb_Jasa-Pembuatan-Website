import contactMobile from '../../assets/figure/contact_mobile.svg';
import { FormContact, FormTextarea } from '../Elements/FormContact';
import { motion } from 'framer-motion';
import Button from '../Elements/Button';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

  const fromRight = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: 50 },
  };
  const fromLeft = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: -50 },
  };
  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 50 },
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_nxanxot", "template_mgbhf58", form.current, {
      publicKey: 'z71v_orlXjAYVZV4b',
    })
      .then(
        () => {
          toast.success('Pesan berhasil dikirim! 😊', { position: 'top-right', autoClose: 6000 });
          form.current.reset();

        },
        (error) => {
          toast.error('Gagal mengirim pesan! 😔', { position: 'top-right', autoClose: 6000 });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div>
        <ToastContainer />
        <div className="flex flex-col justify-center items-center text-center pb-8">
          <motion.h1 variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-4xl font-semibold mb-2">Hubungi Kami</motion.h1>
          <motion.p variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className='font-paragraf text-lg font-semibold w-full md:w-9/12 lg:w-1/2'>Kami selalu terbuka untuk mendengar dari Anda! Baik itu saran, kritik, kerja sama proyek, atau pertanyaan seputar layanan kami, Nexaweb siap membantu Anda dengan tulus.</motion.p>
        </div>
        <div className="w-full justify-center items-end grid lg:grid-cols-2 grid-cols-1 py-5 gap-10 lg:gap-0">
          <div className="w-full flex justify-center">
            <motion.div variants={fromLeft} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="bg-slate-200/40 backdrop-blur rounded-xl col-span-1 w-11/12 shadow-lg max-w-[700px]">
              <form className="grid grid-cols-1 p-2 pt-5" ref={form} onSubmit={sendEmail} method="POST">
                <FormContact id="from_name" type="text" placeholder="Nama Lengkap" style="col-span-1" required={true}>
                  Nama Lengkap
                </FormContact>
                <FormContact id="from_email" type="email" placeholder="Email" style="col-span-1" required={true}>
                  Email
                </FormContact>
                <FormTextarea id="message" placeholder="Pesan Anda" style="col-span-1" required={true}>
                  Pesan
                </FormTextarea>
                <div className='col-span-1 px-8 pb-5'>
                  <Button type="submit" warna="bg-blue-300" style="w-full">Kirim</Button>
                </div>
              </form>
            </motion.div>
          </div>
          <div className="w-full flex justify-center">
            <motion.div variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="col-span-1 w-11/12 px-4 pt-4 max-w-[650px] drop-shadow-[0_25px_25px_rgba(0,245,204,0.15)]">
              <img className="w-full" src={contactMobile} alt="gambah contact mobile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
