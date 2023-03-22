import React, { Component } from 'react';

interface CheckBoxInputProps {
  checkInput: React.RefObject<HTMLInputElement>;
}

export default class CheckBoxInput extends Component<CheckBoxInputProps> {
  constructor(props: CheckBoxInputProps) {
    super(props);
  }
  render() {
    const { checkInput } = this.props;
    return (
      <div>
        <label>
          <input ref={checkInput} type="checkbox" />
          First
        </label>
      </div>
    );
  }
}
