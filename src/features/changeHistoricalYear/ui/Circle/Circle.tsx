import cls from './Circle.module.scss';

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
