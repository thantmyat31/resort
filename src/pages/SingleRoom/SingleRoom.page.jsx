import React, {useContext} from 'react';
import MainVisual from './../../components/layout/MainVisual/MainVisual';
import {RoomContext} from './../../context/room.context';

import BackgroundImage from './../../assets/image/room-1.jpeg';
import Loading from './../../components/Loading';

const SingleRoomPage = (props) => {
    const {slug} = props.match.params;
    const { getRoom } = useContext(RoomContext);
    const room = getRoom(slug);

    if(!room) {
        return (
            <MainVisual 
                isNotHome={true}
                title="No such room could be found"
                path={`/`}
                buttonName="Return Home"
            />
        );
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    
    return ( 
        <React.Fragment>
            <MainVisual 
                isNotHome={true}
                backgroundImage={images[0] || BackgroundImage}
                title={name}
                path={`/rooms`}
                buttonName="Back to rooms"
            />
        </React.Fragment>
     );
}
 
export default SingleRoomPage;