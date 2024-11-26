import CardPrice from '../Elements/CardPrice';

const Service = () => {
  return (
    <>
      <div>
        <div className="mb-24">
          <h1 className="font-judul text-4xl font-semibold mb-2">Paket Harga Website yang Fleksibel </h1>
          <p className="font-paragraf">Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Tidak ada biaya tersembunyi, semua transparan.</p>
        </div>
        <CardPrice></CardPrice>
      </div>
    </>
  );
};

export default Service;
