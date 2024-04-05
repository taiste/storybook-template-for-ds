// Header.tsx
import React from 'react';
import './Header.css'; // Import CSS file

export interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h1 className="header">{text}</h1>; // Apply CSS class
};

export default Header;
