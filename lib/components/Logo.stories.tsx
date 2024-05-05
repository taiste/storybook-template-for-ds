import { StoryObj, Meta } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    type: 'default',
    src: 'lib/images/logo-one.svg',
    alt: 'Mimmit Koodaa Logo',
  }
}