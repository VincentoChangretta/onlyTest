import type { Meta, StoryObj } from '@storybook/react';
import { CircleDots } from './CircleDots';
import { StoreDecorator } from 'shared/storybook/decorators/StoreDecorator/StoreDecorator';
import { TimelineCategory } from 'entities/historicalTimeline';

const mockData: TimelineCategory[] = [
   {
      id: 5,
      title: 'Музыка',
      startYear: 2000,
      endYear: 2005,
      events: [
         { year: 2000, text: 'Эминем выпускает "The Marshall Mathers LP".' },
         { year: 2001, text: 'Linkin Park становятся мировыми рок-звёздами.' },
         { year: 2002, text: 'Нора Джонс завоёвывает сердца с альбомом "Come Away With Me".' },
         { year: 2003, text: '50 Cent выпускает "Get Rich or Die Tryin’".' },
         { year: 2004, text: 'Green Day возвращаются с альбомом "American Idiot".' },
         { year: 2005, text: 'Kanye West задаёт тренды с "Late Registration".' },
      ],
   },
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
   {
      id: 7,
      title: 'Кино',
      startYear: 1995,
      endYear: 2000,
      events: [
         { year: 1997, text: 'Выходит "Титаник" Джеймса Кэмерона.' },
         { year: 1999, text: 'Премьера "Матрицы".' },
      ],
   },
];

const meta: Meta<typeof CircleDots> = {
   title: 'features/Circle/ui/CircleDots',
   component: CircleDots,
   decorators: [
      StoreDecorator({
         historicalTimeline: {
            index: 1,
            historicalTimelineData: mockData,
            currentCategory: mockData[1],
         },
      }),
   ],
   parameters: {
      layout: 'centered',
   },
};

export default meta;
type Story = StoryObj<typeof CircleDots>;


export const Default: Story = {
   args: {
      historicalTimelineData: mockData,
      currentHistoricalTimeline: mockData[1],
   },
};

export const FirstActive: Story = {
   args: {
      historicalTimelineData: mockData,
      currentHistoricalTimeline: mockData[0],
   },
};