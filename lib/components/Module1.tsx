import React from 'react';
import TextSection, { TextSectionProps } from './TextSection';
import Button, { ButtonProps } from './Button';
import Logo, { LogoProps } from './Logo';
import './Module1.css';

interface Module1Props {
  textSectionProps: TextSectionProps;
  buttonProps: ButtonProps;
  logoProps: LogoProps;
}

const Module1: React.FC<Module1Props> = ({ textSectionProps, buttonProps, logoProps }) => {
  return (
    <div className="module1">
      <TextSection {...textSectionProps} />
      <Button {...buttonProps} />
      <Logo {...logoProps} />
    </div>
  );
};

export default Module1;
