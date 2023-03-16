import React, { Component } from 'react';
import styles from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.imageWrapper}>
          <a href="https://github.com/potatosim" rel="noreferrer" target="_blank">
            <img src={'https://cdn-icons-png.flaticon.com/512/1051/1051377.png'} />
          </a>
        </div>
      </div>
    );
  }
}
