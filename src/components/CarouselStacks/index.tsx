import { stacksInfo } from '@src/utils';
import { Autoplay, FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StackModal } from './StackDetails';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function CarouselStacks() {

  return (
    <div className="animate-[bottomToTop_1s_ease-in-out] w-full max-w-[1169px] m-auto">
      <span className="flex justify-center text-sm md:justify-start md:text-base max-w-[1169px] w-full m-auto">Minhas Stacks:</span>
      <div className="bg-white w-full py-3 rounded-md">
        <Swiper
          slidesPerView={5}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode, Navigation]}
        >
          {stacksInfo.map((stackInfo) => (
            <SwiperSlide
              key={stackInfo.name}
              className="flex justify-center items-center cursor-pointer"
            >
              <StackModal stackInfo={stackInfo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span className="flex justify-start text-xs max-w-[1169px] w-full m-auto pt-1">*Clique nos icones das stacks para mais informações.</span>
    </div>
  );
}
