import TextSection, { TextSectionProps } from './TextSection';
import Button, { ButtonProps } from './Button';
import Logo, { LogoProps } from './Logo';

export type Module1Type = 'default';

export interface Module1Props {
  type?: Module1Type
  textSectionProps: TextSectionProps;
  buttonProps: ButtonProps;
  logoProps: LogoProps;
}

export const Module1 = (props: Module1Props) => {
  const { type = 'default', textSectionProps, buttonProps, logoProps} = props;

  const module1Classes = ['module1', `module--${type}`].join(' ');

  return (
    <div className={module1Classes}>
      <TextSection {...textSectionProps} />
      <Button {...buttonProps} />
      <Logo {...logoProps} />
    </div>
  );
};

export default Module1;
