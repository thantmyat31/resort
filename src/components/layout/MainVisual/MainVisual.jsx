import React from 'react';

import Button from './../../Button/Button';
import styles from './MainVisual.module.css';
import cx from 'classnames';

const MainVisual = ({ title, info, path, buttonName, isNotHome, backgroundImage }) => {
	
	return (
		<div className={isNotHome ? cx(styles.mainVisual, styles.rooms) :styles.mainVisual} style={ backgroundImage ? { background: `url(${backgroundImage})` }: null}>
            <div className={styles.pageInfo}>
				<h1 className={styles.title}>{title}</h1>
				{info || path ? <span className={styles.ruler}></span>: null}
				{info && <p className={styles.info}>{info}</p>}
				{path && <Button path={path} name={buttonName} />}
            </div>
		</div>
	);
};

export default MainVisual;
