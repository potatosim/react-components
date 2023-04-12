import { FC, PropsWithChildren } from 'react';
import { TestId } from 'enum/TestId';

import styles from './Main.module.scss';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main data-testid={TestId.Main} className={styles.main}>
      {children}
    </main>
  );
};

export default Main;
