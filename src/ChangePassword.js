import { Auth } from 'aws-amplify';
import React, { Component } from 'react';

class ChangePassword extends Component {
  state = { oldPassword: '', newPassword: '', hasChanged: false };

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    try {
      const { oldPassword, newPassword } = this.state;
      const result = await Auth.changePassword(user, oldPassword, newPassword);
      this.setState({ hasChanged: true });
    } catch (err) {
      console.log('Error Change Password', err);
    }
  };

  handleOldPassword = (event) => {
    this.setState({ oldPassword: event.target.value });
  };

  handleNewPassword = (event) => {
    this.setState({ newPassword: event.target.value });
  };

  render() {
    return this.state.hasChanged === false ? (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <form className='form-signin'>
          <h1 className='form-header'>Reset Password</h1>
          <label className='form-label'>
            Old Password
            <br />
            <input
              className='form-control'
              type='password'
              value={this.state.oldPassword}
              onChange={(event) => this.handleOldPassword(event)}
            />
          </label>
          <br />
          <label className='form-label'>
            New Password
            <br />
            <input
              className='form-control'
              type='password'
              value={this.state.newPassword}
              onChange={(event) => this.handleNewPassword(event)}
            />
          </label>
          <br />
          <button
            className='btn btn-primary btn-lg btn-block'
            onClick={(event) => this.handleSubmit(event)}
          >
            Change Password
          </button>
        </form>
      </React.Fragment>
    ) : (
      <div>
        <h1>your password has been changed successfully!</h1>
        <button className='btn btn-primary btn-sm'>Go Back to Login</button>
      </div>
    );
  }
}

export default ChangePassword;
