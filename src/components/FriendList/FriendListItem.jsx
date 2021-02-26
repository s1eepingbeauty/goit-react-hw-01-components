import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.scss';

const FriendListItem = ({avatar, name, isOnline }) => (
  <li className={styles.friendListItem}>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt={name} />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  bookfriend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;
