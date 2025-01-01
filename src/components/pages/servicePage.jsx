import NavbarTop from '../Fragments/NavbarTop';
import Service from '../Fragments/Service';
import OfferServices from '../Elements/OfferServices';
import Footer from '../Fragments/Footer';
import dataOfferServices from '../dataContent/fiturLayanan.json'
import TypeOfWebsiteService from '../Elements/TypeOfWebsiteService';
import dataTypeWebsite from '../dataContent/jenisWebsite.json'

const listDataTypeWebsite = dataTypeWebsite.data
const listOfferServices = dataOfferServices.data
const ServicePage = () => {
  return (
    <>
      <div>
        <header>
          <NavbarTop />
        </header>
        <main className=" py-16 px-5 lg:px-24 md:px-14 pt-28 md:pt-32 lg:pt-28 bg-kotak-kotak">
          <section className="pb-20 ">
            <div className="w-full md:w-10/12 lg:w-7/12 ">
              <h1 className="font-judul text-5xl md:text-6xl font-bold leading-tight text-[#414040]">Pelayanan Jasa Pembuatan Website di Nexaweb</h1>
              <p className="font-paragraf text-lg font-semibold pt-4">
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
            <div className="seluruh-card grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {listOfferServices.map((item) => (
                <OfferServices key={item.id} icon={item.icon} title={item.title} description={item.description} style="col-span-1 h-full" />
              ))}
            </div>
          </section>
          <section className='pb-20'>
            <Service />
          </section>
          <section className="pb-10">
            <div className="pb-8">
              <h1 className="font-judul text-4xl font-semibold">Jenis Website yang Kami Sediakan</h1>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-10 justify-center">
              {listDataTypeWebsite.map((item) => (
                <TypeOfWebsiteService key={item.id} title={item.title} description={item.description} icon={item.icon} />
              ))}
            </div>
          </section>
        </main>
        <section className="px-5 md:px-10 lg:px-24 pt-16 pb-8 bg-slate-700">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
