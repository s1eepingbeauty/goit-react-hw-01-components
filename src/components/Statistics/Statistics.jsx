import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const getBgColor = () =>
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const Statistics = ({ stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.statsList}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.statsListItem} style={{ backgroundColor: getBgColor() }}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
