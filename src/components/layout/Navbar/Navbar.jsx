import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from './../../../assets/image/logo.png';
import { BsTextRight } from 'react-icons/bs';
import cx from 'classnames';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
	const handleOnClick = () => {
        setIsOpen(!isOpen);
	};

	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<Link to="/"><img src={logo} alt="RESORT" /></Link>
				<BsTextRight className={styles.icon} onClick={handleOnClick} />
				<ul className={styles.navContainer}>
					<li className={styles.navItem}>
						<Link to="/">Home</Link>
					</li>
					<li className={styles.navItem}>
						<Link to="/rooms">Rooms</Link>
					</li>
				</ul>
            </div>
            <ul className={isOpen ? cx(styles.hiddenMenu, styles.show) : styles.hiddenMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
            </ul>
		</div>
	);
};

export default Navbar;
