import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import './ForgotPassword.css';

class ForgotPassword extends Component {
  state = {
    username: '',
    newPassword: '',
    code: '',
    userNameEntered: false,
    hasReset: false,
  };

  handleUsernameSubmit = async (event) => {
    try {
      event.preventDefault();
      const { username } = this.state;
      const result = await Auth.forgotPassword(username);
      this.setState({ userNameEntered: true });
    } catch (err) {
      console.log('Error occur Auth.forgotPassword', err);
    }
  };

  handleUsername = async (event) => {
    const username = event.target.value;
    this.setState({ username: event.target.value });
  };

  handleNewPassword = (event) => {
    this.setState({ newPassword: event.target.value });
  };

  handleCode = (event) => {
    this.setState({ code: event.target.value });
  };

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { username, code, newPassword } = this.state;
      const result = await Auth.forgotPasswordSubmit(
        username,
        code,
        newPassword
      );
      this.setState({ hasReset: true });
    } catch (err) {
      console.log('Resetting Failed, ', err);
    }
  };

  render() {
    return this.state.userNameEntered === false ? (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>

        <form className='form-signin'>
          <h1 className='form-header'>Forgot password</h1>
          <label className='form-label'>
            Please enter your username
            <br />
            <input
              className='form-control'
              type='text'
              value={this.state.username}
              onChange={(event) => this.handleUsername(event)}
            />
          </label>
          <button
            className='btn btn-primary btn-lg btn-block'
            onClick={(event) => this.handleUsernameSubmit(event)}
          >
            Continue
          </button>
        </form>
      </React.Fragment>
    ) : this.state.hasReset === false ? (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <form className='form-signin'>
          <label>
            Enter your confirmation code:
            <br />
            <input
              className='form-control'
              type='text'
              value={this.state.code}
              onChange={(event) => this.handleCode(event)}
            />
          </label>
          <br />
          <label>
            Enter new password:
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
            className='btn btn-primary btn-sm'
            onClick={(event) => this.handleSubmit(event)}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    ) : (
      <div>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <h1 className='form-header'>Reset Successfully!</h1>
        <button className='btn btn-primary btn-lg btn-block'>
          Go back to login
        </button>
      </div>
    );
  }
}

export default ForgotPassword;
