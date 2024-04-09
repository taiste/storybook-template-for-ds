import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
 args: {
   text: 'Default Header Text',
   type: 'default',
 },
};

export const Custom: Story = {
  args: {
    text: 'Custom Header Text',
    type: 'custom',
  },
};
