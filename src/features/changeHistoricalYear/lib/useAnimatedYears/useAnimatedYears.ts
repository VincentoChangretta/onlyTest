import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const useAnimatedYears = (startYear: number, endYear: number) => {
   const [animatedStart, setAnimatedStart] = useState(startYear);
   const [animatedEnd, setAnimatedEnd] = useState(endYear);

   const startYearRef = useRef(startYear);
   const endYearRef = useRef(endYear);

   useLayoutEffect(() => {
      const duration = 1.2;
      const ease = 'power2.out';

      gsap.to(startYearRef, {
         current: startYear,
         duration,
         ease,
         onUpdate: () => setAnimatedStart(Math.round(startYearRef.current)),
      });

      gsap.to(endYearRef, {
         current: endYear,
         duration,
         ease,
         onUpdate: () => setAnimatedEnd(Math.round(endYearRef.current)),
      });
   }, [startYear, endYear]);

   return { animatedStart, animatedEnd };
};
