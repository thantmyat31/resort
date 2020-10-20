import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({path, name}) => {
    return ( 
        <Link className={styles.button} to={path}>{name}</Link>
     );
}
 
export default Button;