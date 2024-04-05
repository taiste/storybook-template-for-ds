import { Meta, Story } from '@storybook/react';
import TextSection, { TextSectionProps } from './TextSection';

const meta: Meta<TextSectionProps> = {
  title: 'Components/TextSection',
  component: TextSection,
};

export default meta;

const Template: Story<TextSectionProps> = (args) => <TextSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
  content: 'Default content for the text section.',
};

export const CustomText = Template.bind({});
CustomText.args = {
  title: 'Custom Title',
  content: 'Custom content for the text section.',
};
