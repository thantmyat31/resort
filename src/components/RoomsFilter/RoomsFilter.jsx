import React, { useContext } from 'react';
import { RoomContext } from '../../context/room.context';
import Title from '../Title/Title';

import styles from './RoomsFilter.module.css';

const RoomsFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	const { handleOnChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

	const getUnique = (items, value) => {
		return [ ...new Set(items.map((item) => item[value])) ];
	};

	let types = getUnique(rooms, 'type');
	types = [ 'all', ...types ];
	types = types.map((type, index) => <option key={index}>{type}</option>);

	let capacities = getUnique(rooms, 'capacity');
    capacities = capacities.map((cpty, index) => <option key={index}>{cpty}</option>);

	return (
		<div className={styles.filterContainer}>
			<Title title="Search Rooms" />
			<form className={styles.filterForm}>
				<div className={styles.formGroup}>
					<label htmlFor="type">room type</label>
					<select name="type" id="type" value={type} className={styles.formControl} onChange={handleOnChange}>
						{types}
					</select>
				</div>
                <div className={styles.formGroup}>
                    <label htmlFor="capacity">guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className={styles.formControl}
						onChange={handleOnChange}
					>
						{capacities}
					</select>
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} className={styles.formControl} onChange={handleOnChange} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="size">room size</label>
                    <div className={styles.inputGroup}>
                        <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleOnChange} />
                        <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleOnChange} />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.extra}>
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleOnChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className={styles.extra}>
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleOnChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
			</form>
		</div>
	);
};

export default RoomsFilter;
