import React from 'react';
import './TextSection.css';

export interface TextSectionProps {
  title: string;
  content: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, content }) => {
  return (
    <div className="text-section">
      <h2 className="text-section-title">{title}</h2>
      <p className="text-section-content">{content}</p>
    </div>
  );
};

export default TextSection;
