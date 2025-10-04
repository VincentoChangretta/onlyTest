import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { TimelineEvent } from '../../config/types/types';
import cls from './CategorySlider.module.scss';
import { Arrow } from 'shared/components/Arrow/Arrow';
import { useRef } from 'react';

interface CategorySliderProps {
   categories: TimelineEvent[];
   slidesPerView?: number;
}

export const CategorySlider = ({ categories, slidesPerView = 3 }: CategorySliderProps) => {
   const prevRef = useRef<HTMLDivElement>(null);
   const nextRef = useRef<HTMLDivElement>(null);

   return (
      <div className={cls.wrapper}>
         {/* Кастомные стрелки */}
         <div
            ref={prevRef}
            className={`${cls.arrow} ${cls.prev}`}
         >
            <Arrow direction='left' />
         </div>
         <div
            ref={nextRef}
            className={`${cls.arrow} ${cls.next}`}
         >
            <Arrow />
         </div>

         <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            onInit={swiper => {
               if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
               }
            }}
            className={cls.slider}
         >
            {categories.map((item, index) => (
               <SwiperSlide key={index}>
                  <div className={cls.slide}>
                     <h3 className={cls.year}>{item.year}</h3>
                     <p className={cls.text}>{item.text}</p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
