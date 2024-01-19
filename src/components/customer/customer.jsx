import React from 'react';
import './customer.scss';

const Customer = ({ name = 'Customer Name', company = 'Company', number = 'Phone Number', email = 'Email', country = 'Country', status = 'Status' }) => {
  return (
    <div>
      {status === 'Status' ? 
        <div className="customer" style={{color: '#B5B7C0'}}>
          <div className="customer__name">{name}</div>
          <div className="customer__company">{company}</div>
          <div className="customer__number">{number}</div>
          <div className="customer__email">{email}</div>
          <div className="customer__country">{country}</div>
          <div className="customer__status" >{status}</div>
        </div> : (
        <div className="customer">
          <div className="customer__name">{name}</div>
          <div className="customer__company">{company}</div>
          <div className="customer__number">{number}</div>
          <div className="customer__email">{email}</div>
          <div className="customer__country">{country}</div>
          <div className="customer__status">
            {status === 'Active' ?
              <div className="active__status">Active</div> :
              <div className="inactive__status">Inactive</div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
