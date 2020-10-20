import React from 'react';

import MainVisual from '../../components/layout/MainVisual/MainVisual';
import HotelServices from '../../components/HotelServices/HotelServices';
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms';

const HomePage = () => {
    return ( 
        <React.Fragment>
            <MainVisual 
                title="the best relax with us"
                info="Delux Rooms Starting At $299"
                path="/rooms"
                buttonName="Our rooms"
            />
            <HotelServices />
            <FeaturedRooms />
        </React.Fragment>
     );
}
 
export default HomePage;