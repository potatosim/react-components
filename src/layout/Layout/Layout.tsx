import Footer from 'layout/Footer/Footer';
import Header from 'layout/Header/Header';
import Main from 'layout/Main/Main';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.layoutWrapper}>
        <div className={styles.topContentWrapper}>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </div>
        <Footer />
      </div>
    );
  }
}
