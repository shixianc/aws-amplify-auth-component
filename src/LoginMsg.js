import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import './LoginMsg.css';
import ProfileCard from './ProfileCard';

class LoginMsg extends Component {
  state = {
    name: '',
    showProfile: false,
  };

  async componentDidMount() {
    this.getWelcomeMessage();
    // try {
    //   const queryData = await API.graphql(graphqlOperation(listUsers));
    //   const users = queryData.data;
    //   console.log(users);
    // } catch (err) {
    //   console.log('error creating user:', err);
    // }
  }

  async getWelcomeMessage() {
    const user = await Auth.currentAuthenticatedUser();
    var firstname = await user.attributes['custom:FirstName'];
    var lastname = await user.attributes['custom:LastName'];
    console.log(user);
    this.setState({
      name: firstname.concat(' ', lastname),
    });
  }

  handleShowProfile = () => {
    this.setState({ showProfile: true });
  };

  render() {
    return (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <form className='container'>
          <h1 className='sub-header'>
            Hi, {this.state.name}
            <a
              href='#'
              onClick={(event) => this.handleShowProfile(event)}
              class='badge badge-light'
            >
              Profile
            </a>
          </h1>
          <ProfileCard
            showProfile={this.state.showProfile}
            // id={
            //   this.props.userData === undefined ? null : this.props.userData.id
            // }  commented out for resume demo
            id='1'
          />
        </form>
      </React.Fragment>
    );
  }
}

export default LoginMsg;
