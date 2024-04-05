import React from 'react';

export interface LogoProps {
    src: string;
    alt: string;
  }

  const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return (
      <div className="logo-container">
        <img className="logo-image" src={src} alt={alt} />
      </div>
    );
  };

export default Logo;
