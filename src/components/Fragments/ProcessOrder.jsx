const ProcessOrder = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default ProcessOrder;
