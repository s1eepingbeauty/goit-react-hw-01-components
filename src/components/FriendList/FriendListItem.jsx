import React from 'react';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
);

FriendListItem.propTypes = {
  bookfriend: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default FriendListItem;