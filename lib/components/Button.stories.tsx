import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click me',
    type: 'default',
    disabled: false,
  },
};

export const DefaultDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    type: 'primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Default.args,
    type: 'primary',
    disabled: true,
  },
};
