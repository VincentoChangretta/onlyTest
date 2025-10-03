import { Title } from 'shared/ui/Title/Title';
import cls from './HistoricalDates.module.scss';

export const Circle = ({ dots = 6 }) => {
   return (
      <div className={cls.circle}>
         {Array.from({ length: dots }).map((_, index) => (
            <span
               key={index}
               className={cls.dot}
               style={{
                  offsetDistance: `${(index * 100) / dots}%`,
               }}
            />
         ))}
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
                  {/* <div className={cls.circle}></div> */}
                  <Circle />
               </article>
               <div className={cls.horizontalLine}></div>
               <div className={cls.verticalLine}></div>
            </div>
         </div>
      </section>
   );
};
