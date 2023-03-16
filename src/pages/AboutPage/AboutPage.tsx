import React, { Component } from 'react';
import styles from './AboutPage.module.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.aboutText}>Here is something about us</p>
        <div className={styles.imageWrapper}>
          <img src="http://pm1.narvii.com/6928/ba31013fadd775c5f696f4d4fcbb31746514bdf9r1-386-431v2_00.jpg" />
        </div>
      </div>
    );
  }
}
