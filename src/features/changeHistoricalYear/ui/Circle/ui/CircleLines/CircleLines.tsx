import cls from './CircleLines.module.scss';

export const CircleLines = () => {
   return (
      <div className={cls.circleLines}>
         <div className={cls.horizontalLine}></div>
         <div className={cls.verticalLine}></div>
      </div>
   );
};
