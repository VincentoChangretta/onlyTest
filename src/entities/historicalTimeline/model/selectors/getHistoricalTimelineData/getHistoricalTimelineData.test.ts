import { getHistoricalTimelineData } from './getHistoricalTimelineData';
import type { StateSchema } from 'app/providers/storeProvider';
import type { TimelineCategory } from 'entities/historicalTimeline/config/types/types';

describe('getHistoricalTimelineData', () => {
   test('должен вернуть массив historicalTimelineData с вложенными events', () => {
      const mockData: TimelineCategory[] = [
         {
            id: 6,
            title: 'Спорт',
            startYear: 2016,
            endYear: 2021,
            events: [
               { year: 2016, text: 'Олимпиада в Рио: Болт и Фелпс завершают легендарные карьеры.' },
               { year: 2017, text: 'Криштиану Роналду выигрывает 5-й "Золотой мяч".' },
               { year: 2018, text: 'Франция становится чемпионом мира по футболу.' },
               { year: 2019, text: 'Ливерпуль побеждает в Лиге чемпионов.' },
               { year: 2020, text: 'Пандемия останавливает почти все спортивные турниры.' },
               { year: 2021, text: 'Италия выигрывает Евро-2020, турнир года по эмоциям.' },
            ],
         },
      ];

      const mockState = {
         historicalTimeline: {
            historicalTimelineData: mockData,
         },
      } as unknown as StateSchema;

      expect(getHistoricalTimelineData(mockState)).toEqual(mockData);
   });

   test('должен вернуть undefined при пустом стейте', () => {
      const mockState = {} as StateSchema;
      expect(getHistoricalTimelineData(mockState)).toBeUndefined();
   });
});
