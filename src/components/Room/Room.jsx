import React from 'react';

import Button from './../Button/Button';
import styles from './Room.module.css';
import defaultImage from './../../assets/image/room-1.jpeg';
import PropTypes from 'prop-types';

const Room = ({ room }) => {
	return (
		<div className={styles.container}>
			<div className={styles.column}>
				<div className={styles.wrapper}>
					<img src={room.images[0] || defaultImage} alt="Room" />
					<span>
						<p>${room.price}</p>
						<small>Per Night</small>
					</span>
					<div className={styles.overlay}>
						<Button path={`/rooms/${room.slug}`} name="Features" />
					</div>
				</div>
				<h4>{room.name}</h4>
			</div>
		</div>
	);
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired 
    })
}

export default Room;
