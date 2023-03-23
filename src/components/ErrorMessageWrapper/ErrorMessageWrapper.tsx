import React, { Component } from 'react';
import styles from './ErrorMessageWrapper.module.scss';

export default class ErrorMessageWrapper extends Component<{
  children: React.ReactElement | React.ReactNode;
  errorMessage?: string;
}> {
  constructor(props: { children: React.ReactElement | React.ReactNode }) {
    super(props);
  }

  render() {
    return (
      <div className={styles.messageWrapper}>
        {this.props.children}
        {!!this.props.errorMessage && <p className={styles.message}>{this.props.errorMessage}</p>}
      </div>
    );
  }
}
