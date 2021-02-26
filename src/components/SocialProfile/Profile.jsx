import React from 'react';
import styles from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, avatar, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propType = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.arrayOf({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}

Profile.defaultProps = {
  name: 'Anonymous',
}

export default Profile;
