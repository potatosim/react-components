import React, { Component } from 'react';

import ComponentWithChildren from 'types/ComponentWithChildren';
import { TestId } from 'enum/TestId';
import styles from './Main.module.css';

export default class Main extends Component<ComponentWithChildren> {
  render() {
    return (
      <main data-testid={TestId.Main} className={styles.main}>
        {this.props.children}
      </main>
    );
  }
}
