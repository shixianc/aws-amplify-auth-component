import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import Signin from './Signin';
import './AuthDental.css';

class AuthDental extends Component {
  state = {
    password: '',
    email: '',
    phone: '',
    practice: '',
    isSignedUp: false,
  };

  handleSignUp = async (event) => {
    console.log(this.state);
    event.preventDefault();
    const { password, email, phone, practice } = this.state;

    try {
      const signUpResult = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          phone_number: phone,
          'custom:Facility': practice,
        },
      });
      console.log(signUpResult);
      this.setState({ isSignedUp: true });
    } catch (error) {
      console.log('Error sign up:', error);
    }

    // const user = await Auth.currentAuthenticatedUser();
    // console.log('user: ', user);
    // console.log('user: info', user.signInUserSession.idToken.payLoad);
  };
  handlePassword(event) {
    this.setState({ password: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  handlePractice(event) {
    this.setState({ practice: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  handlePhone(event) {
    this.setState({ phone: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  handleExist(event) {
    this.setState({ isSignedUp: true });
    //console.log(event.target.value);
    console.log(this.state);
  }

  render() {
    return this.state.isSignedUp === false ? (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <br />
        <br />
        <form className='form-signin'>
          <h1 className='form-header'>Sign Up</h1>
          <label className='form-label'>
            Practice Name
            <br />
            <input
              className='form-control'
              type='text'
              value={this.state.practice}
              onChange={(event) => this.handlePractice(event)}
            />
          </label>
          <br />
          <label className='form-label'>
            Email
            <br />
            <input
              className='form-control'
              type='text'
              value={this.state.email}
              onChange={(event) => this.handleEmail(event)}
            />
          </label>
          <br />
          <label className='form-label'>
            Phone Number
            <br />
            <input
              className='form-control'
              type='text'
              value={this.state.phone}
              onChange={(event) => this.handlePhone(event)}
            />
          </label>
          <br />
          <label className='form-label'>
            Create Password
            <br />
            <input
              className='form-control'
              type='password'
              value={this.state.password}
              onChange={(event) => this.handlePassword(event)}
            />
          </label>
          <br />
          <button
            className='btn btn-primary btn-lg btn-block'
            onClick={(event) => this.handleSignUp(event)}
          >
            Sign Up
          </button>
          <br />
          <div>
            Existing Account?
            <a
              type='button'
              onClick={(event) => this.handleExist(event)}
              className='form-signup-link'
            >
              Log in here
            </a>
          </div>
        </form>
      </React.Fragment>
    ) : (
      <Signin />
    );
  }
}

export default AuthDental;
