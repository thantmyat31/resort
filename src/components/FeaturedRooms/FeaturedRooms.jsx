import React, { useContext } from 'react';

import { RoomContext } from '../../context/room.context';
import Loading from '../Loading';
import Room from '../Room/Room';

import styles from './FeaturedRooms.module.css';

const FeaturedRooms = () => {
	const { loading, featuredRooms } = useContext(RoomContext);
    const rooms = featuredRooms.map((room) => <Room key={room.id} room={room} />);

	return (
		<div className={styles.container}>
			<h2>Featured Rooms</h2>
			<span className={styles.ruler} />
			<div className={styles.wrapper}>{loading ? <Loading /> : rooms}</div>
		</div>
	);
};

export default FeaturedRooms;
