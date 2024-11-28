import CardSuperior from '../Elements/CardSuperior';
import ilustrasi from '../../assets/Programming-pana.svg';
import bgIlustrasi from '../../assets/Programming-pana_bg.svg';

const About = () => {
  return (
    <>
      <div>
        <div className="flex flex-col  gap-10 md:gap-0 lg:flex-row justify-between items-center relative mb-20 md:mb-36">
          <div>
            <h1 className="text-4xl font-judul font-semibold mb-8">Mengapa Memilih Nexaweb?</h1>
            <p className="md:w-1/2 font-paragraf">
              Nexaweb adalah tim profesional yang berdedikasi untuk memberikan solusi digital terbaik bagi klien kami. Dengan pengalaman bertahun-tahun, kami telah membantu berbagai bisnis dan individu untuk memperluas jangkauan mereka
              secara online.
            </p>
          </div>
          <figure className="w-80 h-80 md:top-20   md:absolute relative lg:-top-3 -z-1 right-0">
            <img src={ilustrasi} alt="ilustrasi programming" />
            <img className="absolute top-0" src={bgIlustrasi} alt="ilustrasi programming" />
          </figure>
        </div>
        <div className="md:pt-20 lg:pt-0">
          <h3 className="text-center font-judul font-semibold text-4xl mb-8">Keunggulan Menggunakan Jasa Nexaweb</h3>
          <CardSuperior></CardSuperior>
        </div>
      </div>
    </>
  );
};

export default About;
