import React from 'react';
import styles from './HotelService.module.css';

const HotelService = ({ icon, title, description }) => {
	return (
		<div className={styles.container}>
			<div className={styles.service}>
				<span className={styles.icon}>{icon}</span>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default HotelService;
