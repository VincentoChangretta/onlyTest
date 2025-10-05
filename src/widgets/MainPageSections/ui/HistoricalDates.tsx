import { Title } from 'shared/ui/Title/Title';
import cls from './HistoricalDates.module.scss';
import { Circle, TimelineControls } from 'features/changeHistoricalYear';
import { CategorySlider } from 'entities/historicalTimeline';

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
               <Circle />
               <div className={cls.sliderBox}>
                  <div className={cls.sliderControls}>
                     <TimelineControls className={cls.timeline} />
                  </div>
                  <CategorySlider />
               </div>
            </div>
         </div>
      </section>
   );
};
