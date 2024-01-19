import React from 'react';
import './profile.scss'

const Profile = ({img, name, position}) => {
  return (
    <div className="profile">
      <img src={img} alt="" className="profile__img" />
      <div className="profile__description">
        <div className="profile__description-name">{name}</div>
        <div className="profile__description-position">{position}</div>
      </div>
    </div>
  );
};

export default Profile;