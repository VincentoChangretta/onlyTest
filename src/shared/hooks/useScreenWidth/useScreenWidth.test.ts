import { renderHook, act } from '@testing-library/react';
import { useScreenWidth } from './useScreenWidth';

describe('useScreenWidth', () => {
   const resizeWindow = (width: number) => {
      (window as any).innerWidth = width;
      window.dispatchEvent(new Event('resize'));
   };

   test('Возвращает true, если ширина меньше maxWidth', () => {
      const { result } = renderHook(() => useScreenWidth(800));
      act(() => resizeWindow(600));
      expect(result.current).toBe(true);
   });

   test('Возвращает false, если ширина больше maxWidth', () => {
      const { result } = renderHook(() => useScreenWidth(800));
      act(() => resizeWindow(1200));
      expect(result.current).toBe(false);
   });

   test('Обновляется при изменении ширины окна', () => {
      const { result } = renderHook(() => useScreenWidth(1000));

      act(() => resizeWindow(800));
      expect(result.current).toBe(true);

      act(() => resizeWindow(1200));
      expect(result.current).toBe(false);
   });
});
