import React from 'react';
import MainVisual from '../../components/layout/MainVisual/MainVisual';

const RoomsPage = () => {
    return ( 
        <div>
            <MainVisual 
                isNotHome={true}
                title="Our Rooms"
                path="/"
                buttonName="Return Home"
            />
        </div>
     );
}
 
export default RoomsPage;