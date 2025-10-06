import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Arrow } from 'shared/components/Arrow/Arrow';

const meta: Meta<typeof Button> = {
   title: 'Shared/UI/Button',
   component: Button,
   tags: ['autodocs'],
   argTypes: {
      shape: {
         control: { type: 'radio' },
         options: ['default', 'rounded'],
         description: 'Форма кнопки',
      },
      disabled: {
         control: 'boolean',
         description: 'Блокировка кнопки',
      },
      children: {
         control: 'text',
         description: 'Текст внутри кнопки',
      },
      onClick: { action: 'clicked' },
   },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
   args: {
      children: <Arrow />,
      shape: 'default',
   },
};

export const Rounded: Story = {
   args: {
      children: <Arrow />,
      shape: 'rounded',
   },
};

export const Disabled: Story = {
   args: {
      children: <Arrow />,
      shape: 'default',
      disabled: true,
   },
};
