import React, { FC, PropsWithChildren } from 'react';

import styles from './CardWrapper.module.scss';

interface CardWrapperProps extends PropsWithChildren {
  testID?: string;
}

const CardWrapper: FC<CardWrapperProps> = ({ children, testID }) => {
  return (
    <div data-testid={testID} className={styles.cardsWrapper}>
      {children}
    </div>
  );
};

export default CardWrapper;
