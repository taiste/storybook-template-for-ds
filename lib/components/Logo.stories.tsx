import { Story, Meta } from '@storybook/react';
import Logo, { LogoProps } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'lib/images/logo-one.svg',
  alt: 'Mimmit Koodaa Logo',
};
