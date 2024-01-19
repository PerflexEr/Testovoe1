import React from 'react';
import './header.scss'
const Header = ({name='Evano'}) => {
  return (
    <div className="header">
      Hello {name} 👋🏼,
    </div>
  );
};

export default Header;