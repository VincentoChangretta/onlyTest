import { Arrow } from 'shared/components/Arrow/Arrow';
import { Button } from 'shared/ui/Button/Button';
import cls from './TimelineControls.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface TimelineControlsProps {
   className?: string;
}

export const TimelineControls = (props: TimelineControlsProps) => {
   const { className } = props;
   return (
      <article className={classNames(className)}>
         <div className={cls.stack}>06/60</div>
         <div className={cls.btnInner}>
            <Button
               shape='rounded'
               className={cls.btn}
            >
               <Arrow direction='left' />
            </Button>
            <Button
               shape='rounded'
               className={cls.btn}
            >
               <Arrow />
            </Button>
         </div>
      </article>
   );
};
