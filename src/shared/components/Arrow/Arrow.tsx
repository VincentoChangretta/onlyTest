import { memo } from 'react';
import cls from './Arrow.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type ArrowDirection = 'left' | 'right';
type ArrowTheme = 'mainBlue' | 'secondaryBlue';

interface ArrowProps {
   direction?: ArrowDirection;
   theme?: ArrowTheme;
   className?: string;
}

export const Arrow = memo((props: ArrowProps) => {
   const { direction = 'right', theme = 'secondaryBlue', className = '' } = props;
   const isLeft = direction === 'left';

   return (
      <svg
         className={classNames(className)}
         viewBox='0 0 8.37128 13.9142'
         width='100%'
         height='100%'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            className={`${cls.arrow} ${cls[theme]}`}
            d='M6.25 12.5L0 6.25L6.25 0'
            transform={isLeft ? 'matrix(1,0,0,-1,1.41418,13.2071)' : 'matrix(-1,0,0,-1,6.95709,13.2071)'}
         />
      </svg>
   );
});
