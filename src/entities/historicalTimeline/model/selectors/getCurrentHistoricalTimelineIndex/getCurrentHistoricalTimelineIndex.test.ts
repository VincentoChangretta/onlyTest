import { getCurrentHistoricalTimelineIndex } from './getCurrentHistoricalTimelineIndex';
import type { StateSchema } from 'app/providers/storeProvider';

describe('getCurrentHistoricalTimelineIndex', () => {
   test('должен вернуть index', () => {
      const mockState = {
         historicalTimeline: { index: 2 },
      } as unknown as StateSchema;

      expect(getCurrentHistoricalTimelineIndex(mockState)).toBe(2);
   });

   test('должен вернуть undefined при пустом стейте', () => {
      const mockState = {} as StateSchema;
      expect(getCurrentHistoricalTimelineIndex(mockState)).toBeUndefined();
   });
});
