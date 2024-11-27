import bestPrice from '../../assets/bestPrice.png';
import customerService from '../../assets/customerService.png';
import designResponsif from '../../assets/designResponsif.png';
import workflow from '../../assets/workflow.png';
import { useState } from 'react';
const CardSuperior = () => {
  let [dataCard, setDataCard] = useState([
    {
      src: designResponsif,
      alt: 'design Modern dan responsif',
      judul: 'Desain Modern dan Responsif',
      children: 'Kami memahami pentingnya tampilan yang menarik dan fungsional. Website yang kami buat tidak hanya terlihat indah di layar komputer, tetapi juga di perangkat mobile dan tablet.',
    },
    {
      src: customerService,
      alt: 'Support Pelanggan 24/7',
      judul: 'Support Pelanggan 24/7',
      children: 'Kami selalu siap membantu Anda kapan saja. Baik itu masalah teknis atau pertanyaan terkait fitur, tim kami tersedia 24 jam untuk memberikan solusi cepat dan efektif.',
    },
    {
      src: bestPrice,
      alt: 'Harga Terjangkau',
      judul: 'Harga Terjangkau',
      children: 'Kami menawarkan layanan berkualitas tinggi dengan harga yang ramah di kantong. Dengan Nexaweb, Anda tidak perlu mengorbankan kualitas untuk menghemat biaya.',
    },
    {
      src: workflow,
      alt: 'Proses Cepat dan Transparan',
      judul: 'Proses Cepat dan Transparan',
      children: 'Proses pembuatan website kami dirancang agar cepat dan efisien tanpa mengorbankan detail. Kami juga menjamin transparansi penuh dalam setiap langkah, sehingga Anda selalu tahu apa yang sedang dikerjakan.',
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 justify-center">
        {dataCard &&
          dataCard.map((item, index) => {
            return (
              <div className="flex flex-col w-full md:w-1/4 max-w-[540px] p-4 rounded-lg bg-[#FFDDAE] shadow-lg border-2" key={index + 1}>
                <img className="w-20 h-20 mb-3" src={item.src} alt={item.alt} />
                <h2 className="md:font-semibold font-bold font-subJudul leading-5 text-xl md:text-lg pb-2">{item.judul}</h2>
                <p className="font-paragraf font-medium">{item.children}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardSuperior;
