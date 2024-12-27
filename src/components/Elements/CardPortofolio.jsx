import porto1 from '../../assets/image/porto1.png';

const CardPortofolio = () => {
  return (
    <>
      <div className=" max-w-80 rounded-xl overflow-hidden shadow-lg bg-white">
        <figure className="w-full h-full overflow-hidden relative">
          <div className=" hover:scale-110  transition-all">
            <img src={porto1} alt="portofolio 1" />
          </div>
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
