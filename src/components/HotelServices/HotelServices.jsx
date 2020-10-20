import React from 'react';

import HotelService from './../HotelService/HotelService';
import HOTEL_SERVICES from './../../data/hotelServices';

import styles from './HotelServices.module.css';

const HotelServices = () => {
    return ( 
        <div className={styles.container}>
            <h2>Services</h2>
            <span className={styles.ruler}></span>
            <div className={styles.wrapper}>
                {
                    HOTEL_SERVICES.map((service, index) => <HotelService key={index} icon={service.icon} title={service.title} description={service.description} />)
                }
            </div>
        </div>
     );
}
 
export default HotelServices;