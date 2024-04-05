import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
  };
  export default meta;

  type Story = StoryObj<typeof Input>;

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