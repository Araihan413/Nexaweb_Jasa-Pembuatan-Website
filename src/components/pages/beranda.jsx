import Button from '../Elements/Button';
import ilustrasi from '../../assets/Programming-pana.svg';
import bgIlustrasi from '../../assets/Programming-pana_bg.svg';
import CardSuperior from '../Elements/CardSuperior';
import CardPrice from '../Elements/CardPrice';
import CardPortofolio from '../Elements/CardPortofolio';
import SwiperTestimoni from '../Elements/SwiperTestimoni';
import WindowMap from '../Elements/WindowMap';

const Beranda = () => {
  return (
    <>
      <section className="pt-24 px-24 bg-red-200 flex flex-col justify-center items-center gap-8 h-screen w-full">
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
      </section>
      <section className="px-24 py-16 bg-blue-200">
        <div className="flex justify-between items-center relative mb-36">
          <div>
            <h1 className="text-4xl font-judul font-semibold mb-8">Mengapa Memilih Nexaweb?</h1>
            <p className="md:w-1/2 font-paragraf">
              Nexaweb adalah tim profesional yang berdedikasi untuk memberikan solusi digital terbaik bagi klien kami. Dengan pengalaman bertahun-tahun, kami telah membantu berbagai bisnis dan individu untuk memperluas jangkauan mereka
              secara online.
            </p>
          </div>
          <figure className="w-80 h-80 absolute -top-3 -z-1 right-0">
            <img src={ilustrasi} alt="ilustrasi programming" />
            <img className="absolute top-0" src={bgIlustrasi} alt="ilustrasi programming" />
          </figure>
        </div>
        <div className="">
          <h3 className="text-center font-judul font-semibold text-3xl mb-8">Keunggulan Menggunakan Jasa Nexaweb</h3>
          <CardSuperior></CardSuperior>
        </div>
      </section>
      <section className="px-24 py-16 bg-orange-200">
        <div className="mb-24">
          <h1 className="font-judul text-4xl font-semibold mb-2">Paket Harga Website yang Fleksibel </h1>
          <p className="font-paragraf">Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Tidak ada biaya tersembunyi, semua transparan.</p>
        </div>
        <CardPrice></CardPrice>
      </section>

      <section className="px-24 py-16 bg-yellow-200">
        <div className="pb-12">
          <h1 className="font-judul text-4xl font-semibold mb-2">Proses Pemesanan Website Di Nexaweb</h1>
          <p className="font-paragraf max-w-[600px]">Kami membuat pemesanan jasa pembuatan website menjadi mudah dan transparan. Ikuti langkah berikut untuk mewujudkan website impian Anda bersama Nexaweb:</p>
        </div>
        <article>
          <div className="grid grid-cols-9 h-16">
            <div className="col-span-2"></div>
            <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-500 after:content-[''] after:w-3 after:h-3 after:bg-blue-500 after:rounded-full after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 "></div>
            <div className="col-span-6"></div>
          </div>
          <div className="grid grid-cols-9">
            <div className="col-span-2  py-5 flex justify-start items-center">
              <h1 className="font-subJdul text-lg font-bold">Konsultasi Awal</h1>
            </div>
            <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-500 after:content-['1'] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:z-10 after:bg-white after:py-1 "></div>
            <div className="col-span-6  px-10 py-5">
              <div className="bg-white border-[1px] rounded-lg shadow-lg p-4 max-w-96">
                <h3 className="font-subJudul text-lg">Diskusikan Kebutuhan Anda</h3>
                <p className="font-paragraf">Hubungi kami untuk membahas kebutuhan website Anda. Ceritakan tujuan, fitur yang diinginkan, dan gaya desain yang sesuai dengan brand Anda.</p>
              </div>
            </div>
          </div>
          <div>
            <h1>2. Penawaran dan Kesepakatan</h1>
            <h3>Pilih Paket dan Mulai Proyek</h3>
            <p>Kami akan memberikan penawaran yang mencakup detail layanan, waktu pengerjaan, dan harga. Setelah disepakati, lakukan pembayaran awal untuk memulai proyek.</p>
          </div>
          <div>
            <h1>3. Desain dan Pengembangan</h1>
            <h3>Website Dibangun Sesuai Kebutuhan</h3>
            <p>Tim kami akan membuat desain awal "mockup" untuk persetujuan Anda, lalu mengembangkan website dengan fitur dan fungsi yang lengkap.</p>
          </div>
          <div>
            <h1>4. Revisi dan Pengujian</h1>
            <h3>Pastikan Website Sempurna</h3>
            <p>Anda dapat memberikan masukan untuk revisi. Kami juga melakukan pengujian untuk memastikan semua fitur berfungsi dengan baik.</p>
          </div>
          <div>
            <h1>5. Peluncuran Website</h1>
            <h3>Online dan Siap Digunakan</h3>
            <p>Kami membantu mengunggah website Anda ke domain dan hosting. Website Anda kini siap digunakan, dan kami menyediakan dukungan teknis pasca peluncuran.</p>
          </div>
        </article>
      </section>
      <section className="px-24 py-16">
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
      </section>
      <section className="px-24 py-16">
        <div className="text-center pb-8 pt-10">
          <h1 className="font-judul text-4xl font-semibold">Apa Kata Klien Kami?</h1>
        </div>
        <div className="w-full p-4">
          <SwiperTestimoni></SwiperTestimoni>
        </div>
      </section>

      <section className="px-24 py-16 bg-teal-300">
        <h1>QnA</h1>
      </section>
      <section className="px-24 py-16">
        <h1>kontak</h1>
      </section>
      <section className="px-24 py-16 bg-slate-700 bg-tulisan-nexaweb">
        <div className="">
          <WindowMap></WindowMap>
        </div>
        <div>
          <h1>logo</h1>
          <h1>Alamat dan telepon</h1>
          <h1>navigasi</h1>
        </div>
        <div>
          <h1>sosial media</h1>
          <h1>copyright</h1>
        </div>
      </section>
    </>
  );
};

export default Beranda;
