import { FC } from 'react';

import ComponentWithChildren from 'types/ComponentWithChildren';
import { TestId } from 'enum/TestId';
import styles from './Main.module.scss';

const Main: FC<ComponentWithChildren> = ({ children }) => {
  return (
    <main data-testid={TestId.Main} className={styles.main}>
      {children}
    </main>
  );
};

export default Main;
