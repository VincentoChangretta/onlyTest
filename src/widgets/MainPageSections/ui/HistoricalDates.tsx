import { Title } from 'shared/ui/Title/Title';
import cls from './HistoricalDates.module.scss';
import { Circle, TimelineControls } from 'features/changeHistoricalYear';
import { CategorySlider } from 'entities/historicalTimeline';
import { timelineCategories } from 'entities/historicalTimeline/config/data/categories';

export const HistoricalDates = () => {
   return (
      <section>
         <div className={cls.container}>
            <Title
               size='main'
               className={cls.mainTitle}
            >
               Исторические даты
            </Title>
            <div className={cls.contentContainer}>
               <article className={cls.historyCircle}>
                  <div className={cls.mainYears}>
                     <span className={cls.mainYears__from}>2015</span>
                     <span className={cls.mainYears__to}>2022</span>
                  </div>
                  <Circle />
               </article>
               <TimelineControls className={cls.timeline} />
               <CategorySlider categories={timelineCategories[0].events} />
            </div>
         </div>
      </section>
   );
};
