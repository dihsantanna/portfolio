import { stacksInfo } from '@src/utils';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function CarouselStacks() {
  return (
    <div className="bg-white w-full py-3">
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {stacksInfo.map(({ name, logo }) => (
          <SwiperSlide
            key={name}
          >
            <img
              src={logo}
              alt={name + 'logo'}
              className="w-9"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
