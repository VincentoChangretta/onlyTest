import type { Meta, StoryObj } from '@storybook/react';
import { Circle } from './Circle';
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
];

const meta: Meta<typeof Circle> = {
   title: 'features/Circle',
   component: Circle,
   decorators: [
      StoreDecorator({
         historicalTimeline: {
            index: 0,
            historicalTimelineData: mockData,
            currentCategory: mockData[0],
         },
      }),
   ],
   parameters: {
      layout: 'centered',
   },
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Default: Story = {};

export const SecondCategoryActive: Story = {
   decorators: [
      StoreDecorator({
         historicalTimeline: {
            index: 1,
            historicalTimelineData: mockData,
            currentCategory: mockData[1],
         },
      }),
   ],
};
