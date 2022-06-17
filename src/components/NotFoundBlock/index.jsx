import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
        <h1>
            <span>:(</span>
            <br />
            Not Found
        </h1>
        <p className={styles.description}>Sorry this page not available on our online store</p>
    </div>
  )
}

export default NotFoundBlock;