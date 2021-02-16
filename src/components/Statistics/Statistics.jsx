import React from 'react';
//import PropTypes from 'prop-types';


const Statistics = ({ stats }) => (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            {stats.map(({ label, percentage }) => (
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Statistics;