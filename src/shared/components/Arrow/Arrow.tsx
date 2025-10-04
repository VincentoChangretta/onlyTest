type ArrowDirection = 'left' | 'right';

interface ArrowProps {
   direction?: ArrowDirection;
}

export const Arrow = (props: ArrowProps) => {
   const { direction } = props;
   const isLeft = direction === 'left';

   return (
      <svg
         viewBox='0 0 8.37128 13.9142'
         width='8.37'
         height='13.91'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            d='M6.25 12.5L0 6.25L6.25 0'
            stroke='rgb(66,85,122)'
            strokeWidth='2'
            transform={
               isLeft
                  ? 'matrix(1,0,0,-1,1.41418,13.2071)' 
                  : 'matrix(-1,0,0,-1,6.95709,13.2071)'
            }
         />
      </svg>
   );
};
