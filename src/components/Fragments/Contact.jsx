import contactMobile from '../../assets/contact_mobile.svg';
import { FormContact, FormTextarea } from '../Elements/FormContact';

const Contact = () => {
  return (
    <>
      <div>
        <div className="text-center pb-8">
          <h1 className="font-judul text-4xl font-semibold">Hubungi Kami</h1>
        </div>
        <div className="bg-sky-200 w-full flex justify-center">
          <div className="w-[500px] bg-red-400 rounded-xl">
            <form action="" className="grid grid-cols-2 p-2">
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

              <FormContact id="subjek" type="text" placeholder="Subjek" style="col-span-2">
                Subjek
              </FormContact>

              <FormTextarea id="Pesan" placeholder="Pesan Anda" style="col-span-2">
                Pesan
              </FormTextarea>
            </form>
          </div>
          <div className="bg-sky-400">
            <img className="w-1/2" src={contactMobile} alt="gambah contact mobile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
