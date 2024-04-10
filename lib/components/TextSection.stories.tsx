import { Meta, StoryObj } from '@storybook/react';
import TextSection from './TextSection';

const meta: Meta<typeof TextSection> = {
  component: TextSection,
};
export default meta;

type Story = StoryObj<typeof TextSection>;

export const Default: Story =  {
  args: {
    title: 'Default Title',
    content: 'Default content for the text section.',
  },
};

export const CustomText: Story =  {
  args: {
    title: 'Custom Title',
    content: 'Custom content for the text section.',
  },
};
