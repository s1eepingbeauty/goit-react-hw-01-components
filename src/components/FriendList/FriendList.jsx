import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => (
    <ul>
        {friends.map((friend) => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    }),
  ),
};

FriendList.defaultProps = {
  friends: [],
};

export default FriendList;