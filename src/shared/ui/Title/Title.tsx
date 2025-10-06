import { HTMLAttributes, ReactNode } from 'react';
import cls from './Title.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export type TitleSize = 'main' | 'smallest';
export type TitleFont = 'Bebas' | 'PTSans';
export type TitleWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type TitleColor = 'mainBlue' | 'secondaryBlue';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
   className?: string;
   children: ReactNode;
   size?: TitleSize;
   font?: TitleFont;
   weight?: TitleWeight;
   color?: TitleColor;
}

export const Title = ({
   children,
   size = 'main',
   font = 'PTSans',
   weight = 'normal',
   color = 'secondaryBlue',
   className,
   ...rest
}: TitleProps) => {
   const mods: Record<string, boolean> = {
      [cls[`title__${size}`]]: true,
      [cls[`font-${font}`]]: true,
      [cls[`font-${weight}`]]: true,
      [cls[`color-${color}`]]: true,
   };

   console.log(mods);

   return (
      <h2
         className={classNames(cls.title, mods, [className])}
         {...rest}
      >
         {children}
      </h2>
   );
};
