import React, { Component } from 'react';

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
      <div>
        <select ref={selectRef}>
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </div>
    );
  }
}
