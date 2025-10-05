// Circle.tsx
import { useSelector, useDispatch } from 'react-redux';
import cls from './Circle.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {
   getHistoricalTimelineData,
   getCurrentHistoricalTimeline,
   historicalTimelineActions,
} from 'entities/historicalTimeline';
import { useCirclePhase } from '../../lib/useCirclePhase/useCirclePhase';
import { useAnimatedYears } from '../../lib/useAnimatedYears/useAnimatedYears';

export const Circle = () => {
   const dispatch = useDispatch();
   const data = useSelector(getHistoricalTimelineData);
   const current = useSelector(getCurrentHistoricalTimeline);

   const n = Math.min(Math.max(data.length, 2), 6);
   const currentIndex = Math.max(
      0,
      data.findIndex(i => i.id === current.id),
   );

   const { circleRef } = useCirclePhase({ n, currentIndex });
   const { animatedStart, animatedEnd } = useAnimatedYears(current.startYear, current.endYear);

   const onDotClick = (idx: number) => {
      dispatch(historicalTimelineActions.setCurrentCategory(data[idx]));
   };

   return (
      <article className={cls.historyCircle}>
         <div className={cls.mainYears}>
            <span className={cls.mainYears__from}>{animatedStart}</span>
            <span className={cls.mainYears__to}>{animatedEnd}</span>
         </div>

         <div>
            <div
               className={cls.circle}
               ref={circleRef}
            >
               {Array.from({ length: n }).map((_, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                     <span
                        key={idx}
                        className={classNames(cls.dot, { [cls.active]: isActive })}
                        style={{
                           offsetDistance: `calc(var(--phase, 0%) + ${(idx * 100) / n}%)`,
                           offsetRotate: '0deg',
                        }}
                        onClick={() => onDotClick(idx)}
                     >
                        <span className={cls.dotIndex}>{idx + 1}</span>
                     </span>
                  );
               })}
            </div>

            <div className={cls.circleLines}>
               <div className={cls.horizontalLine}></div>
               <div className={cls.verticalLine}></div>
            </div>
         </div>
      </article>
   );
};
