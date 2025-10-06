import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonShape = 'default' | 'rounded';
type ButtonStyle = 'slider';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   shape?: ButtonShape;
   buttonStyle?: ButtonStyle;
}

export const Button = memo((props: ButtonProps) => {
   const { className = '', children, shape = 'default', buttonStyle = 'slider', ...other } = props;

   const mods = {
      [cls.rounded]: shape === 'rounded',
      [cls.slider]: buttonStyle === 'slider',
   };

   return (
      <button
         className={classNames(cls.button, mods, [className])}
         {...other}
      >
         {children}
      </button>
   );
});
