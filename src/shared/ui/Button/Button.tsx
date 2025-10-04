import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonShape = 'default' | 'rounded';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   shape?: ButtonShape;
}

export const Button = (props: ButtonProps) => {
   const { className = '', children, shape = 'default', ...other } = props;

   const mods = {
      [cls.rounded]: shape === 'rounded',
   };

   return (
      <button
         className={classNames(cls.button, mods, [className])}
         {...other}
      >
         {children}
      </button>
   );
};
