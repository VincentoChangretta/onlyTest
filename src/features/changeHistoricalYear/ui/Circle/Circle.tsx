import { useSelector } from 'react-redux';
import cls from './Circle.module.scss';
import { getHistoricalTimelineData, getCurrentHistoricalTimeline } from 'entities/historicalTimeline';
import { CircleYears } from './ui/CircleYears/CircleYears';
import { CircleDots } from './ui/CircleDots/CircleDots';

export const Circle = () => {
   const historicalTimelineData = useSelector(getHistoricalTimelineData);
   const currentHistoricalTimeline = useSelector(getCurrentHistoricalTimeline);

   return (
      <article className={cls.historyCircle}>
         <CircleYears
            start={currentHistoricalTimeline.startYear}
            end={currentHistoricalTimeline.endYear}
            title={currentHistoricalTimeline.title}
         />

         <CircleDots
            historicalTimelineData={historicalTimelineData}
            currentHistoricalTimeline={currentHistoricalTimeline}
         />
      </article>
   );
};
