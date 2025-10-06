import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
   title: 'Shared/UI/Title',
   component: Title,
   tags: ['autodocs'],
   argTypes: {
      size: {
         control: { type: 'radio' },
         options: ['main', 'big', 'middle', 'small', 'smallest'],
         description: 'Размер заголовка',
      },
      font: {
         control: { type: 'radio' },
         options: ['font-Bebas', 'font-Montserrat'],
         description: 'Семейство шрифта',
      },
      weight: {
         control: { type: 'radio' },
         options: [
            'font-thin',
            'font-light',
            'font-normal',
            'font-medium',
            'font-semibold',
            'font-bold',
            'font-extrabold',
         ],
         description: 'Толщина шрифта',
      },
      children: {
         control: 'text',
         description: 'Текст внутри заголовка',
      },
   },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Main: Story = {
   args: {
      children: 'Самый большой',
      size: 'main',
      weight: 'bold',
   },
};

export const Smallest: Story = {
   args: {
      children: 'Самый маленький',
      size: 'smallest',
      font: 'Bebas',
      color: 'mainBlue',
   },
};
