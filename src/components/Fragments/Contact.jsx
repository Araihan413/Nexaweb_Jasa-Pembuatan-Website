import contactMobile from '../../assets/contact_mobile.svg';
import { FormContact, FormTextarea } from '../Elements/FormContact';

const Contact = () => {
  return (
    <>
      <div>
        <div className="text-center pb-8">
          <h1 className="font-judul text-4xl font-semibold">Hubungi Kami</h1>
        </div>
        <div className="w-full justify-center items-end grid lg:grid-cols-2 grid-cols-1 py-5 gap-10 lg:gap-0">
          <div className="w-full flex justify-center">
            <div className="bg-slate-100 rounded-xl col-span-1 w-11/12 shadow-lg max-w-[700px]">
              <form action="" className="grid grid-cols-2 p-2 pt-5">
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
          </div>
          <div className="w-full flex justify-center">
            <div className="col-span-1 w-11/12 px-4 pt-4 max-w-[650px] drop-shadow-[0_25px_25px_rgba(0,245,204,0.15)]">
              <img className="w-full" src={contactMobile} alt="gambah contact mobile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
