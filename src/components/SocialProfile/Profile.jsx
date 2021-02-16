import React from 'react';
//import PropTypes from 'prop-types';


const Profile = ({ name, avatar, tag, location, stats }) => (
    <div className="profile">
        <div className="description">
            <img className="avatar" src={avatar} alt="Аватар пользователя" width="150" />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile;