import type { Meta, StoryObj } from '@storybook/react';
import { TimelinePagination } from './TimelinePagination';

const meta: Meta<typeof TimelinePagination> = {
   title: 'features/TimelinePagination',
   component: TimelinePagination,
};

export default meta;
type Story = StoryObj<typeof TimelinePagination>;

export const Default: Story = {};
