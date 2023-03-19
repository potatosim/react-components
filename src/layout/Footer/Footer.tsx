import React, { Component } from 'react';

import { TestId } from 'enum/TestId';
import styles from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer data-testid={TestId.Footer} className={styles.footer}>
        <div className={styles.imageWrapper}>
          <a
            data-testid={TestId.FooterLink}
            href="https://github.com/potatosim"
            rel="noreferrer"
            target="_blank"
          >
            <img src={'https://cdn-icons-png.flaticon.com/512/1051/1051377.png'} />
          </a>
        </div>
      </footer>
    );
  }
}
