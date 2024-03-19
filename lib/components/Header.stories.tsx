import { Meta, Story } from '@storybook/react';
import Header, { HeaderProps } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Header',
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Custom Header Text',
};
