import React, { Component } from 'react';
import ReactCodeInput from './confirmation-component/ReactCodeInput';

class ConfirmationInput extends Component {
  state = {};
  render() {
    return (
      <ReactCodeInput
        className='form'
        type='number'
        fields={6}
        fieldWidth={83}
        fieldHeight={89}
        onComplete={this.props.handleInput}
      />
    );
  }
}

export default ConfirmationInput;
