import SwiperTestimoni from '../Elements/SwiperTestimoni';

const Testimony = () => {
  return (
    <>
      <div>
        <div className="text-center pb-8 pt-10">
          <h1 className="font-judul text-4xl font-semibold">Apa Kata Klien Kami?</h1>
        </div>
        <div className="w-full p-4">
          <SwiperTestimoni></SwiperTestimoni>
        </div>
      </div>
    </>
  );
};

export default Testimony;
