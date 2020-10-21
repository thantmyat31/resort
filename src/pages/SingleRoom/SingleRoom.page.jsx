import React, { useContext } from 'react';
import MainVisual from './../../components/layout/MainVisual/MainVisual';
import { RoomContext } from './../../context/room.context';

import BackgroundImage from './../../assets/image/room-1.jpeg';
import styles from './SingleRoom.module.css';

const SingleRoomPage = (props) => {
	const { slug } = props.match.params;
	const { getRoom } = useContext(RoomContext);
	const room = getRoom(slug);

	if (!room) {
		return <MainVisual isNotHome={true} title="No such room could be found" path={`/`} buttonName="Return Home" />;
	}
	const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
	const [ mainImg, ...defaultImg ] = images;

	return (
		<React.Fragment>
			<MainVisual
				isNotHome={true}
				backgroundImage={mainImg || BackgroundImage}
				title={name}
				path={`/rooms`}
				buttonName="Back to rooms"
			/>
			<section className={styles.singleRoom}>
				<div className={styles.singleRoomImages}>
					{defaultImg.map((image, index) => (
                        <div key={index} className={styles.singleRoomImageWrapper}>
                            <div className={styles.container}>
                                <img src={image} alt="single room" />
                            </div>
						</div>
					))}
                </div>
                
                <div className={styles.singleRoomInfo}>
                    <article className={styles.description}>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className={styles.info}>
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>max capacity : {capacity} {capacity > 1 ? "people" : "person"}</h6>
                        <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>

                <div className={styles.singleRoomExtras}>
                    <h6>Extras</h6>
                    <ul className={styles.extras}>
                        {extras.map((ex, index) => <li key={index}>- {ex}</li>)}
                    </ul>
                </div>
            </section>

            
		</React.Fragment>
	);
};

export default SingleRoomPage;
