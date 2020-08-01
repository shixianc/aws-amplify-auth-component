import React, { Component } from 'react';

class AuthAlert extends Component {
  render() {
    let errorOutput;
    const { errorType } = this.props;
    if (errorType === null) {
      errorOutput = <div />;
    } else if (errorType === 'password_less_than_8') {
      errorOutput = (
        <div className='alert alert-warning' role='alert'>
          Your password must be at least 8 characters long.
        </div>
      );
    } else if (errorType === 'zipcode') {
      errorOutput = (
        <div className='alert alert-warning' role='alert'>
          Invalid zipcode
        </div>
      );
    } else if (errorType === 'username_exist') {
      errorOutput = (
        <div className='alert alert-danger' role='alert'>
          This email has already been registered!
        </div>
      );
    } else if (errorType === 'confirmation_resent') {
      errorOutput = <div>Confirmation sent.</div>;
    }

    return <div>{errorOutput}</div>;
  }
}

export default AuthAlert;
