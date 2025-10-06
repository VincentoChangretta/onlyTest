import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CircleDots.module.scss';
import { CircleLines } from '../CircleLines/CircleLines';
import { useDispatch } from 'react-redux';
import { useCirclePhase } from '../../../../lib/useCirclePhase/useCirclePhase';
import { historicalTimelineActions } from 'entities/historicalTimeline';
import { TimelineCategory } from 'entities/historicalTimeline';

interface CircleDotsProps {
   historicalTimelineData: TimelineCategory[];
   currentHistoricalTimeline: TimelineCategory;
}

export const CircleDots = (props: CircleDotsProps) => {
   const { historicalTimelineData, currentHistoricalTimeline } = props;
   const dispatch = useDispatch();

   const dotsQuantity = historicalTimelineData.length < 2 ? 1 : Math.min(historicalTimelineData.length, 6);

   const currentIndex = Math.max(
      0,
      historicalTimelineData.findIndex(i => i.id === currentHistoricalTimeline.id),
   );

   const { circleRef } = useCirclePhase({ dotsQuantity, currentIndex });

   const onDotClick = (index: number) => {
      const dataItem = historicalTimelineData[index];
      if (dataItem) {
         dispatch(historicalTimelineActions.setCurrentCategory(dataItem));
      }
   };

   return (
      <div
         className={cls.circle}
         ref={circleRef}
      >
         {Array.from({ length: dotsQuantity }).map((_, index) => {
            const dataItem = historicalTimelineData[index];

            if (!dataItem) return null;

            const isActive = index === currentIndex;

            return (
               <span
                  key={index}
                  className={classNames(cls.dot, { [cls.active]: isActive })}
                  style={{
                     offsetDistance: `calc(var(--phase, 0%) + ${(index * 100) / dotsQuantity}%)`,
                     offsetRotate: '0deg',
                  }}
                  onClick={() => onDotClick(index)}
               >
                  <span className={cls.dotIndex}>{index + 1}</span>
                  <span
                     className={cls.dotTitle}
                     style={{ opacity: isActive ? 1 : 0 }}
                  >
                     {dataItem.title}
                  </span>
               </span>
            );
         })}

         <CircleLines />
      </div>
   );
};
