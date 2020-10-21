import React from 'react';

import styles from './RoomsList.module.css';
import Room from './../Room/Room';

const RoomsList = ({ rooms }) => {
	if (!rooms) {
		return (
			<div className={styles.emptySearch}>
				<h3>Unfortunately No Room Match For Your Search Parameters</h3>
			</div>
		);
	}
	return (
		<div className={styles.roomsList}>
			{rooms.map((room, index) => (
				
					<Room key={index} style={styles.room} room={room} />
				
			))}
		</div>
	);
};

export default RoomsList;
