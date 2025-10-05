import { Arrow } from 'shared/components/Arrow/Arrow';
import { Button } from 'shared/ui/Button/Button';
import cls from './TimelineControls.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
   historicalTimelineActions,
   getHistoricalTimelineData,
   getCurrentHistoricalTimelineIndex,
} from 'entities/historicalTimeline';

interface TimelineControlsProps {
   className?: string;
}

export const TimelineControls = (props: TimelineControlsProps) => {
   const { className } = props;
   const dispatch = useDispatch();
   const data = useSelector(getHistoricalTimelineData);
   const currentIndex = useSelector(getCurrentHistoricalTimelineIndex);

   const total = data.length;
   const current = currentIndex + 1;

   const handleDispatchNextCategory = useCallback(() => {
      if (currentIndex < total - 1) {
         dispatch(historicalTimelineActions.nextCategory());
      }
   }, [dispatch, currentIndex, total]);

   const handleDispatchPrevCategory = useCallback(() => {
      if (currentIndex > 0) {
         dispatch(historicalTimelineActions.prevCategory());
      }
   }, [dispatch, currentIndex]);

   const isPrevDisabled = currentIndex === 0;
   const isNextDisabled = currentIndex === total - 1;

   return (
      <article className={classNames(cls.timelineControls, {}, [className])}>
         <div className={cls.stack}>
            {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
         </div>

         <div className={cls.btnInner}>
            <Button
               shape='rounded'
               className={cls.btn}
               onClick={handleDispatchPrevCategory}
               disabled={isPrevDisabled}
            >
               <Arrow
                  direction='left'
                  className={cls.arrow}
               />
            </Button>

            <Button
               shape='rounded'
               className={cls.btn}
               onClick={handleDispatchNextCategory}
               disabled={isNextDisabled}
            >
               <Arrow className={cls.arrow} />
            </Button>
         </div>
      </article>
   );
};
