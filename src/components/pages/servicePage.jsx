import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';
import Service from '../Fragments/Service';
import responsiveDesign from '../../assets/icons/responsive-design.png';
import customDesign from '../../assets/icons/custom-design.png';
import optimization from '../../assets/icons/optimization.png';
import seoFrendly from '../../assets/icons/SEO-frendly.png';
import manageContent from '../../assets/icons/manage-content.png';
import security from '../../assets/icons/web-security.png';
import OfferServices from '../Elements/OfferServices';
import webBisnis from '../../assets/image/web-bisnis.png';

const ServicePage = () => {
  const offerServices = [
    {
      id: 1,
      icon: responsiveDesign,
      title: 'Desain Website yang Responsif',
      description: 'Kami memastikan website Anda dapat diakses dengan baik di semua perangkat, baik desktop, tablet, maupun smartphone.',
    },
    {
      id: 2,
      icon: customDesign,
      title: 'Fitur Custom Sesuai Kebutuhan',
      description: 'Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Oleh karena itu, kami menyediakan fitur custom yang dapat diatur sesuai kebutuhan Anda.',
    },
    {
      id: 3,
      icon: optimization,
      title: 'Optimasi Performa Website',
      description: 'Kecepatan loading website adalah prioritas kami, dengan menggunakan teknik optimasi seperti kompresi gambar, caching, dan coding yang efisien.',
    },
    {
      id: 4,
      icon: seoFrendly,
      title: 'SEO-Friendly',
      description: 'Website Anda akan dirancang dengan struktur yang mendukung optimasi mesin pencari (SEO).',
    },
    {
      id: 5,
      icon: manageContent,
      title: 'Pengelolaan Konten yang Mudah',
      description: 'Kami menggunakan platform Content Management System (CMS) seperti WordPress, sehingga Anda bisa dengan mudah mengelola dan memperbarui konten.',
    },
    {
      id: 6,
      icon: security,
      title: 'Keamanan yang Terjamin',
      description: 'Keamanan data Anda adalah prioritas kami. Kami memasang sertifikat SSL, sistem firewall, dan perlindungan dari serangan cyber.',
    },
  ];
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
              <p className="font-paragraf pt-4">
                {' '}
                <span className="font-bold text-green-400">Nexaweb</span> berkomitmen untuk menyediakan layanan pembuatan website yang berkualitas tinggi dan sesuai dengan kebutuhan Anda. Dari desain visual hingga pengembangan fitur, kami
                memastikan setiap detail mencerminkan brand Anda dan memberikan pengalaman terbaik bagi pengguna.
              </p>
            </div>
          </section>
          <section className="pb-20">
            <div className="pb-8">
              <h1 className="font-judul text-4xl font-semibold">Apa yang Kami Tawarkan?</h1>
            </div>
            <div className="seluruh-card grid grid-cols-2 gap-8 justify-items-center">
              {offerServices.map((service) => (
                <OfferServices key={service.id} icon={service.icon} title={service.title} description={service.description} style="col-span-1 h-full" />
              ))}
            </div>
          </section>
          <section className="pb-20">
            <div className="pb-8">
              <h1 className="font-judul text-4xl font-semibold">Jenis Website yang Kami Sediakan</h1>
            </div>
            <div>
              {/* -translate-y-10 -translate-x-8 */}
              <div className="flex border-2 shadow-lg rounded-2xl pl-40 w-5/6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 -z-10  bg-gradient-transparant">
                  <img className="bg-gradient-transparant bg-red-300" src={webBisnis} alt="foto design web bisnis" />
                </div>
                <div className="p-4">
                  <h1 className="font-judul text-xl font-semibold pb-2">Website Bisnis</h1>
                  <p className="font-paragraf">Bangun kepercayaan dengan website profesional yang menunjukkan identitas dan layanan bisnis Anda.</p>
                </div>
              </div>
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
