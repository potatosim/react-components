import React, { Component } from 'react';
import styles from './Select.module.scss';

interface ISelectProps {
  selectRef: React.RefObject<HTMLSelectElement>;
}

export default class Select extends Component<ISelectProps> {
  constructor(props: ISelectProps) {
    super(props);
  }
  render() {
    const { selectRef } = this.props;
    return (
      <div className={styles.selectWrapper}>
        <select defaultValue={'Select your country'} ref={selectRef}>
          <option value="Select your country" disabled>
            Select your country
          </option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Russia">Russia</option>
          <option value="Another">Another country</option>
        </select>
      </div>
    );
  }
}
