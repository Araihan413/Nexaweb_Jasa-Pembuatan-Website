import { motion } from 'framer-motion';
import { LineProcess, LineProcessStart, LineProcessEnd } from '../Elements/LineProcess';

const ProcessOrder = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  const steps = [
    {
      id: '1',
      title: 'Konsultasi Awal',
      titleDescription: 'Diskusikan Kebutuhan Anda',
      description: 'Ceritakan tujuan, fitur yang diinginkan, dan gaya desain yang sesuai dengan brand Anda.',
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
        <div className="pb-12">
          <motion.h1 variants={inView} whileInView="view" initial="hidden" className="font-judul text-4xl font-semibold mb-2">
            Proses Pemesanan Website Di Nexaweb
          </motion.h1>
          <motion.p variants={inView} whileInView="view" initial="hidden" className="font-paragraf max-w-[600px]">
            Kami membuat pemesanan jasa pembuatan website menjadi mudah dan transparan. Ikuti langkah berikut untuk mewujudkan website impian Anda bersama Nexaweb:
          </motion.p>
        </div>
        <article className="flex flex-col  justify-start md:justify-normal items-center md:items-stretch">
          <LineProcessStart></LineProcessStart>
          {steps.map((step) => {
            return <LineProcess key={step.id} number={step.id} title={step.title} titleDescription={step.titleDescription} description={step.description} style="max-w-96"></LineProcess>;
          })}
          <LineProcessEnd></LineProcessEnd>
        </article>
      </div>
    </>
  );
};

export default ProcessOrder;
