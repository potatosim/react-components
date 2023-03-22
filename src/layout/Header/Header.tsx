import React, { Component } from 'react';

import { AppRoutes } from 'enum/AppRoutes';
import { NavLink } from 'react-router-dom';
import { PagesNames } from 'enum/PagesNames';
import { TestId } from 'enum/TestId';
import styles from './Header.module.css';

const pageNames: Record<AppRoutes, { name: PagesNames; linkTestId: TestId }> = {
  [AppRoutes.Home]: {
    name: PagesNames.Home,
    linkTestId: TestId.HomePageLink,
  },
  [AppRoutes.AboutUs]: {
    name: PagesNames.AboutUs,
    linkTestId: TestId.AboutPageLink,
  },
  [AppRoutes.Form]: {
    name: PagesNames.Form,
    linkTestId: TestId.AboutPageLink,
  },
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
      <header data-testid={TestId.Header} className={styles.header}>
        <h2 data-testid={TestId.HeaderTitle}>{pageNames[this.state.currentRoute].name}</h2>
        <div className={styles.linksWrapper}>
          {Object.entries(pageNames).map(([route, { name, linkTestId }]) => (
            <NavLink
              onClick={() => this.handleRouteChange(route as AppRoutes)}
              key={name}
              className={({ isActive }) => (isActive ? `${styles.activeBtn}` : `${styles.link}`)}
              to={route}
              data-testid={linkTestId}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </header>
    );
  }
}
