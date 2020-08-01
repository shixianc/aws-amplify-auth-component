import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import './Signin.css';

import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';
import { listUsers } from './graphql/queries';

/**
 * Note: Signin requried "username" and "password" to signin.
 * Though we specify to input "email" however, Cognito require to parse "email" as a "username" parameter.
 * So please do not get confused here!
 */

class Signin extends Component {
  state = {
    username: '',
    password: '',
    isSignedIn: false,
    newUser: this.props.newUser, // a boolean value stating if it's first time Signin, passed from Confirmation.js component
    userData: null,
  };

  buildUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const zipcode = await user.attributes['custom:Zipcode'];
    const email = await user.attributes['email'];
    const phone = await user.attributes['phone_number'];
    const userClass = await user.signInUserSession.idToken.payload[
      'cognito:groups'
    ][0];
    const input = {
      email: email,
      phone: phone,
      zipcode: zipcode,
      userClass: userClass,
      OnboardStatus: 'Onboarding',
    };
    return input;
  };

  fetchUser = async () => {
    try {
      const queryData = await API.graphql(graphqlOperation(listUsers));
      const currentUser = queryData.data.listUsers.items;
      if (currentUser.length === 0) {
        const input = await this.buildUserData();
        console.log('input for create is ', input);
        await API.graphql(graphqlOperation(createUser, { input: input }));
        this.fetchUser(); //recursion
      } else if (currentUser.length > 1) {
        console.log(
          'error fetching user: find more User types assocaited with this account.'
        );
      } else {
        this.setState({ userData: currentUser[0] });
      }
    } catch (err) {
      console.log('error fetching user:', err);
    }

    console.log(this.state);
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      const user = await Auth.signIn({
        username: username,
        password: password,
      });
      await this.fetchUser();
      this.setState({ username: '', password: '', isSignedIn: true });
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  handleSignOut = async (event) => {
    try {
      event.preventDefault();
      await Auth.signOut();
      this.setState({ isSignedIn: false, newUser: false });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  handleName(event) {
    this.setState({ username: event.target.value });
    //console.log(event.target.value);
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
    //console.log(event.target.value);
  }

  render() {
    let newUserSignin;
    if (this.state.newUser) {
      newUserSignin = (
        <h5 style={{ color: 'grey', textAlign: 'left' }}>
          You have successfully signed up.{' '}
        </h5>
      );
    }
    return this.state.isSignedIn === false ? (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <form className='form-signin'>
          <div> {newUserSignin} </div>
          <h1 className='form-header'>Sign In</h1>
          <label className='form-label'>
            Email
            <br />
            <input
              className='form-control'
              type='text'
              value={this.state.username}
              onChange={(event) => this.handleName(event)}
            />
          </label>
          <br />
          <label className='form-label'>
            Password
            <a
              href='https://master.d38jixybioco37.amplifyapp.com/'
              className='form-forgot-link'
            >
              forgot password?
            </a>
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
            onClick={(event) => this.handleSignIn(event)}
          >
            Login
          </button>
          <br />
          <div>
            New around here?
            <a
              href='https://master.d38jixybioco37.amplifyapp.com'
              className='form-signup-link'
            >
              Sign up here
            </a>
          </div>
        </form>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <form className='form-signin'>
          <HomeScreen userData={this.state.userData} />
          <button
            className='btn btn-primary btn-block'
            onClick={(event) => this.handleSignOut(event)}
          >
            Sign Out
          </button>
          <br /> <br /> <br />
        </form>
      </React.Fragment>
    );
  }
}

export default Signin;
