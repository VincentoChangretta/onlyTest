import { classNames } from './classNames';

describe('classNames utility', () => {
   test('Возвращает базовый класс', () => {
      expect(classNames('base')).toBe('base');
   });

   test('Добавляет дополнительные классы', () => {
      const result = classNames('base', {}, ['extra', 'another']);
      expect(result).toBe('base extra another');
   });

   test('Игнорирует undefined классы в additional', () => {
      const result = classNames('base', {}, ['extra', undefined]);
      expect(result).toBe('base extra');
   });

   test('Добавляет моды, где значение true', () => {
      const result = classNames('base', { active: true, disabled: false });
      expect(result).toBe('base active');
   });

   test('Объединяет base + additional + mods', () => {
      const result = classNames('base', { active: true, hidden: false }, ['extra']);
      expect(result).toBe('base extra active');
   });

   test('Поддерживает строковые значения в mods', () => {
      const result = classNames('base', { theme: 'dark', visible: undefined });
      expect(result).toBe('base theme');
   });

   test('Не добавляет falsy моды', () => {
      const result = classNames('base', { hidden: '', loading: 0 as any });
      expect(result).toBe('base');
   });
});
