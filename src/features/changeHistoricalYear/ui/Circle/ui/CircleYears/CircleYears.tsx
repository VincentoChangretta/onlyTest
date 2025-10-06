import cls from './CircleYears.module.scss';
import { useAnimatedYears } from '../../../../lib/useAnimatedYears/useAnimatedYears';

interface CircleYears {
   start: number;
   end: number;
   title: string;
}

export const CircleYears = (props: CircleYears) => {
   const { start, end, title } = props;
   const { animatedStart, animatedEnd } = useAnimatedYears(start, end);
   return (
      <>
         <div className={cls.mainYears}>
            <span className={cls.mainYears__from}>{animatedStart}</span>
            <span className={cls.mainYears__to}>{animatedEnd}</span>
         </div>
         <div className={cls.currentTitle}>{title}</div>
      </>
   );
};
