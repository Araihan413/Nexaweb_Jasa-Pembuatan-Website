import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import profil1 from '../../assets/profil/profil1.jpg';

const SwiperTestimoni = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          150: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="overflow"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-72 relative">
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="bg-slate-100 rounded-lg h-full p-3  shadow-md">
            <div className="flex gap-4 justify-start items-center pb-5">
              <img className="rounded-full w-10 h-10 border-2" src={profil1} alt="profil 1" />
              <div>
                <h1 className="font-subJudul font-medium">Aulia</h1>
                <h1 className="font-paragraf font-medium text-xs">Pemilik Bisnis Fashion</h1>
              </div>
            </div>
            <div className="text-center">
              <p className="font-paragraf">"Saya sangat puas dengan hasil kerja Nexaweb. Website saya kini terlihat profesional!"</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination absolute"></div>
      </Swiper>
    </>
  );
};

export default SwiperTestimoni;
