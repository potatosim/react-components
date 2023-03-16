import React, { Component } from 'react';
import ComponentWithChildren from 'types/ComponentWithChildren';
import styles from './Main.module.css';

export default class Main extends Component<ComponentWithChildren> {
  render() {
    return <div className={styles.main}>{this.props.children}</div>;
  }
}
