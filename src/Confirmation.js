/*
 * This class provides phone number confirmation for Professional signup.
 */
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import Signin from './Signin';
import './Confirmation.css';
import ReactCodeInput from './confirmation-component/ReactCodeInput';
import AuthAlert from './AuthAlert';
import Create from './database/CreateUser';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';
import { listUsers } from './graphql/queries';

class Confirmation extends Component {
  state = { isConfirmed: false, code: '', resent: null };

  addUser = async () => {
    const input = {
      email: this.props.email,
      phone: this.props.phone,
      zipcode: this.props.zipcode,
      userClass: 'Professional',
      OnboardStatus: 'Onboarding',
    };
    try {
      //if (!formState.email || !formState.phone) return;
      await API.graphql(graphqlOperation(createUser, { input: input }));
    } catch (err) {
      console.log('error creating user:', err);
    }

    //testing
    try {
      const queryData = await API.graphql(graphqlOperation(listUsers));
      console.log(queryData);
      const users = queryData.data;
    } catch (err) {
      console.log('error creating user:', err);
    }
  };

  handleConfirm = async () => {
    console.log(this.state);
    const { code } = this.state;
    console.log('confirmation props: ', this.props);
    try {
      await Auth.confirmSignUp(this.props.username, code);
      this.setState({ isConfirmed: true });
      //this.addUser();
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  handleResend = async (event) => {
    event.preventDefault();
    try {
      await Auth.resendSignUp(this.props.username);
      console.log('code resent succesfully');
      this.setState({ resent: 'confirmation_resent' });
    } catch (err) {
      console.log('error resending code: ', err);
    }
  };

  handleInput = (value) => {
    this.setState({ code: value }, this.handleConfirm);
  };

  render() {
    return this.state.isConfirmed ? (
      <React.Fragment>
        <Signin newUser={true} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <form className='form-confirm'>
          <h1 className='form-header'>Verify your phone number</h1>
          <br />
          <h6 className='form-header-sub'>
            Enter the 6 digit code we texted you
          </h6>
          <br />
          <ReactCodeInput
            className='input'
            type='number'
            fields={6}
            fieldWidth={83}
            fieldHeight={89}
            onComplete={this.handleInput}
          />
          <br />
          <br />
          <div>
            Didn't get a code?
            <a
              href='#'
              className='form-resend-link'
              onClick={(event) => this.handleResend(event)}
            >
              Resend Code
            </a>
            <AuthAlert errorType={this.state.resent} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Confirmation;
