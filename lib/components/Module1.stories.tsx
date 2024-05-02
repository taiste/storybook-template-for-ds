import { Meta, StoryObj } from '@storybook/react';
import Module1 from './Module1';

const meta: Meta<typeof Module1> = {
  component: Module1,
};

export default meta;

type Story = StoryObj<typeof Module1>;

export const Default: Story = {
args : {
  textSectionProps: {
    title: 'Default Title',
    content: 'Default content for the text section.',
  },
  buttonProps: {
    label: 'Click me',
    type: 'default',
    disabled: false,
  },
  logoProps: {
    src: 'lib/images/logo-one.svg',
    alt: 'Mimmit Koodaa Logo',
  }
}
};
