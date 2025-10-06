import { useSelector, useDispatch } from 'react-redux';
import cls from './TimelinePagination.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {
   getHistoricalTimelineData,
   getCurrentHistoricalTimeline,
   historicalTimelineActions,
} from 'entities/historicalTimeline';

export const TimelinePagination = () => {
   const dispatch = useDispatch();
   const data = useSelector(getHistoricalTimelineData);
   const current = useSelector(getCurrentHistoricalTimeline);

   const count = data.length;
   const currentIndex = Math.max(
      0,
      data.findIndex(i => i.id === current.id),
   );

   const handleClick = (index: number) => {
      dispatch(historicalTimelineActions.setCurrentCategory(data[index]));
   };

   return (
      <div className={cls.pagination}>
         {Array.from({ length: count }).map((_, index) => (
            <button
               key={index}
               className={classNames(cls.dot, { [cls.active]: index === currentIndex })}
               onClick={() => handleClick(index)}
               aria-label={`Перейти к элементу ${index + 1}`}
            />
         ))}
      </div>
   );
};
