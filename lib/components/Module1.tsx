import React from 'react';
import TextSection, { TextSectionProps } from './TextSection';
import Button, { ButtonProps } from './Button';
import './Module1.css';

interface Module1Props {
  textSectionProps: TextSectionProps;
  buttonProps: ButtonProps;
}

const Module1: React.FC<Module1Props> = ({ textSectionProps, buttonProps }) => {
  return (
    <div className="module1">
      <TextSection {...textSectionProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export default Module1;
