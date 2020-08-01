import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from './graphql/queries';

class ProfileCard extends Component {
  state = { showProfile: this.props.showProfile, profile: null };
  async componentDidMount() {
    if (this.props.id !== undefined) {
      const profile = await API.graphql(
        graphqlOperation(getUser, {
          id: this.props.id,
        })
      );
      console.log('profile:', profile);
      //this.setState({ profile: profile.data.getUser.professionalProfile });
    }
  }
  /**
   * comment out below code in production. currently is for resume demo :/
   */
  render() {
    return this.props.showProfile === false ? null : (
      <React.Fragment>
        <div className='container'>
          {/* <div className='sub-header'>name: {this.state.profile.firstName}</div>
          <div className='sub-header'>
            specialties: {this.state.profile.specialties[0]},{' '}
            {this.state.profile.specialties[1]}
          </div>
          <div className='sub-header'>
            years of experience: {this.state.profile.yearsOfExperience}
          </div>
          <div className='sub-header'>rating: {this.state.profile.rating}</div> */}

          <div className='sub-header'>name: Admin </div>
          <div className='sub-header'>specialties: "coding"</div>
          <div className='sub-header'>years of experience: 7</div>
          <div className='sub-header'>rating: 4.8/5.0 </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileCard;
