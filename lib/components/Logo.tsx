import React from 'react';
import LogoOneSvg from '../images/logo-one.svg';

export interface LogoProps {
    src: string;
    alt: string;
  }

  const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return (
      <div className="logo-container">
        <LogoOneSvg className="logo-image" src={src} alt={alt} />
      </div>
    );
  };

export default Logo;
