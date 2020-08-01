import React, { Component } from 'react';
import './App.css';

import AuthDental from './AuthDental';
import AuthEmployee from './AuthEmployee';
import Signin from './Signin';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';

import Navigation from './Navigation';

import Confirmation from './Confirmation';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='text-center'>
        <React.StrictMode>
          <Navigation />
          <br />
          <br />
          <br />
          <AuthEmployee />
        </React.StrictMode>
      </div>
    );
  }
}

export default App;

/*

<Navigation />
          <br />
          <br />
          <br />
          <AuthDental />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AuthEmployee />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Signin />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ChangePassword />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ForgotPassword />
          <br />
          <br />

          */
