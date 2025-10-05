import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseCirclePhaseProps {
   n: number;
   currentIndex: number;
}

export const useCirclePhase = ({ n, currentIndex }: UseCirclePhaseProps) => {
   const circleRef = useRef<HTMLDivElement>(null);
   const phaseRef = useRef(0);
   const firstRenderRef = useRef(true);

   useLayoutEffect(() => {
      if (!circleRef.current || n === 0) return;

      const stepPct = 100 / n;
      const TARGET_AT_45 = 83.3;

      let target = TARGET_AT_45 - currentIndex * stepPct;
      let prev = phaseRef.current;

      let diff = target - prev;
      if (diff > 50) target -= 100;
      else if (diff < -50) target += 100;

      if (firstRenderRef.current) {
         gsap.set(circleRef.current, { css: { ['--phase' as any]: `${target}%` } });
         phaseRef.current = target;
         firstRenderRef.current = false;
         return;
      }

      gsap.to(circleRef.current, {
         duration: 0.8,
         ease: 'power3.inOut',
         css: { ['--phase' as any]: `${target}%` },
         onUpdate: () => {
            const currentPhase = gsap.getProperty(circleRef.current, '--phase');
            phaseRef.current = parseFloat(currentPhase as string);
         },
         onComplete: () => {
            phaseRef.current = ((target % 100) + 100) % 100;
            gsap.set(circleRef.current, {
               css: { ['--phase' as any]: `${phaseRef.current}%` },
            });
         },
      });
   }, [currentIndex, n]);

   return { circleRef };
};
