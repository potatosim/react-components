import { AppRoutes } from 'enum/AppRoutes';
import { PagesNames } from 'enum/PagesNames';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const pageNames: Record<AppRoutes, PagesNames> = {
  [AppRoutes.Home]: PagesNames.Home,
  [AppRoutes.AboutUs]: PagesNames.AboutUs,
};

export default class Header extends Component {
  state: { currentRoute: AppRoutes } = {
    currentRoute: AppRoutes.Home,
  };

  handleRouteChange = (route: AppRoutes) => {
    this.setState({ currentRoute: route });
  };

  render() {
    return (
      <div className={styles.header}>
        <h2>{pageNames[this.state.currentRoute]}</h2>
        <div className={styles.linksWrapper}>
          {Object.entries(pageNames).map(([route, pageName]) => (
            <NavLink
              onClick={() => this.handleRouteChange(route as AppRoutes)}
              key={pageName}
              className={({ isActive }) => (isActive ? `${styles.activeBtn}` : `${styles.link}`)}
              to={route}
            >
              {pageName}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}
