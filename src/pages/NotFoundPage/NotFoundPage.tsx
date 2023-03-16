import { AppRoutes } from 'enum/AppRoutes';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.imageWrapper}>
          <img src="https://i.pinimg.com/736x/fe/4e/82/fe4e82e755122222288e340a5ff6b6ca.jpg" />
        </div>
        <p className={styles.notFoundText}>The page you are looking for can`t be found</p>
        <div>
          <NavLink className={styles.link} to={AppRoutes.Home}>
            Go back to Home
          </NavLink>
        </div>
      </div>
    );
  }
}
