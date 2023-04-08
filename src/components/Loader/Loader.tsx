import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.background}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
