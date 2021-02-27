import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

const getBgColor = () =>
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const Statistics = ({ stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.statsList}>
      {!!stats.length && stats.map(({ id, label, percentage }) => (              // !! - приведение к boolean
        <li key={id} className={styles.statsListItem} style={{ backgroundColor: getBgColor() }}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}

export default Statistics;
