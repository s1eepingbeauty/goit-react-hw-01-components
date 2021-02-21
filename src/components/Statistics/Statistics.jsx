import React from 'react';
//import PropTypes from 'prop-types';

const getBgColor = () => (
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
);

const Statistics = ({ stats }) => (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (
                <li key={id} className="item" style={{ backgroundColor: getBgColor() }}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Statistics;