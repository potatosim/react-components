import React from 'react';

import styles from './ErrorNotification.module.scss';

const ErrorNotification = ({ mainText, text }: { mainText: string; text: string }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{mainText}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ErrorNotification;
