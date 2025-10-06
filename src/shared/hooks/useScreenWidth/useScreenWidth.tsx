import { useState, useEffect } from 'react';

export const useScreenWidth = (maxWidth: number) => {
   const [isMatch, setIsMatch] = useState(false);

   useEffect(() => {
      const checkWidth = () => setIsMatch(window.innerWidth <= maxWidth);
      checkWidth();
      window.addEventListener('resize', checkWidth);
      return () => window.removeEventListener('resize', checkWidth);
   }, [maxWidth]);

   return isMatch;
};
