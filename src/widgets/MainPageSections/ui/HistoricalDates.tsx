import { Title } from 'shared/ui/Title/Title';
import cls from './HistoricalDates.module.scss';

interface CircleProps {
   dots?: number;
}

export const Circle = (props: CircleProps) => {
   const { dots = 6 } = props;
   const safeDots = Math.min(Math.max(dots, 2), 6);
   return (
      <div>
         <div className={cls.circle}>
            {Array.from({ length: safeDots }).map((_, index) => (
               <span
                  key={index}
                  className={cls.dot}
                  style={{
                     offsetDistance: `${(index * 100) / safeDots}%`,
                  }}
               />
            ))}
         </div>
         <div className={cls.circleLines}>
            <div className={cls.horizontalLine}></div>
            <div className={cls.verticalLine}></div>
         </div>
      </div>
   );
};

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
            </div>
         </div>
      </section>
   );
};
