import React from 'react';

import styles from './Title.module.css';

const Title = ({ title }) => {
    return ( 
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.ruler}></span>
        </div>
     );
}
 
export default Title;