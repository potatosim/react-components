import React, { ChangeEvent, Component } from 'react';

import { TestId } from 'enum/TestId';
import styles from './SearchField.module.css';

interface ISearchFieldState {
  value: string;
}

export default class SearchField extends Component {
  state: ISearchFieldState = { value: '' };

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  beforeUnloadListener = () => {
    this.setState({ value: this.state.value });
    localStorage.setItem('searchValue', this.state.value);
  };

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.beforeUnloadListener);
    const inputValue = localStorage.getItem('searchValue');
    if (inputValue) {
      this.setState({ value: inputValue });
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.beforeUnloadListener);
    if (this.state.value) {
      localStorage.setItem('searchValue', this.state.value);
    }
  }

  render() {
    return (
      <input
        className={styles.input}
        placeholder="Enter some text"
        value={this.state.value}
        onChange={this.handleChange}
        data-testid={TestId.SearchField}
      />
    );
  }
}
