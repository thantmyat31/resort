import React from 'react';

import LoadingImage from './../assets/image/gif/loading-arrow.gif';
import LoadingGear from './../assets/image/gif/loading-gear.gif';

const Loading = ({ gear, style }) => {
    return ( 
        <div style={{...styles.container, ...style}}>
            <img src={!gear ? LoadingImage : LoadingGear} style={styles.image} alt="Loading" />
        </div>
     );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width:'70px',
    }
}
 
export default Loading;