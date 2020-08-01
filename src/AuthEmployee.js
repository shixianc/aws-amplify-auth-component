import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import Confirmation from './Confirmation';
import './AuthEmployee.css';
import AuthAlert from './AuthAlert';
import Create from './database/CreateUser';
import Signin from './Signin';

// npm 3rd party packages
import InputMask from 'react-input-mask';

// constants
const PASSWORD_MIN_LENGTH = 8;
const PASSWORF_MAX_LENGTH = 256;
const ZIPCODE_LENGTH = 5;
const REGEX_CHECK_IS_DIGIT = /^\d+$/;

// initial state
const initialState = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  phone: '',
  zipcode: '',
  isSignedUp: false,
  toSignIn: false,
  zipCodeError: null,
  passwordError: null,
  authError: null,
};

class AuthEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset = () => {
    this.setState({
      ...initialState,
      zipCodeError: this.state.zipCodeError,
      passwordError: this.state.passwordError,
    });
  };

  /*
   * This function pre-process the attributes used to signup
   * after processing it will callback to handleSignup function.
   */
  handlePreSignUp = (event) => {
    event.preventDefault();
    const { password, zipcode, phone, email } = this.state;

    let hasError = false;

    // password format checking
    if (
      password.length < PASSWORD_MIN_LENGTH ||
      password.length > PASSWORF_MAX_LENGTH
    ) {
      this.setState({ passwordError: 'password_less_than_8' });
      hasError = true;
    } else {
      this.setState({ passwordError: null });
      hasError = false;
    }

    if (
      zipcode.length !== ZIPCODE_LENGTH ||
      !REGEX_CHECK_IS_DIGIT.test(zipcode)
    ) {
      //zipcode format checking
      this.setState({ zipCodeError: 'zipcode' });
      hasError = true;
    } else {
      this.setState({ zipCodeError: null });
      hasError = false;
    }

    // check if format checking passed, clear state if not
    if (hasError) {
      //this.reset();
      //console.log('after reset', this.state);
      return;
    }

    // if (email) {
    //   //zipcode format checking
    //   this.setState({ passwordError: 'zipcode_count' });
    //   return;
    // }

    // extracting digit number and '+' at the beginning
    var phone_number = phone.replace(/[^0-9+]/g, '');
    this.setState({ phone: phone_number }, this.handleSignUp);
  };

  handleSignUp = async () => {
    const { firstname, lastname, password, email, phone, zipcode } = this.state;

    try {
      const signUpResult = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          phone_number: phone,
          'custom:Zipcode': zipcode,
          'custom:FirstName': firstname,
          'custom:LastName': lastname,
        },
      });
      this.setState({ isSignedUp: true });
    } catch (error) {
      console.log('Error sign up:', error);
      if (error.code === 'UsernameExistsException') {
        this.setState({ authError: 'username_exist' });
      }
    }

    // const user = await Auth.currentAuthenticatedUser();
    // console.log('user: ', user);
    // console.log('user: info', user.signInUserSession.idToken.payLoad);
  };

  handleFirstName(event) {
    this.setState({ firstname: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }

  handleLastName(event) {
    this.setState({ lastname: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  // handleTitle(event) {
  //   this.setState({ title: event.target.value });
  //   //console.log(event.target.value);
  //   console.log(this.state);
  // }
  handleEmail(event) {
    this.setState({ email: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  handleZipcode(event) {
    this.setState({ zipcode: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  handlePhone(event) {
    this.setState({ phone: event.target.value });
    //console.log(event.target.value);
    console.log(this.state);
  }
  toSignInPage(event) {
    this.setState({ toSignIn: true });
    console.log(this.state);
  }

  render() {
    return this.state.toSignIn === false ? (
      this.state.isSignedUp === false ? (
        <React.Fragment>
          <link
            href='https://fonts.googleapis.com/css?family=Fira+Sans'
            rel='stylesheet'
          ></link>
          <form className='form-signin'>
            <h1 className='form-header'>Sign Up</h1>
            <AuthAlert errorType={this.state.authError} />
            <div className='form-row'>
              <div className='form-label col-sm-6'>
                <label>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.username}
                  onChange={(event) => this.handleFirstName(event)}
                />
              </div>
              <div className='form-label col-sm-6'>
                <label>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.username}
                  onChange={(event) => this.handleLastName(event)}
                />
              </div>
            </div>
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
              <InputMask
                className='form-control'
                type='text'
                value={this.state.phone}
                onChange={(event) => this.handlePhone(event)}
                mask='+1 (999) 999-9999'
              />
            </label>
            <br />
            <label className='form-label'>
              Zip Code
              <br />
              <input
                className='form-control'
                type='text'
                value={this.state.zipcode}
                onChange={(event) => this.handleZipcode(event)}
              />
            </label>
            <AuthAlert errorType={this.state.zipCodeError} />
            <label className='form-label'>
              Create Password
              <br />
              <InputMask
                className='form-control'
                type='password'
                value={this.state.password}
                onChange={(event) => this.handlePassword(event)}
                placeholder='at least 8 characters'
              />
            </label>
            <br />
            <AuthAlert errorType={this.state.passwordError} />
            <button
              className='btn btn-primary btn-lg btn-block'
              onClick={(event) => this.handlePreSignUp(event)}
            >
              Sign Up
            </button>
            <br />
            <div>
              Existing Account?
              <a
                href='#'
                className='form-signup-link'
                onClick={(event) => this.toSignInPage(event)}
              >
                Log in here
              </a>
            </div>
          </form>
        </React.Fragment>
      ) : (
        <Confirmation
          username={this.state.email}
          email={this.state.email}
          zipcode={this.state.zipcode}
          phone={this.state.phone}
        />
      )
    ) : (
      <Signin />
    );
  }
}

export default AuthEmployee;

/*
    below is the Skill Selecting Component
          <br />
          <select onChange={(event) => this.handleTitle(event)}>
            <option value='Dental Hygienist'>Dental Hygienist</option>
            <option value='Dental Studetn'>Dental Student</option>
            <option value='RDA'>RDA</option>
            <option value='DA'>DA</option>
            <option value='Hygienist Intern'>Hygienist Intern</option>
            <option value='RDEAF'>RDEAF</option>
          </select>

*/

/* 
  below are some sample code
*/

// class AuthEmployee extends Component {
//   state = {
//     name: '',
//     description: '',
//     speakerName: '',
//     speakerBio: '',
//     talks: [],
//   };

//   async componentDidMount() {
//     const user = await Auth.currentAuthenticatedUser();
//     console.log('user: ', user);
//     console.log('user: info', user.signInUserSession.idToken.payLoad);

//     try {
//       const talkData = await API.graphql(graphqlOperation(ListTalks));
//       console.log('talk data:', talkData);
//       this.setState({ talks: talkData.data.listTalks.items });
//     } catch (err) {
//       console.log('error fetching listTalks from aws', err);
//     }
//   }

//   createTalk = async () => {
//     const { name, description, speakerBio, speakerName } = this.state;
//     if (
//       name === '' ||
//       description === '' ||
//       speakerBio === '' ||
//       speakerName === ''
//     ) {
//       return;
//     }

//     const talk = {
//       name,
//       description,
//       speakerBio,
//       speakerName,
//       clientId: CLIENT_ID,
//     };
//     const talks = [...this.state.talks, talk]; //append new talk item
//     this.setState({
//       talks,
//       name: '',
//       description: '',
//       speakerName: '',
//       speakerBio: '',
//     });

//     try {
//       await API.graphql(graphqlOperation(CreateTalk, { input: talk }));
//       console.log('item created');
//     } catch (err) {
//       console.log('error creating item', err);
//     }
//   };

//   render() {
//     return (
//       <div>
//         {this.state.talks.map((talk, index) => (
//           <div key={index}>
//             <h3>{talk.id}</h3>
//             <h3>{talk.speakerName}</h3>
//             <h3>{talk.speakerBio}</h3>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default withAuthenticator(AuthEmployee, { includeGreetings: true });
