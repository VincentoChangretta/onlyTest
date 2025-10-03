import { HTMLAttributes, ReactNode } from 'react';
import './Title.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export type TitleSize = 'main' | 'big' | 'middle' | 'small' | 'smallest';
export type TitleFont = 'font-Bebas' | 'font-Montserrat';
export type TitleWeight =
   | 'font-thin'
   | 'font-light'
   | 'font-normal'
   | 'font-medium'
   | 'font-semibold'
   | 'font-bold'
   | 'font-extrabold';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
   children: ReactNode;
   size?: TitleSize;
   font?: TitleFont;
   weight?: TitleWeight;
}

export const Title = ({
   children,
   size = 'big',
   className,
   font = 'font-Bebas',
   weight = 'font-normal',
   ...rest
}: TitleProps) => {
   return (
      <h2
         className={classNames('title', {}, [`title__${size}`, font, weight, className])}
         {...rest}
      >
         {children}
      </h2>
   );
};
