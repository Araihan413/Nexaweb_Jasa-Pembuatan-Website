import { motion } from 'framer-motion';
import NavbarTop from '../Fragments/NavbarTop';
import ProcessOrder from '../Fragments/ProcessOrder';
import Footer from '../Fragments/Footer';
import { LineProcess, LineProcessStart, LineProcessEnd } from '../Elements/LineProcess';

const MethodOrderPage = () => {
  const steps = [
    {
      id: '1',
      title: 'Pilih Paket Website',
      titleDescription: 'Tentukan Paket yang Sesuai Kebutuhan Anda',
      description: `Kunjungi halaman Harga dan Paket untuk melihat pilihan paket kami:
- Basic: Untuk website sederhana seperti profil usaha.
- Standard: Cocok untuk website bisnis atau portofolio profesional.
- Premium: Paket lengkap dengan fitur custom, ideal untuk toko online.
Jika Anda tidak yakin memilih paket, hubungi kami untuk konsultasi gratis. Kami akan membantu Anda memilih paket yang sesuai dengan kebutuhan Anda.`,
    },
    {
      id: '2',
      title: 'Penawaran dan Kesepakatan',
      titleDescription: 'Pilih Paket dan Mulai Proyek',
      description: 'Kami akan memberikan penawaran yang mencakup detail layanan, waktu pengerjaan, dan harga. Setelah disepakati, lakukan pembayaran awal untuk memulai proyek.',
    },
    {
      id: '3',
      title: 'Desain dan Pengembangan',
      titleDescription: 'Website Dibangun Sesuai Kebutuhan',
      description: 'Tim kami akan membuat desain awal "mockup" untuk persetujuan Anda, lalu mengembangkan website dengan fitur dan fungsi yang lengkap.',
    },
    {
      id: '4',
      title: 'Revisi dan Pengujian',
      titleDescription: 'Pastikan Website Sempurna',
      description: 'Anda dapat memberikan masukan untuk revisi. Kami juga melakukan pengujian untuk memastikan semua fitur berfungsi dengan baik.',
    },
    {
      id: 5,
      title: 'Peluncuran Website',
      titleDescription: 'Online dan Siap Digunakan',
      description: 'Kami membantu mengunggah website Anda ke domain dan hosting. Website Anda kini siap digunakan, dan kami menyediakan dukungan teknis pasca peluncuran.',
    },
  ];
  return (
    <>
      <div>
        <header>
          <NavbarTop />
        </header>
        <main className="px-5 lg:px-24 md:px-14 py-16 pt-28 md:pt-32 lg:pt-28 bg-kotak-kotak">
          <section>
            <div className="w-full md:w-10/12 lg:w-7/12  pb-10">
              <h1 className="font-judul text-6xl font-bold leading-tight text-[#414040]">Cara Order Website di Nexaweb</h1>
              <p className="font-paragraf pt-4">
                Kami membuat proses pemesanan website mudah dan jelas, sehingga Anda tidak perlu bingung. Ikuti langkah-langkah berikut untuk memesan paket website di Nexaweb hingga website Anda dapat diakses di internet:
              </p>
            </div>
            <div className="flex flex-col  justify-start md:justify-normal items-center md:items-stretch">
              <LineProcessStart />
              {steps.map((step) => {
                return <LineProcess key={step.id} number={step.id} title={step.title} titleDescription={step.titleDescription} description={step.description} />;
              })}
              <LineProcessEnd />
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

export default MethodOrderPage;
