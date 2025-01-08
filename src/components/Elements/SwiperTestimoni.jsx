import { Swiper, SwiperSlide } from 'swiper/react';
import dataTestimoni from '../dataContent/testimoni.json';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import imgTestimoni1 from '../../assets/image/img-profil-1.jpg'
import imgTestimoni2 from '../../assets/image/img-profil-2.jpg'
import imgTestimoni3 from '../../assets/image/img-profil-3.jpg'
import imgTestimoni4 from '../../assets/image/img-profil-4.jpg'
import imgTestimoni5 from '../../assets/image/img-profil-5.jpg'
import imgTestimoni6 from '../../assets/image/img-profil-6.jpg'
import imgTestimoni7 from '../../assets/image/img-profil-7.jpg'

const listTestimoni = dataTestimoni.data;
const imgTestimoni = [imgTestimoni1, imgTestimoni2, imgTestimoni3, imgTestimoni4, imgTestimoni5, imgTestimoni6, imgTestimoni7]
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
                <img className="rounded-full w-10 h-10 border-2" src={imgTestimoni[item.id - 1]} alt="profil 1" />
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
