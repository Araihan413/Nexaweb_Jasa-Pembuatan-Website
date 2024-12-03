import porto1 from '../../assets/portofolio/porto1.png';
import Button from '../Elements/Button';

const CardPortofolio = () => {
  return (
    <>
      <div className=" max-w-80 rounded-xl overflow-hidden shadow-lg bg-white">
        <figure className="w-full h-full overflow-hidden relative">
          <div className=" hover:scale-110 hover:blur-sm transition-all">
            <img src={porto1} alt="portofolio 1" />
          </div>
          <Button warna="bg-white/20" style="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Pritinjau
          </Button>
        </figure>
        <article className="p-2 z-10">
          <h1 className="font-medium font-judul">Website Projek Pertama</h1>
          <p className="font-paragraf">www.projekPertama.com</p>
        </article>
      </div>
    </>
  );
};

export default CardPortofolio;
