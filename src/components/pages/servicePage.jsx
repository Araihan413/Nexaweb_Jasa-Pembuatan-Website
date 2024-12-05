import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';
import Service from '../Fragments/Service';

const ServicePage = () => {
  return (
    <>
      <div className="px-5 lg:px-24 md:px-14 py-16 pt-28 md:pt-32 lg:pt-28">
        <header>
          <NavbarTop />
        </header>
        <main className="">
          <section className="pb-20">
            <div className="w-7/12">
              <h1 className="font-judul text-6xl font-bold leading-tight">Pelayanan Jasa Pembuatan Website di Nexaweb</h1>
              <p>
                {' '}
                <span className="font-bold text-green-400">Nexaweb</span> berkomitmen untuk menyediakan layanan pembuatan website yang berkualitas tinggi dan sesuai dengan kebutuhan Anda. Dari desain visual hingga pengembangan fitur, kami
                memastikan setiap detail mencerminkan brand Anda dan memberikan pengalaman terbaik bagi pengguna.
              </p>
            </div>
          </section>
          <section>
            <div>
              <h1>Apa yang Kami Tawarkan?</h1>
            </div>
          </section>
          <section>
            <Service />
          </section>
        </main>
      </div>
    </>
  );
};

export default ServicePage;
