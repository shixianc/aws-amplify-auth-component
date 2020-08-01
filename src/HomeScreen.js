import React, { Component } from 'react';
import LoginMsg from './LoginMsg';
import { Auth } from 'aws-amplify';
import './HomeScreen.css';
import { listJobs } from './graphql/queries';
import ListJobs from './database/ListJobs';

class HomeScreen extends Component {
  render() {
    return (
      // commented out tempar
      // return this.props.userData.OnboardStatus === 'new_user' ? (
      //   // return this.props.userData.OnboardStatus === 'Onboarding' ? (
      //   <React.Fragment>
      //     <LoginMsg />
      //     <br />
      //     <br />
      //     <br />
      //     <form className='form-signin'>
      //       <h3 className='header'>
      //         Please tell us a little bit about yourself!
      //       </h3>
      //       <button className='btn btn-primary btn-lg btn-block'>
      //         SET UP ACCOUNT
      //       </button>
      //       <br />
      //       <br />
      //     </form>
      //   </React.Fragment>
      // ) : (
      // if user onboarding finished
      <form className='form-signin'>
        <LoginMsg userData={this.props.userData} />
        <br />
        <ListJobs userData={this.props.userData} />
        <br />
        <br />
      </form>
    );
  }
}

export default HomeScreen;
