import React from 'react';
import './menuItem.scss'
const MenuItem = ({svg,title,chevron}) => {
  return (
    <div className="item">
      <div className="item__content">
        <div className="item__content-img">{svg}</div>
        <div className="item__content-title">{title}</div>
      </div>
      {chevron ? 
      <div className="item__chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path d="M6 12L10 8L6 4" stroke="#9197B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div> 
      : null}
    </div>
  );
};

export default MenuItem;