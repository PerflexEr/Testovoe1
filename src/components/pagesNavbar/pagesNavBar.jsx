import React from 'react';
import './pagesNavBar.scss'
const PagesNavBar = ({amounOfEntries , amountOfpages}) => {
  return (
    <div className="navbar">
      <div className="navbar__info">Showing data 1 to 8 of  {amounOfEntries ? amounOfEntries : '256k'} entries</div>
      <div className="navbar__navigation">
        <button className="navbar__navigation-prevBtn">{'<'}</button>
        <div className="navbar__navigation-pagesContainer">
          <button className="pagesContainer-page">1</button>
          <button className="pagesContainer-page">2</button>
          <button className="pagesContainer-page">3</button>
          <button className="pagesContainer-page dots">...</button>
          <button className="pagesContainer-page">{amountOfpages ? amountOfpages : '40'}</button>
        </div>
        <button className="navbar__navigation-nextBtn">{'>'}</button>
      </div>
    </div>
  );
};

export default PagesNavBar;