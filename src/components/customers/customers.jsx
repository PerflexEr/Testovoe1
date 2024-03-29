import React from 'react';
import Search from '../search/search';
import Customer from '../customer/customer';
import PagesNavBar from '../pagesNavbar/pagesNavBar';
import './customers.scss'
const Customers = () => {
  return (
    <div className="customers">
      <div className="customers-header">
        <div className="customers__text">
          <h1 className="customers__text-title">All Customers</h1>
          <div className="customers__text-subtitle">Active Members</div>
        </div>
        <div className="customers__search"><Search/></div>
      </div>
      <div className="customers__container">
         <Customer/>
         <Customer name={'Jane Cooper'} company={'Microsoft'} number={'(225) 555-0118'} email={'jane@microsoft.com'} country={'United States'} status={'Active'} />
         <Customer name={'Floyd Miles'} company={'Yahoo'} number={'(205) 555-0100'} email={'floyd@yahoo.com'} country={'Kiribati'} status={'Inactive'} />
         <Customer name={'Ronald Richards'} company={'Adobe'} number={'(302) 555-0107'} email={'ronald@adobe.com'} country={'Israel'} status={'Inactive'} />
         <Customer name={'Marvin McKinney'} company={'Tesla'} number={'(252) 555-0126'} email={'marvin@tesla.com'} country={'Iran'} status={'Active'} />
         <Customer name={'Jerome Bell'} company={'Google'} number={'(629) 555-0129'} email={'jerome@google.com'} country={'Réunion'} status={'Active'} />
         <Customer name={'Kathryn Murphy'} company={'Microsoft'} number={'(406) 555-0120'} email={'kathryn@microsoft.com'} country={'Curaçao'} status={'Active'} />
         <Customer name={'Jacob Jones'} company={'Yahoo'} number={'(208) 555-0112'} email={'jacob@yahoo.com'} country={'Brazil'} status={'Active'} />
         <Customer name={'Kristin Watson'} company={'Facebook'} number={'(704) 555-0127'} email={'kristin@facebook.com'} country={'Åland Islands'} status={'Inactive'} />
      </div>
      <PagesNavBar className="customers__navbar"/>
    </div>
  );
};

export default Customers;