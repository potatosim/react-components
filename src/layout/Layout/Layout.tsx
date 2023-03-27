import React from 'react';

import Footer from 'layout/Footer/Footer';
import Header from 'layout/Header/Header';
import Main from 'layout/Main/Main';
import { Outlet } from 'react-router-dom';
import { TestId } from 'enum/TestId';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div data-testid={TestId.Layout} className={styles.layoutWrapper}>
      <div className={styles.topContentWrapper}>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
