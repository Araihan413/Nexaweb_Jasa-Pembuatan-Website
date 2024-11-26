import CardPortofolio from '../Elements/CardPortofolio';

const Portofolio = () => {
  return (
    <>
      <div>
        <div className="pb-8">
          <h1 className="font-judul text-4xl font-semibold mb-2">Hasil Kerja Kami</h1>
          <p className="font-paragraf max-w-[600px]">Berikut adalah beberapa proyek yang telah kami selesaikan untuk klien kami. Setiap proyek dirancang dengan hati-hati untuk memenuhi kebutuhan spesifik mereka.</p>
        </div>
        <div className="flex gap-5 gap-y-10 flex-wrap justify-center items-center">
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
        </div>
      </div>
    </>
  );
};

export default Portofolio;
