import { Swiper, SwiperSlide } from 'swiper/react';
import dataTestimoni from '../dataContent/testimoni.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const listTestimoni = dataTestimoni.data;
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

        {listTestimoni.map((item) => {
          return (<SwiperSlide key={item.id} className="py-2">
            <div className="bg-slate-200/20 backdrop-blur shadow-box-glass rounded-lg h-full p-3">
              <div className="flex gap-4 justify-start items-center pb-8">
                <img className="rounded-full w-10 h-10 border-2" src={item.src} alt="profil 1" />
                <div>
                  <h1 className="font-subJudul font-medium">{item.name}</h1>
                  <h1 className="font-paragraf font-medium text-xs">{item.status}</h1>
                </div>
              </div>
              <div className="text-center">
                <div className='flex flex-wrap'>
                  <p className="font-paragraf">{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>)
        })}

        <div className="swiper-pagination absolute"></div>
      </Swiper>
    </>
  );
};

export default SwiperTestimoni;
