import React from 'react';
import MainVisual from '../../components/layout/MainVisual/MainVisual';
import RoomContainer from '../../components/RoomContainer/RoomContainer';

const RoomsPage = () => {
    return ( 
        <React.Fragment>
            <MainVisual 
                isNotHome={true}
                title="Our Rooms"
                path="/"
                buttonName="Return Home"
            />
            <RoomContainer />
        </React.Fragment>
     );
}
 
export default RoomsPage;