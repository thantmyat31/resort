import React, {useContext} from 'react';

import { RoomContext } from './../../context/room.context';

import RoomsFilter from './../RoomsFilter/RoomsFilter';
import RoomsList from './../RoomsList/RoomsList';
import Loading from './../Loading';

const RoomContainer = () => {
    const {rooms, sortedRooms, loading} = useContext(RoomContext);
    if(loading) {
        return <Loading />
    }
    
    return ( 
        <React.Fragment>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </React.Fragment>
     );
}
 
export default RoomContainer;