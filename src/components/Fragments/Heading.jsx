import Button from '../Elements/Button';

const Heading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 h-screen w-full">
        <article className="text-center">
          <h1 className="font-judul font-bold text-4xl mb-10">Bangun Website Impian Anda Bersama Nexweb</h1>

          <h3 className="font-subJudul font-semibold text-2xl mb-3">Jasa Pembuatan Webste Profesional Untuk Bisnis dan Personal</h3>
          <p className="font-paragraf font-medium text-lg mb-3 px-32">
            Kami menyediakan layanan pembuatan website modern, responsif, dan berkualitas tinggi untuk mendukung kesuksesan online Anda. Dari toko online hingga portofolio pribadi, Nexaweb siap membantu Anda.
          </p>
        </article>
        <div className="flex gap-8">
          <Button warna="bg-[#3fd62d]">Pesan Sekarang</Button>
          <Button warna="bg-[#D4F6FF]">Lihat Portofolio</Button>
        </div>
      </div>
    </>
  );
};

export default Heading;
