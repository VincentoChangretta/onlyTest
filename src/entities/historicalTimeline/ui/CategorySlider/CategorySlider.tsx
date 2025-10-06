import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import './Slider.scss';
import cls from './CategorySlider.module.scss';
import { Arrow } from 'shared/components/Arrow/Arrow';
import { getCurrentHistoricalTimeline } from 'entities/historicalTimeline';

export const CategorySlider = () => {
   const prevRef = useRef<HTMLDivElement>(null);
   const nextRef = useRef<HTMLDivElement>(null);
   const sliderRef = useRef<any>(null);
   const sliderContainerRef = useRef<HTMLDivElement>(null);
   const firstRenderRef = useRef(true);

   const currentHistoricalTimeline = useSelector(getCurrentHistoricalTimeline);

   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   useLayoutEffect(() => {
      if (!sliderContainerRef.current) return;

      if (firstRenderRef.current) {
         firstRenderRef.current = false;
         return;
      }

      const el = sliderContainerRef.current;
      const tl = gsap.timeline();

      tl.to(el, { opacity: 0, duration: 0.3, ease: 'power2.out' })
         .set(el, { opacity: 0 })
         .to(el, { opacity: 1, duration: 0.5, ease: 'power2.inOut' });

      return () => {
         tl.kill();
      };
   }, [currentHistoricalTimeline]);

   useEffect(() => {
      if (!sliderRef.current) return;

      setTimeout(() => {
         if (
            sliderRef.current &&
            sliderRef.current.params.navigation &&
            typeof sliderRef.current.params.navigation !== 'boolean'
         ) {
            sliderRef.current.params.navigation.prevEl = prevRef.current;
            sliderRef.current.params.navigation.nextEl = nextRef.current;
            sliderRef.current.navigation.init();
            sliderRef.current.navigation.update();
         }
      });
   }, []);

   return (
      <>
         <div className={cls.wrapper}>
            <div
               ref={prevRef}
               className={`${cls.arrowBtn} ${cls.prev} ${isBeginning ? cls.disabled : ''}`}
            >
               <Arrow
                  direction='left'
                  theme='mainBlue'
                  className={cls.arrow}
               />
            </div>

            <div
               ref={nextRef}
               className={`${cls.arrowBtn} ${cls.next} ${isEnd ? cls.disabled : ''}`}
            >
               <Arrow
                  theme='mainBlue'
                  className={cls.arrow}
               />
            </div>

            <div ref={sliderContainerRef}>
               <Swiper
                  className={cls.slider}
                  modules={[Navigation, Pagination, FreeMode]}
                  spaceBetween={30}
                  slidesPerView={3}
                  pagination={{ clickable: true, el: '.custom-pagination' }}
                  onSwiper={swiper => (sliderRef.current = swiper)}
                  onSlideChange={swiper => {
                     setIsBeginning(swiper.isBeginning);
                     setIsEnd(swiper.isEnd);
                  }}
                  touchRatio={1}
                  shortSwipes={true}
                  resistanceRatio={0.85}
                  watchSlidesProgress={true}
                  breakpoints={{
                     0: {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                     },
                     600: {
                        slidesPerView: 2, // было auto
                     },
                     1000: {
                        slidesPerView: 3,
                        freeMode: false,
                     },
                  }}
               >
                  {currentHistoricalTimeline.events.map((item, index) => (
                     <SwiperSlide key={index}>
                        <div className={cls.slide}>
                           <h3 className={cls.year}>{item.year}</h3>
                           <p className={cls.text}>{item.text}</p>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </>
   );
};
