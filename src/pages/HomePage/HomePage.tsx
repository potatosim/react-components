import Cards from 'components/Cards/Cards';
import SearchField from 'components/SearchField/SearchField';
import React, { Component } from 'react';
import styles from './HomePage.module.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <SearchField />
        <Cards />
      </div>
    );
  }
}
